import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Snackbars from "../../components/snackbars/Snackbars";
import { user } from "../../server/apis/user.api";
import "./SignUp.css";

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

function SignUp(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const throwMsg = (status, msg) => {
        setAlertOpen(true);
        setErrorStatus(status);
        setErrorMsg(msg);
    };

    const removeText = () => {
        setEmail("");
        setPassword("");
        setRePassword("");
        setName("");
        setContactNo("");
    };
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()));
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = async () => {
        if (email === "" || name === "" || rePassword === "" || password === "" || contactNo === "") {
            throwMsg("warning", "Fill all the details");
            return;
        }
        if (!validateEmail(email)) {
            throwMsg("warning", "Please enter valid email address");
            return;
        }
        if (isNaN(contactNo)) {
            throwMsg("warning", "Contact number must only contain integers");
            return;
        }
        if (password.length < 8) {
            throwMsg("warning", "Contact number must only contain integers");
            return;
        }
        if (password.length < 8) {
            throwMsg("warning", "Password must be at least 8 characters");
            return;
        }
        if (rePassword !== password) {
            throwMsg("warning", "Both passwords must be same");
            return;
        }

        const userDetails = {
            name: name,
            pass: password,
            email: email,
            contact: contactNo,
            type: "e",
        };
        try {
            await user.signUp(userDetails);
            throwMsg("success", "Successfully Registered");
        } catch (err) {
            throwMsg("error", err.response.data.info);
        }
    };

    const handleChangeName = (e) => {
        var value = e.target.value;
        let pattern = /^[a-zA-Z ]*$/;
        let result = value.match(pattern);
        if (result !== null) setName(result[0]);
    };

    const handleChangeContactNo = (e) => {
        var value = e.target.value;
        // let pattern = /^[a-zA-Z ]*$/;
        // let result = value.match(pattern);
        // if (result !== null) setName(result[0]);
        if (value.length <= 10) setContactNo(value);
    };
    const handleChangePassword = (e) => {
        var value = e.target.value;
        // let pattern = /^[a-zA-Z ]*$/;
        // let result = value.match(pattern);
        // if (result !== null) setName(result[0]);
        if (value.length <= 16) setPassword(value);
    };
    const handleChangeRePassword = (e) => {
        var value = e.target.value;
        // let pattern = /^[a-zA-Z ]*$/;
        // let result = value.match(pattern);
        // if (result !== null) setName(result[0]);
        if (value.length <= 16) setRePassword(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='SignUp'>
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Name'
                    variant='outlined'
                    value={name}
                    InputProps={{
                        pattern: "[A-Za-z]",
                    }}
                    onChange={handleChangeName}
                />
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Email'
                    variant='outlined'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Contact No'
                    type='number'
                    variant='outlined'
                    value={contactNo}
                    onChange={handleChangeContactNo}
                />
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    type='password'
                    variant='outlined'
                    value={password}
                    label='Password'
                    onChange={handleChangePassword}
                />
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    type='password'
                    variant='outlined'
                    value={rePassword}
                    label='Re-Enter Password'
                    onChange={handleChangeRePassword}
                />

                <button className='SignUp__button' onClick={handleSubmit}>
                    SIGN UP
                </button>
                <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} status={errorStatus} message={errorMsg} />
            </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
