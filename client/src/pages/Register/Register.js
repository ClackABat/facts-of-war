import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, withStyles } from '@material-ui/core';

import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { useFormik } from 'formik';

import { registerUserWithEmail } from '../../store/actions/registerActions';
import { registerSchema } from './validation';
import Layout from '../../layout/Layout';

const styles = theme => ({
  cardActions: {
    flexDirection: 'column'
  }
});


const Register = ({ classes, auth, register: { isLoading, error }, history, registerUserWithEmail }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
    <Layout>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Card>
            <Box textAlign="center" m={2}>
              <form onSubmit={formik.handleSubmit} noValidate>
                <CardHeader title="Create a new account" titleTypographyProps={{ variant: 'h4'}}/>
                <CardContent>
                  <p>
                    back to{' '}
                    <Link className="bold" to="/">
                      Home page
                    </Link>
                  </p>
                  
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                      id="username"
                      name="username"
                      label="Username"
                      fullWidth
                      required
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.username && Boolean(formik.errors.username)}
                      helperText={formik.touched.username && formik.errors.username}
                    />

                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      fullWidth
                      required
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />

                    {error && <p className="error">{error}</p>}
                    
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    disabled={auth.isLoading || !formik.isValid}
                  >
                  Sign up now
                  </Button>
                    <div>
                      Have an account?{' '}
                      <Link className="bold" to="/login">
                        Log In
                      </Link>
                    </div>
                </CardActions>
              </form>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  register: state.register,
});

export default compose(withRouter, connect(mapStateToProps, { registerUserWithEmail }))(withStyles(styles)(Register));
