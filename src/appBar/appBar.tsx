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
import { useNavigate } from 'react-router-dom';
import { Fonts } from 'constants/Fonts';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

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

import { useMediaQuery, useTheme } from '@mui/material';

type MinHeight = {
  minHeight: number;
};

function useAppBarHeight(): number {
  const {
    mixins: { toolbar },
    breakpoints,
  } = useTheme();
  const toolbarDesktopQuery = breakpoints.up('sm');
  const toolbarLandscapeQuery = `${breakpoints.up(
    'xs',
  )} and (orientation: landscape)`;
  const isDesktop = useMediaQuery(toolbarDesktopQuery);
  const isLandscape = useMediaQuery(toolbarLandscapeQuery);
  let currentToolbarMinHeight;
  if (isDesktop) {
    currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
  } else if (isLandscape) {
    currentToolbarMinHeight = toolbar[toolbarLandscapeQuery];
  } else {
    currentToolbarMinHeight = toolbar;
  }
  return (currentToolbarMinHeight as MinHeight).minHeight;
}

export default function DrawerAppBar(props: Props) {
  const { t } = useTranslation();
  const navItems = [t('about'), t('resume'), t('clients'), t('contact')];
  const { window, theme, changeTheme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SwitchMode = () => {
    return (
      <FormGroup
        sx={{
          flexDirection: 'row',
          position: 'absolute',
          right: '1%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onChange={() => changeTheme(theme?.dark ? 'light' : 'dark')}
            />
          }
          label={''}
        />
        {theme?.dark ? (
          <DarkModeIcon />
        ) : (
          <WbSunnyOutlinedIcon sx={{ color: theme?.black }} />
        )}
      </FormGroup>
    );
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: theme?.bgColor,
        height: '100vh',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          my: 2,
          fontStyle: {
            fontFamily: Fonts.regular,
            fontWeight: 550,
            color: theme?.fontColor,
          },
        }}
      >
        {t('name')}
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                navigate(item === t('about') ? `/` : `/${item.toLowerCase()}`);
              }}
            >
              <ListItemText primary={item} sx={{ color: theme?.fontColor }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: theme?.bgColor,
        height: useAppBarHeight(),
      }}
    >
      <AppBar component='nav' sx={{ backgroundColor: theme?.bgColor }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: theme?.fontColor }} />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: theme?.fontColor,
              fontStyle: { fontFamily: Fonts.regular, fontWeight: 550 },
            }}
          >
            {t('name')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '7%' }}>
            {navItems.map(item => (
              <Button
                key={item}
                sx={{
                  color: theme?.fontColor,
                  fontStyle: { fontFamily: Fonts.regular, fontWeight: 550 },
                }}
                onClick={() => {
                  navigate(
                    item === t('about') ? `/` : `/${item.toLowerCase()}`,
                  );
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
    </Box>
  );
}
