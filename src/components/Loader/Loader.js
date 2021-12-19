import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { useStyles } from './useStyles';


const Loader = ({size = 177 }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent='center' alignItems='center'>
        <CircularProgress
            className={classes.wrapper}
            color="primary"
            variant="indeterminate"
            thickness={1}
            size={size}
            classes={{colorPrimary: classes.label}}
        />
        </Grid>
    );
};

export default Loader;
