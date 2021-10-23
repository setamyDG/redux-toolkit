import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from '@redux/counter/slice';
import 'jest-styled-components';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: {
    counter: {
      value: 10,
    },
  },
});

const AllTheProviders: FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  return render(ui, { wrapper: AllTheProviders, ...options });
};
export * from '@testing-library/react';

export { customRender as render };
