import * as React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CarWidget from '../CarWidget/CarWidget';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../Images/Logo.png'; 

const pages = ['Inicio', 'Menú', 'Nuestra Historia', 'Blog', 'Contacto'];
const contactItems = ['Teléfono', 'Email', 'Dirección'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElContact, setAnchorElContact] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenContactMenu = (event) => {
    setAnchorElContact(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseContactMenu = () => {
    setAnchorElContact(null); 
  };

  return (
    <AppBar sx={{ width: '100%', backgroundColor: '#2E3B55' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
              <Typography
                variant="h6"
                noWrap
                component="div" 
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Mi Cafetal
              </Typography>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={page === 'Contacto' ? handleOpenContactMenu : handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === 'Products' ? handleOpenProductsMenu : (page === 'Contacto' ? handleOpenContactMenu : handleCloseNavMenu)}
                sx={{
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  outline: 'none', 
                  '&:focus': {
                    outline: 'none', 
                  },
                  '&:active': {
                    outline: 'none',
                  }
                }}
              >
                {page}
              </Button>
            ))}
            <Menu
              id="contact-menu"
              anchorEl={anchorElContact}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElContact)}
              onClose={handleCloseContactMenu}
            >
              {contactItems.map((contact) => (
                <MenuItem key={contact} onClick={handleCloseContactMenu}>
                  <Typography textAlign="center">{contact}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{marginLeft:'30px'}}>
            <CarWidget/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
