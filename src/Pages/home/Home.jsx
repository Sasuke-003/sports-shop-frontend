import React, { useState, useEffect } from "react";
import "./Home.css";

import DisplayItem from "../../components/displayitem/DisplayItem";

import DisplayClothing from "../../components/displayclothing/DisplayClothing";
import OrderStepper from "../../components/orderStepper/OrderStepper";

import { item } from "../../server/apis/item.api";

function Home() {
    const [name, setname] = useState("");

    const [items, setItems] = useState([]);
    const [cloth, setCloth] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await item.list();
                for (let i = 0; i < res.length; i++) {
                    res[i]["itemImage"] = "http://localhost:9999/item/img/" + res[i]["name"] + ".png";
                    if (res[i]["type"] !== "shoe") res[i]["itemLogo"] = "http://localhost:9999/item/logo/" + res[i]["name"] + ".png";
                }

                let sItem = [];
                let cItem = [];
                for (let i = 0; i < res.length; i++) {
                    if (res[i]["type"] === "shoe") sItem.push(res[i]);
                    else cItem.push(res[i]);
                }
                setItems(sItem);
                setCloth(cItem);
                console.log(cItem);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    return (
        <div className='home'>
            <div className='home__top'>
                <img src='/assets/images/home.png' alt='oops'></img>
            </div>
            <div className='home__itemsContainer'>
                <div className='home__shoes'>
                    {" "}
                    {items.map(({ name, itemImage, tag, price, color }, index) => (
                        <DisplayItem
                            key={name + index}
                            itemImage={itemImage}
                            itemName={name}
                            itemType={tag}
                            itemCompany={name.split()[0]}
                            itemColor={color}
                            itemPrice={price}
                        />
                    ))}
                </div>
                <div className='home__tShirts'>
                    {cloth.map(({ name, itemImage, itemLogo, price, color }, index) => (
                        <DisplayClothing
                            key={name + index}
                            itemImage={itemImage}
                            itemName={name}
                            itemCompany={name}
                            itemColor={color}
                            itemPrice={price}
                            itemLogo={itemLogo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
