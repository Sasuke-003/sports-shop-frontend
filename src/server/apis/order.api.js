import axios from "axios";
// import { validate, valid } from "../validator";

// const validItem = valid.item;

const url = {
    get: "/order/get",
    cancel: "/order/cancel",
};

export const order = {
    get: async (newItemData) => {
        // await validate(validItem.add, newItemData);
        return await axios.get(url.get, newItemData);
    },
    cancel: async (newItemData) => {
        // await validate(validItem.add, newItemData);
        return await axios.post(url.cancel, newItemData);
    },
};
