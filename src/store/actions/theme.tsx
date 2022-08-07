export const CHANGE_THEME = "CHANGE_THEME";

export class ThemeActions {
  static changeTheme = () => (dispatch: any, theme: string) => {
    dispatch({
      type: CHANGE_THEME,
      theme,
    });
  };
}
