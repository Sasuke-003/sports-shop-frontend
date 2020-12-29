import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Snackbars from "../../components/snackbars/Snackbars";
import { user } from "../../server/apis/user.api";
import "./Admin.css";

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

function Admin() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [type, setType] = useState("shoe");
    const [shoeType, setShoeType] = useState("");
    const [image, setImage] = useState("");
    const [tShirtLogo, setTShirtLogo] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const throwMsg = (status, msg) => {
        setAlertOpen(true);
        setErrorStatus(status);
        setErrorMsg(msg);
    };

    const handleSubmit = async () => {};

    return (
        <div className='admin'>
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='Name'
                variant='outlined'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormControl component='fieldset' className={classes.margin}>
                <FormLabel component='legend'>Type</FormLabel>
                <RadioGroup aria-label='gender' name='gender1' value={type} onChange={(e) => setType(e.target.value)}>
                    <FormControlLabel value='shoe' control={<Radio />} label='SHOE' />
                    <FormControlLabel value='tShirt' control={<Radio />} label='T-Shirt' />
                </RadioGroup>
            </FormControl>
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='Company'
                variant='outlined'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Shoe Type'
                    variant='outlined'
                    value={shoeType}
                    onChange={(e) => setShoeType(e.target.value)}
                />
            ) : null}
            <div className='fileUploader'>
                <h3>{type} Image</h3> <input type='file' id='myFile' onChange={(e) => setImage(e.target.files[0])} name='filename' />
            </div>

            {type === "tShirt" ? (
                <div className='fileUploader'>
                    <h3>{type} Logo</h3> <input type='file' id='myLogo' onChange={(e) => setTShirtLogo(e.target.files[0])} name='tShirtLogo' />
                </div>
            ) : null}
            <button className='admin__button' onClick={handleSubmit}>
                SUBMIT
            </button>
            <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} status={errorStatus} message={errorMsg} />
        </div>
    );
}

export default Admin;
