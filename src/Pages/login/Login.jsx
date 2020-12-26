import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

function Login(props) {
    const handleSubmit = () => {
        props.setCurrentUser({ Type: "a" });
    };
    return (
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
