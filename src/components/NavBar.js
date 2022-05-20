import { AppBar, Button, Drawer, Grid, IconButton, Toolbar, Link, useMediaQuery, useTheme, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import menuItens from './menuItems';

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


const NavButton = () =>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));   
    const [state, setState] = React.useState({
        isDrawerOpen: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, ['isDrawerOpen']: open });
      };
    
    if(isMobile){
        return(
            <>
                <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor='left'
                    open={state['isDrawerOpen']}
                    onClose={toggleDrawer(false)}                   
                >
                    <>
                        <Box sx={{width:'50vw'}} >
                            <List>
                                {Object.entries(menuItens).map((item, index)=>(
                                <ListItem key={index} disablePadding>
                                    <ListItemButton href={item[1]}>
                                        <ListItemText>{item[0]}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                ))}
                            </List>
                        </Box>
                    </>
                </Drawer>
            </>
        );
    } else {
        return(
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='home'
            sx={{ mr: 2 }}
        >
            <HomeIcon />
        </IconButton>
        );
    }
}


const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <NavButton/>
                <Link sx={{ display: { md: 'block', xs: 'none' } }} marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>FIEAM</Link>
                <Link sx={{ display: { md: 'block', xs: 'none' } }} marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>SESI</Link>
                <Link sx={{ display: { md: 'block', xs: 'none' } }} marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>SENAI</Link>
                <Link sx={{ display: { md: 'block', xs: 'none' } }} marginX={1} fontWeight='bold' variant='inherit' underline='none' color='inherit'>IEL</Link>
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

export default Navbar;