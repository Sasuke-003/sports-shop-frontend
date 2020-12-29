import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";

import { cart } from "../../server/apis/cart.api";
import { deleteAllItems } from "../../redux/user/user.actions";
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

function FinalizeOrder(props) {
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

    const handleSubmit = async () => {
        if (address === "" || city === "" || pinCode === "" || pinCode === "0") {
            throwMsg("error", "Please fill all the details");
        }

        const items = JSON.parse(JSON.stringify(props.cart));
        for (const itemName of Object.keys(items)) {
            delete items[itemName]["price"];
        }

        const data = {
            address: address,
            cty: city,
            pin: pinCode,
            items: items,
        };

        try {
            await cart.buy(data);
            throwMsg("success", "Your Order has been successfully placed");
            var timer = setTimeout(() => {
                props.closePopup();
                props.deleteAllItems();
                props.updateRedux();
            }, 1000);
        } catch (err) {
            throwMsg("error", err?.response?.data?.info);
            console.log(err);
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
            <Snackbars open={alertOpen} handleClose={() => setAlertOpen(false)} autoHideDuration={4000} status={errorStatus} message={errorMsg} />
        </div>
    );
}

const mapSateToProps = (state) => ({
    cart: state.sportShopUser.cart,
});

const mapDispatchToProps = (dispatch) => ({
    deleteAllItems: () => dispatch(deleteAllItems()),
});

export default connect(mapSateToProps, mapDispatchToProps)(FinalizeOrder);
