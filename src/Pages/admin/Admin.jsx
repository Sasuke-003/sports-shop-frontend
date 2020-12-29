import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Snackbars from "../../components/snackbars/Snackbars";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { item } from "../../server/apis/item.api";
import axios from "axios";
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
    const [tag, setTag] = useState("");
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState("");
    const [tShirtLogo, setTShirtLogo] = useState(null);
    const [qty1, setQty1] = useState(0);
    const [qty2, setQty2] = useState(0);
    const [qty3, setQty3] = useState(0);
    const [qty4, setQty4] = useState(0);

    const [color, setColor] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [errorStatus, setErrorStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const throwMsg = (status, msg) => {
        setAlertOpen(true);
        setErrorStatus(status);
        setErrorMsg(msg);
    };

    const handleSubmit = async () => {
        // console.log(image);
        let size =
            type === "shoe"
                ? {
                      7: qty1,
                      8: qty2,
                      9: qty3,
                      10: qty4,
                  }
                : {
                      S: qty1,
                      M: qty2,
                      X: qty3,
                      XL: qty4,
                  };

        const data = {
            name: name,
            type: type,
            // img: image,
            // logo: tShirtLogo,
            tag: tag,
            color: color,
            price: price,
            size_qty: size,
        };
        console.log(data);
        try {
            await item.add(data);
            throwMsg("success", "successfully added");
        } catch (err) {
            throwMsg("error", err?.response?.data?.info);
        }
    };

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
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Shoe Type'
                    variant='outlined'
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
            ) : null}
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size 7 Qty'
                    variant='outlined'
                    value={qty1}
                    onChange={(e) => setQty1(e.target.value)}
                />
            ) : (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size S Qty'
                    variant='outlined'
                    value={qty1}
                    onChange={(e) => setQty1(e.target.value)}
                />
            )}{" "}
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size 8 Qty'
                    variant='outlined'
                    value={qty2}
                    onChange={(e) => setQty2(e.target.value)}
                />
            ) : (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size M Qty'
                    variant='outlined'
                    value={qty2}
                    onChange={(e) => setQty2(e.target.value)}
                />
            )}
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size 9 Qty'
                    variant='outlined'
                    value={qty3}
                    onChange={(e) => setQty3(e.target.value)}
                />
            ) : (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size X Qty'
                    variant='outlined'
                    value={qty3}
                    onChange={(e) => setQty3(e.target.value)}
                />
            )}
            {type === "shoe" ? (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size 10 Qty'
                    variant='outlined'
                    value={qty4}
                    onChange={(e) => setQty4(e.target.value)}
                />
            ) : (
                <CssTextField
                    autoComplete='off'
                    className={classes.margin}
                    label='Size XL Qty'
                    variant='outlined'
                    value={qty4}
                    onChange={(e) => setQty4(e.target.value)}
                />
            )}
            <CssTextField
                autoComplete='off'
                className={classes.margin}
                label='Price'
                variant='outlined'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <FormControl variant='outlined' className={classes.margin}>
                <InputLabel id='demo-simple-select-outlined-label'>Color</InputLabel>
                <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    label='Color'>
                    <MenuItem value='red'>Red</MenuItem>
                    <MenuItem value='yellow'>Yellow</MenuItem>
                    <MenuItem value='pink'>Pink</MenuItem>
                    <MenuItem value='blue'>Blue</MenuItem>
                    <MenuItem value='green'>Green</MenuItem>
                </Select>
            </FormControl>
            {/* <div className='fileUploader'>
                <h3>{type} Image</h3> <input type='file' id='myFile' onChange={(e) => setImage(e.target.value)} name='filename' />
            </div> */}
            {/* {type === "tShirt" ? (
                <div className='fileUploader'>
                    <h3>{type} Logo</h3> <input type='file' id='myLogo' onChange={(e) => setTShirtLogo(e.target.files[0])} name='tShirtLogo' />
                </div>
            ) : null} */}
            <button className='admin__button' onClick={handleSubmit}>
                SUBMIT
            </button>
            <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} status={errorStatus} message={errorMsg} />
        </div>
    );
}

export default Admin;
