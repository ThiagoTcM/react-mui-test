import { AppBar, Button, Drawer, Grid, IconButton, Toolbar, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='home'
                    sx={{ mr: 2 }}
                >
                    <HomeIcon />
                </IconButton>
                <Link marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>FIEAM</Link>
                <Link marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>SESI</Link>
                <Link marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>SENAI</Link>
                <Link marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>IEL</Link>
                <Grid container justifyContent={'flex-end'}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Busca"
                            inputProps={{ 'aria-label': 'busca' }}
                        />
                    </Search>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;