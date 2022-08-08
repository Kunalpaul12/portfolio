export const CHANGE_THEME = 'CHANGE_THEME';

export class ThemeActions {
  static changeTheme = (theme: string) => (dispatch: any) => {
    dispatch({
      type: CHANGE_THEME,
      theme: theme,
    });
  };
}
