import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        paddingLeft: 15,
        transition: theme.transitions.create("width"),
        width: "12ch",
        "&:focus": {
            width: "20ch",
        },
    },
}))
