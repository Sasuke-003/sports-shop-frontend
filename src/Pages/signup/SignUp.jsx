import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
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
    const [errorStatus, setErrorStatus] = useState(false);

    const handleSubmit = () => {
        props.setCurrentUser({ Type: "a" });

        const userDetails = {
            name: name,
            password: password,
            email: email,
            contactNo: contactNo,
        };
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='SignUp'>
                <CssTextField className={classes.margin} label='Name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
                <CssTextField className={classes.margin} label='Email' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} />
                <CssTextField
                    className={classes.margin}
                    label='Contact No'
                    variant='outlined'
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    type='password'
                    variant='outlined'
                    value={password}
                    label='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    type='password'
                    variant='outlined'
                    value={rePassword}
                    label='Re-Enter Password'
                    onChange={(e) => setRePassword(e.target.value)}
                />

                <button onClick={handleSubmit}>SIGN UP</button>
            </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
