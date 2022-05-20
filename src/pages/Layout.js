import { Grid, useMediaQuery, useTheme, Box, Typography,IconButton,Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { Outlet } from "react-router-dom";
import SimpleBreadcrumbs from '../components/SimpleBreadcrumbs';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import MenuIcon from '@mui/icons-material/Menu';

const MenuTCU = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{display:{xl:'block', xs:'none'}}}
        >
        <MenuIcon/>Prestação de contas TCU
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

const Layout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));   

    return (
        <>
            <Navbar />
            <Grid container columnSpacing={{xs:0,md:0}} marginY={3} direction='row' justifyContent="space-evenly" alignItems="stretch">
                <Grid item xs={10} md={7} >
                    <Grid container direction={'column'} >
                        <Grid container direction={'row'} justifyContent='space-between'>
                            <Typography sx={{marginBottom:2}} variant='h4'>Transparencia SESI</Typography>
                            <MenuTCU/>
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    'background-color' : theme.palette.primary.secondary,
                                    'borderRadius' : '5px',
                                    'padding' : [2,1,2,1],
                                }}
                            >
                                <SimpleBreadcrumbs/>
                            </Box>   
                        </Grid>                    
                        <Grid item>
                            <Outlet />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{display:{md:'flex', xs:'none'}}} xs={'auto'}>
                    <h1>MENU</h1>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default Layout;