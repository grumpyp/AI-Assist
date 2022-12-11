import * as React from 'react';
import { useCallback } from 'react';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Badge,
  Box,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  AccountCircle,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  PhoneForwarded as PhoneForwardedIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../../components/Logo';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

// TODO: Check out this eslint bug.
/* eslint-disable */
interface NavDrawerItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  divide?: boolean;
  // if set, margin-top will be set to auto.
  bottom?: boolean;
  onClick?: () => void;
}

/* eslint-enable */

interface NavDrawerProps {
  children: React.ReactNode;
  items: Array<NavDrawerItem>;
}

export function NavDrawer({ children, items }: NavDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getNavItem = useCallback(
    ({ path, label, icon, divide, onClick }: NavDrawerItem) => (
      <>
        <ListItem
          key={path}
          disablePadding
          sx={{
            display: 'block',
            backgroundColor: path === location.pathname ? 'black' : 'inherit',
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => {
              onClick?.();
              navigate(`/${path}`);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        {divide && <Divider key={`${path}divider`} />}
      </>
    ),
    [navigate, open]
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo height={60} width={60} square />
          <Typography variant="h6" noWrap component="div">
            {items.find((item) => item.path === location.pathname)?.label}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MessageIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => {
                navigate('/ai-assist/live-calls');
              }}
            >
              <Badge badgeContent={7} color="error">
                <PhoneForwardedIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>{items.filter((item) => !item.bottom).map(getNavItem)}</List>
        <Box sx={{ height: '100%' }} />
        <Divider />
        <List>{items.filter((item) => item.bottom).map(getNavItem)}</List>
      </Drawer>

      <Box component="main" sx={{ p: 3, height: '100%', width: '100%' }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
