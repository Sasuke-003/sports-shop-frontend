import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ErrorIcon from "@material-ui/icons/Warning";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Snackbars from "../snackbars/Snackbars";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#d72323",
        },
        secondary: {
            main: "#08b2e3",
        },
    },
});

export default function AlertPopup({ open, handleClose, status, message }) {
    const [sOpen, setSopen] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
                    <DialogTitle id='alert-dialog-title'>
                        <ErrorIcon color='primary' />
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>Do you really want to cancel this order?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button onClick={handleClose} color='secondary'>
                                No
                            </Button>
                            <Button
                                onClick={() => {
                                    setSopen(true);
                                    handleClose();
                                }}
                                color='primary'
                                autoFocus>
                                Yes
                            </Button>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
                <Snackbars status={status} message={message} open={sOpen} handleClose={() => setSopen(false)} />
            </div>
        </ThemeProvider>
    );
}
