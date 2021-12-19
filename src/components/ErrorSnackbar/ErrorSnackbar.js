import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC} from "../../redux/appReducer";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function ErrorSnackbar() {
    const error = useSelector(state => state.app.error)
    const dispatch = useDispatch()


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorAC(null))
    };


    return (
        <Snackbar open={error} autoHideDuration={2500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}

export default ErrorSnackbar
