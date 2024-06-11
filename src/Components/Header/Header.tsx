import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import { Container, Link } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Popover } from '@mui/material';
import Logo from './Logo';
import Button from '../Button';

const drawerWidth = 280;
const navItems = ['About', 'Location', 'Rooms'];
const navItemsMobile = [...navItems, 'Book Now', 'User Profile'];

const whiteColor = theme.palette.common.white;
const primaryDark = theme.palette.primary.dark;
const secondaryLight = theme.palette.secondary.light;

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="font_1_m" sx={{ my: 2 }}>
        -Menu-
      </Typography>
      <Divider />
      <List>
        {navItemsMobile.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: '1.25rem' }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box component="header">
        <CssBaseline />
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: primaryDark }}
        >
          <Container>
            <Toolbar
              disableGutters={true}
              sx={{
                height: 90,
                display: 'grid',
                gridTemplateColumns: '1fr 380px 1fr',
                '@media (max-width: 500px)': {
                  gridTemplateColumns: '1fr auto 1fr',
                  justifyContent: 'left',
                },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' }, justifyContent: 'left' }}
              >
                <MenuIcon
                  sx={{ width: 40, height: 60, color: secondaryLight }}
                />
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                  <Link
                    variant="font_1_s"
                    pt={2}
                    pb={2}
                    mr={6}
                    underline="none"
                    href="#"
                    key={item}
                    sx={{ color: whiteColor, ':nth-of-type(3)': { mr: 0 } }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>

              <Box
                component="div"
                sx={{
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'center',
                }}
              >
                <Logo />
              </Box>
              <Box component="div" sx={{ textAlign: 'right' }}>
                <Button
                  type="golden"
                  sx={{ display: { xs: 'none', lg: 'inline' } }}
                  href="#"
                  mr={6}
                  variant="font_3_m"
                >
                  Book Now
                </Button>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <>
                      <Button
                        sx={{
                          display: {
                            xs: 'none',
                            sm: 'inline',
                            '@media (max-width: 730px)': {
                              display: 'none',
                            },
                          },
                        }}
                        {...bindTrigger(popupState)}
                      >
                        User Profile
                      </Button>
                      <Menu disableScrollLock={true} {...bindMenu(popupState)}>
                        <MenuItem
                          sx={{ fontSize: '1.25rem' }}
                          onClick={popupState.close}
                        >
                          Profile
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: '1.25rem' }}
                          onClick={popupState.close}
                        >
                          My account
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: '1.25rem' }}
                          onClick={popupState.close}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                </PopupState>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
