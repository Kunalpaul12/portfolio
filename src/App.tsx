import { connect } from 'react-redux';
import { compose } from 'redux';
import { IAppStateReducer } from 'store/reducers';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import AppBar from 'appBar';
import { Route, Routes } from 'react-router';
import { About, Resume, Recommendation, Contact } from 'screens';

type Props = {
  colors: any;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props?.theme?.bgColor};
  }
`;

const App: React.FC<Props> = ({ colors }) => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='resume' element={<Resume />} />
        <Route path='clients' element={<Recommendation />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
};

const selector = (state: IAppStateReducer) => ({
  colors: state?.theme?.colors,
});

const actions = {};

export default compose(connect(selector, actions))(App);
