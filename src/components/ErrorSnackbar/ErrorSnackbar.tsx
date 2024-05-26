import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useSelector} from "react-redux";
import {getErrorAC, initialStateType} from "../../features/TodolistsList/app-reducer";
import {useAppDispatch, useAppSelector} from "../../app/store";

export default function ErrorSnackbar() {
    const [open, setOpen] = React.useState(true);
    const error = useAppSelector<string | null>(state => state.loading.error)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        setOpen(true);
    };

    // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    const handleClose = () => {
dispatch(getErrorAC(null))
    };
setTimeout(handleClose,5000)
    return (
        <div>
            <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}