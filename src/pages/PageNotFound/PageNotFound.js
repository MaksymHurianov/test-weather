import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./useStyles";

const PageNotFound = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent='container' alignItems='center' className={classes.pageNotFoundStyle}> ,
            <Typography variant="h2" component="p2">PAGE NOT FOUND</Typography>
        </Grid>
    )
}

export default PageNotFound
