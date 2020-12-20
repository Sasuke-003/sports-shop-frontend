import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import "./OrderStepper.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Order Received", "Order Dispatched", "Out For Delivery", "Delivered"];
}

export default function OrderStepper({ step }) {
    const classes = useStyles();

    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={step}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}
