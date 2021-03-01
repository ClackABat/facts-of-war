import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { useFormik } from 'formik';

import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, withStyles } from '@material-ui/core';

import { loginUserWithEmail } from '../../store/actions/authActions';
import { FACEBOOK_AUTH_LINK, GOOGLE_AUTH_LINK } from '../../constants';
import { loginSchema } from './validation';
import Layout from '../../layout/Layout';
import styles from './styles'


const Login = ({ auth, history, loginUserWithEmail, classes }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUserWithEmail(values, history);
    },
  });

  if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
    <Layout>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">

          <Card>
            <Box textAlign="center" m={2}>
              <CardHeader title="Welcome, Executor" subheader="Please sign in to continue." titleTypographyProps={{ variant: 'h4'}}/>
              <form onSubmit={formik.handleSubmit}>
                <CardContent>
                  <p className="logins">Admin: test@test.com test</p>
                  <p className="logins">User: test1@test.com test</p>
                  <div>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoFocus
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      required
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {auth.error && <p className="error">{auth.error}</p>}
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        disabled={auth.isLoading || !formik.isValid}
                      >
                        Login
                      </Button>
                    <div>
                      Don't have an account?{' '}
                      <Link className="bold" to="/register">
                        Register
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
  errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, { loginUserWithEmail }))(withStyles(styles)(Login));
