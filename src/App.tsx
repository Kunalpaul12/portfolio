import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IAppStateReducer } from 'store/reducers';
import { ThemeActions } from 'store/actions/theme';

type Props = {
  isDark: boolean;
  changeTheme: (theme: string) => void;
};

const App: React.FC<Props> = ({ isDark, changeTheme }) => {
  return (
    <div className='App'>
      <button onClick={() => changeTheme(isDark ? 'light' : 'dark')}>
        {isDark ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

const selector = (state: IAppStateReducer) => ({
  isDark: state?.theme?.dark,
});

const actions = {
  changeTheme: ThemeActions?.changeTheme,
};

export default compose(connect(selector, actions))(App);
