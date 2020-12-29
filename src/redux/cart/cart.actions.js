import { CartActionTypes } from "./cart.types";

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const deleteItem = (item) => ({
    type: CartActionTypes.DELETE_ITEM,
    payload: item,
});
