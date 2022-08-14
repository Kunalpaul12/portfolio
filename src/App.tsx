import { connect } from 'react-redux';
import { compose } from 'redux';
import { IAppStateReducer } from 'store/reducers';
import { ThemeProvider } from 'styled-components';
import Home from 'screens/Home';
import AppBar from 'appBar';

type Props = {
  colors: any;
};

const App: React.FC<Props> = ({ colors }) => {
  return (
    <ThemeProvider theme={colors}>
      <AppBar />
      {/* <Home /> */}
    </ThemeProvider>
  );
};

const selector = (state: IAppStateReducer) => ({
  colors: state?.theme?.colors,
});

const actions = {};

export default compose(connect(selector, actions))(App);
