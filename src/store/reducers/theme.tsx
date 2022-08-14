import { createReducer } from '@reduxjs/toolkit';
import * as actions from 'store/actions/theme';
import { lightColors, darkColors } from 'colors';

export type IThemeState = {
  colors: any;
};

const initialState: IThemeState = {
  colors: lightColors,
};

export default createReducer(initialState, {
  [actions?.CHANGE_THEME]: (state = initialState, { theme }) => {
    return {
      ...state,
      colors: theme === 'dark' ? darkColors : lightColors,
    };
  },
});
