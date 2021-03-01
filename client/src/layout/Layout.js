import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';


import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Background from '../components/Background/Background';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Background>
        <Grid container>
          {children}
        </Grid>
      </Background>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
