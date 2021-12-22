import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './store';

// comment
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
