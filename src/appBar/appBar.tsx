import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  theme: any;
  changeTheme: (theme: string) => void;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { t, i18n } = useTranslation();
  const navItems = [t('about_me'), t('works'), t('clients'), t('contact')];
  const { window, theme, changeTheme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SwitchMode = () => {
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={() => changeTheme(theme?.dark ? 'light' : 'dark')}
            />
          }
          label={theme?.dark ? 'Dark' : 'Light'}
        />
      </FormGroup>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        sx={{ my: 2, fontStyle: { fontFamily: 'Montserrat', fontWeight: 550 } }}
      >
        {t('name')}
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: theme?.bgColor }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontStyle: { fontFamily: 'Montserrat', fontWeight: 550 },
            }}
          >
            {t('name')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  fontStyle: { fontFamily: 'Montserrat', fontWeight: 550 },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          {SwitchMode()}
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' sx={{ p: 3, backgroundColor: theme?.bgColor }}>
        <Toolbar />
        <Typography
          sx={{
            p: 3,
            fontStyle: { color: theme?.fontColor, fontFamily: 'Montserrat' },
          }}
        >
          {t('about_me_screen', { name: t('name') })}
        </Typography>
      </Box>
    </Box>
  );
}
