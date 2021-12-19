import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        position: "relative",
        whiteSpace:'nowrap',
        width: '100%',
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '400px',
        },
    },
    item: {
        display: 'inline-block',
        width: '40px',
        margin: '0 1px',
    }
}))
