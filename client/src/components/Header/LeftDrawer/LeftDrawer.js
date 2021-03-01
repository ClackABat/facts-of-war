import { Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';

import React from 'react';
import classNames from 'classnames'

import useStyles from './styles'
import { Link } from 'react-router-dom';

const menuItems = [
    {
        title: 'Planets',
        icon: <PublicIcon/>,
        link: '/planets'
    },
    {
        title: 'Profile',
        icon: <PersonIcon/>,
        link: '/profile'
    },
]

function LeftDrawer(props) {
    const classes = useStyles();

    return (
        <>
            
            <Drawer
                variant="permanent"
                open={props.isOpen}
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: props.isOpen,
                    [classes.drawerClose]: !props.isOpen
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: props.isOpen,
                        [classes.drawerClose]: !props.isOpen
                    })
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {menuItems.map((item, index) => (
                        <Link to="/planets">
                            <ListItem button key={item.title} disabledGutters>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
                        
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default LeftDrawer;