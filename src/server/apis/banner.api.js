import axios from "axios";
// import { validate, valid } from "../validator";

// const validBanner = valid.banner;

const url = {
    add: "/banner/add",
    list: "/banner/list",
};

export const banner = {
    add: async (newBannerData) => {
        // await validate(validBanner.add, newBannerData);
        return await axios.post(url.add, newBannerData);
    },
    
    list: async () => {
        // await validate(validBanner.search, { bannerName });
        return await axios.get(url.search);
    },

};
