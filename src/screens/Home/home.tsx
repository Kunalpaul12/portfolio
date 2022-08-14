import React from 'react';
import { Container, Button } from './styles';

interface Props {
  theme: any;
  changeTheme: (theme: string) => void;
}

const Home: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <Container>
      <Button onClick={() => changeTheme(theme?.dark ? 'light' : 'dark')}>
        {theme?.dark ? 'Dark' : 'Light'}
      </Button>
    </Container>
  );
};

export default Home;
