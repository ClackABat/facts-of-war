import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Layout from '../../layout/Layout';


function Planets() {
    return (
        <Layout>
            <Grid xs={9}>
                <Paper>
                    <h2>Hello, world!</h2>
                </Paper>
            </Grid>
        </Layout>
    )
}

export default Planets;