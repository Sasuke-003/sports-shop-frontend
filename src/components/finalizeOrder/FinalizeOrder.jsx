import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Snackbars from "../../components/snackbars/Snackbars";
import "./FinalizeOrder.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        marginBottom: theme.spacing(5),
        background: "#0a0a0a",
        color: "white",
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#08b2e3",
        },
    },
});

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#08b2e3",
        },

        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },

            "&:hover fieldset": {
                borderColor: "#08b2e3",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#08b2e3",
            },
        },
    },
})(TextField);

function FinalizeOrder() {
    const classes = useStyles();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const throwMsg = (status, msg) => {
        setAlertOpen(true);
        setErrorStatus(status);
        setErrorMsg(msg);
    };

    const handleSubmit = () => {
        if (address === "" || city === "" || pinCode === "" || pinCode === "0") {
            throwMsg("error", "Please fill all the details");
        }
    };

    return (
        <div className='finalizeOrder'>
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='ADDRESS'
                variant='outlined'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='CITY'
                variant='outlined'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='PIN CODE'
                type='number'
                variant='outlined'
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
            />
            <button className='finalizeOrder__button' onClick={handleSubmit}>
                PLACE YOUR ORDER
            </button>
            <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} status={errorStatus} message={errorMsg} />
        </div>
    );
}

export default FinalizeOrder;
