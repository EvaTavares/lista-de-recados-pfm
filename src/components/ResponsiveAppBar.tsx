import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const pages = ['Arquivados', 'Desarquivado'];

function ResponsiveAppBar() {
  const errands = useSelector((state: RootState) => state.errands);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5C6103' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EditNoteIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: '#FFCA48'
            }}
            fontSize="large"
          />
          <Badge badgeContent={errands.length} sx={{ color: '#FFCA48' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                color: '#FFCA48'
              }}
            >
              Lista de Recados
            </Typography>
          </Badge>
          <EditNoteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} fontSize="large" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title="Logout">
              <IconButton sx={{ p: 0 }}>
                <LogoutIcon sx={{ color: '#FFCA48' }} fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
