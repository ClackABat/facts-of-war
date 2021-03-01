import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

const styles = theme => ({
    root: {
        backgroundImage: `url('/images/background.png')`,
        backgroundRepeat: 'repeat',
        minHeight: '100vh'
    }
});


function Background({ classes, children }) {
    return (<div className={classes.root}>
        { children}
    </div>);
}

export default withStyles(styles)(Background);