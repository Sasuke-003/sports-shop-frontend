import axios from "axios";
// import { validate, valid } from "../validator";

// const validItem = valid.item;

const url = {
    add: "/item/add",
    list: "/item/list",
    imgLink: "/item/img",
};

export const item = {
    add: async (newItemData) => {
        // await validate(validItem.add, newItemData);
        return await axios.post(url.add, newItemData);
    },

    list: async () => {
        // params -> pageNo,type,tags=[]
        // await validate(validItem.search, { ItemName });
        // const query = `?pageNo=${pageNo}&type=${type}`;
        // if( tags ) query += "&tags=" + tags.join("&tags=");
        return await axios.get(url.list);
    },
};
