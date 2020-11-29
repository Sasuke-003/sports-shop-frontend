import React, { useState } from "react";
import "./Home.css";

import DisplayItem from "../../components/displayitem/DisplayItem";
import Header from "../../components/header/Header";

function Home() {
    const [items, setItems] = useState([
        { itemName: "NEW YORK STYLE PIZZA", itemImage: "pizza.jpg" },
        { itemName: "St.LOUIS PIZZA", itemImage: "pizza2.jpg" },
        { itemName: "BURGER", itemImage: "burger.jpg" },
        { itemName: "RAVIOLI", itemImage: "ravioli.jpg" },
        { itemName: "MOMOS", itemImage: "momos.jpg" },
        { itemName: "SANDWICH", itemImage: "sandwich.jpg" },
        { itemName: "RAMEN", itemImage: "ramen.jpg" },
        { itemName: "SUSHI", itemImage: "sushi.jpg" },
        { itemName: "PANCAKE", itemImage: "pancake.jpg" },
        { itemName: "MEAT BALLS", itemImage: "meatballs.jpg" },
    ]);
    return (
        <div className='home'>
            <Header />
            <div className='home__itemsContainer'>
                {" "}
                {items.map(({ itemName, itemImage }) => (
                    <DisplayItem key={itemName} itemImage={"/assets/images/" + itemImage} itemName={itemName} />
                ))}
            </div>
        </div>
    );
}

export default Home;
