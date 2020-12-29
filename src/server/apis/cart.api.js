import axios from "axios";
// import { validate, valid } from "../validator";

// const validItem = valid.item;

const url = {
    item: "/cart/item",
    buy: "/cart/buy",
};

export const cart = {
    buy: async (newItemData) => {
        // await validate(validItem.add, newItemData);
        return await axios.post(url.buy, newItemData);
    },
};
