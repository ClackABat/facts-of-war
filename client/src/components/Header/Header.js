import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOutUser } from '../../store/actions/authActions';
import './styles.css';
import { Nav } from 'react-bootstrap';
import { AppBar, Drawer, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Navbar from './Navbar/Navbar';
import LeftDrawer from './LeftDrawer/LeftDrawer';

const Header = ({ auth, logOutUser, history }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle =  () => {
    setOpen(!open);
  }

  const onLogOut = (event) => {
    event.preventDefault();
    logOutUser(history);
  };

  return (
      <>
      <Navbar onDrawerToggle={handleDrawerToggle}/>
      <LeftDrawer isOpen={open} />
      </>
    // <div className="bg-primary">
    //   <h2 className="logo">Facts of War</h2>
    //   <Drawer openSecondary="true" open={open} width={400}>
    //     <Typography variant="h6" noWrap>
    //       Facts of War
    //     </Typography>
    //     <MenuItem>
    //       <Nav.Item>
    //         <Link to="/">Home</Link>
    //       </Nav.Item>
    //     </MenuItem>
    //   </Drawer>
    //   <Nav activeKey="/">
    //     <Nav.Item>
    //       <Link to="/">Home</Link>
    //     </Nav.Item>
    //     {auth.isAuthenticated ? (
    //       <>
    //         <Nav.Item>
    //           <Link to="/users">Users</Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Link to={`/${auth.me.username}`}>Profile</Link>
    //         </Nav.Item>
    //         {auth.me?.role === 'ADMIN' && (
    //           <li className="nav-item">
    //             <Link to="/admin">Admin</Link>
    //           </li>
    //         )}
    //         <li className="flex-1" />
    //         <img className="avatar" src={auth.me.avatar} />
    //         <Nav.Item onClick={onLogOut}>
    //           <a href="#">Log out</a>
    //         </Nav.Item>
    //       </>
    //     ) : (
    //       <>
    //         <li className="flex-1" />

    //         <li className="nav-item">
    //           <Link to="/login">Login</Link>
    //         </li>
    //       </>
    //     )}
    //   </Nav>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(withRouter, connect(mapStateToProps, { logOutUser }))(Header);
