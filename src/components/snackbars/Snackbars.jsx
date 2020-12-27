import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Snackbars({ status, message, open, handleClose }) {
    const classes = useStyles();

    let Alert;

    if (status === "success")
        Alert = (
            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='success'>
                {message}
            </MuiAlert>
        );
    else if (status === "error")
        Alert = (
            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='error'>
                {message}
            </MuiAlert>
        );
    else if (status === "warning")
        Alert = (
            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='warning'>
                {message}
            </MuiAlert>
        );
    else if (status === "info")
        Alert = (
            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='info'>
                {message}
            </MuiAlert>
        );
    else
        Alert = (
            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='error'>
                Something went wrong!
            </MuiAlert>
        );

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                {Alert}
            </Snackbar>
        </div>
    );
}
