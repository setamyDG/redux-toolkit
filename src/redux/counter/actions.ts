import { AppThunk } from '@redux/store';
import { decrement, increment, incrementByAmount, setToZero } from './slice';

export const incrementValue = (): AppThunk => async (dispatch) => {
  dispatch(increment());
};

export const decrementValue = (): AppThunk => async (dispatch) => {
  dispatch(decrement());
};

export const incrementByAmountValue = (value: number): AppThunk => async (dispatch) => {
  dispatch(incrementByAmount(value));
};

export const setToDefault = (): AppThunk => async (dispatch) => {
  dispatch(setToZero());
};
