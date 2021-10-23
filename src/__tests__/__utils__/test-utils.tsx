import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles';

const AllTheProviders: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

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
