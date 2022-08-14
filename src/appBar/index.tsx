import { withTheme } from 'styled-components';
import { IAppStateReducer } from 'store/reducers';
import { ThemeActions } from 'store/actions/theme';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AppBar from './appBar';

const selector = (state: IAppStateReducer) => ({
  theme: state?.theme?.colors,
});

const actions = {
  changeTheme: ThemeActions?.changeTheme,
};

export default compose<any>(
  connect(selector, actions),
  withTheme as any,
)(AppBar);
