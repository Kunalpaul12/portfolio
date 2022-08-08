import { createReducer } from '@reduxjs/toolkit';
import * as actions from 'store/actions/theme';

export type IThemeState = {
  dark: boolean;
};

const initialState: IThemeState = {
  dark: false,
};

export default createReducer(initialState, {
  [actions?.CHANGE_THEME]: (state = initialState, { theme }) => {
    return {
      ...state,
      dark: theme === 'dark' ? true : false,
    };
  },
});
