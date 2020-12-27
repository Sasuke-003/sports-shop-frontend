import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Login.css";

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

function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        props.setCurrentUser({ Type: "a" });
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='login'>
                <CssTextField className={classes.margin} label='Email' variant='outlined' id='custom-css-outlined-input' />
                <CssTextField className={classes.margin} type='password' label='Password' variant='outlined' id='custom-css-outlined-input' />

                <button onClick={handleSubmit}>LOGIN</button>
            </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
