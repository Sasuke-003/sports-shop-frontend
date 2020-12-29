import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import Snackbars from "../../components/snackbars/Snackbars";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Login.css";
import { user } from "../../server/apis/user.api";

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
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const throwMsg = (status, msg) => {
        setAlertOpen(true);
        setErrorStatus(status);
        setErrorMsg(msg);
    };

    const handleSubmit = async () => {
        if (email === "" || password === "") {
            throwMsg("warning", "Fill all the fields");
        }
        const userDetails = {
            email: email,
            pass: password,
        };
        try {
            await user.signIn(userDetails);
            throwMsg("success", "Loged In Successfully");
            props.setCurrentUser({ Type: "a" });
        } catch (err) {
            throwMsg("error", err.response.data.info);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='login'>
                <CssTextField
                    className={classes.margin}
                    label='Email'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant='outlined'
                    id='custom-css-outlined-input'
                />
                <CssTextField
                    className={classes.margin}
                    type='password'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    variant='outlined'
                    id='custom-css-outlined-input'
                />

                <button onClick={handleSubmit}>LOGIN</button>
                <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} status={errorStatus} message={errorMsg} />
            </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
