import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {};

const addDataHandle = (data, prevData) => {
    let postData = prevData;

    if (postData[data.name] === undefined) {
        postData[data.name] = {};
    }
    if (postData[data.name]["price"] === undefined) {
        postData[data.name]["price"] = data.price;
    }
    if (postData[data.name][data.size] === undefined) {
        postData[data.name][data.size] = 0;
    }

    postData[data.name][data.size] += 1;

    return postData;
};

const deleteDataHandle = (data, prevData) => {
    let postData = prevData;
    postData[data.name][data.size] -= 1;
    if (postData[data.name][data.size] === 0) {
        delete postData[data.name][data.size];
    }
    console.log(Object.keys(postData[data.name]).length);
    if (Object.keys(postData[data.name]).length === 1) delete postData[data.name];
    return postData;
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cart: addDataHandle(action.payload, state["cart"]),
            };
        case CartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cart: deleteDataHandle(action.payload, state["cart"]),
            };
        default:
            return state;
    }
};

export default cartReducer;
