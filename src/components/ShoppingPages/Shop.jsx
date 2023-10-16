import { useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCard from "../HelperComponents/ShopCard";
import store1 from "../../assets/store-img.png";
import store2 from "../../assets/store-img1.png";
import store3 from "../../assets/store-img2.png";
import store4 from "../../assets/store-img3.png";

const deals = [
  { name: "Sale" },
  { name: "Under 30 min" },
  { name: "Under $10 Delivery Fee" },
  { name: "Store" },
  { name: "Price" },
];

const categories = [
  { name: "Trending" },
  { name: "Womens" },
  { name: "Mens" },
  { name: "Kids" },
  { name: "Beauty" },
];

const stores = [
  { name: "ZARA", distance: "10.2", time: "42", fee: "$6", img: store2 },
  { name: "Sephora", distance: "5.5", time: "37", fee: "$5", img: store3 },
  { name: "Nordstrom", distance: "9", time: "40", fee: "$6", img: store1 },
  { name: "Nike", distance: "5", time: "30", fee: "$4", img: store4 },
];

const storesStoreSelected = [
  { name: "Tending", distance: "10.2", time: "42", fee: "$6", img: "" },
  { name: "Women's", distance: "5.5", time: "37", fee: "$5", img: store3 },
  { name: "Men's", distance: "5.5", time: "37", fee: "$5", img: store1 },
  { name: "Kid's", distance: "5.5", time: "37", fee: "$5", img: store4 },
];

export default function Shop() {
  let { name } = useParams();
  const [selected, setSelected] = useState("Store");
  if (name === "home") {
    name = "";
  }
  return (
    <div className="shopping">
      <div className="header-shop">
        <h2>ShopOn {name.charAt(0, 1).toUpperCase() + name.slice(1)}</h2>
        <div className="inputs-shop">
          <input placeholder="16 E Pearson St, Chicago, IL 60611"></input>
          <input placeholder="Search stores, products, etc"></input>
        </div>
        <div className="buttons-shop">
          <button className="header-button">
            <svg
              className="profile icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>account-circle</title>
              <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
            </svg>
          </button>
          <button className="header-button">
            <svg
              className="cart icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>cart</title>
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="categories">
        {categories.map((deal) => {
          if (deal.name === selected) {
            return (
              <button
                onClick={() => setSelected(deal.name)}
                key={deal.name}
                className={"category selected"}
              >
                {deal.name}
              </button>
            );
          }
          return (
            <button
              onClick={() => setSelected(deal.name)}
              key={deal.name}
              className="category"
            >
              {deal.name}
            </button>
          );
        })}
      </div>
      <div className="deals">
        {deals.map((deal) => {
          if (deal.name === selected) {
            return (
              <button
                onClick={() => setSelected(deal.name)}
                key={deal.name}
                className={"deal selected"}
              >
                {deal.name}
              </button>
            );
          }
          return (
            <button
              onClick={() => setSelected(deal.name)}
              key={deal.name}
              className="deal"
            >
              {deal.name}
            </button>
          );
        })}
      </div>
      <div className="stores-home">
        {name !== ""
          ? storesStoreSelected.map((store) => (
              <ShoppingCard key={store.name} data={store}></ShoppingCard>
            ))
          : stores.map((store) => (
              <ShoppingCard key={store.name} data={store}></ShoppingCard>
            ))}
      </div>
    </div>
  );
}
