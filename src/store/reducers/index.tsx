import { combineReducers } from "redux";
import theme, { IThemeState } from "./theme";

export type IAppStateReducer = {
  theme: IThemeState;
};

const reducers = combineReducers<IAppStateReducer>({
  theme,
});

export default reducers;
