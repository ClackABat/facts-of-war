import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons'

import useStyles from './styles';



function Navbar(props) {

    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => props.onDrawerToggle()}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    The Facts of War
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;