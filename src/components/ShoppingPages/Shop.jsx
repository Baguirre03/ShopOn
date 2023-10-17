import { useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCard from "../HelperComponents/ShopCard";
import store1 from "../../assets/store-img.png";
import store2 from "../../assets/store-img1.png";
import store3 from "../../assets/store-img2.png";
import store4 from "../../assets/store-img3.png";
import trending from "../../assets/store.png";
import women from "../../assets/store1.png";
import men from "../../assets/store2.png";
import kid from "../../assets/store3.png";

import { Link } from "react-router-dom";
import ProfileCart from "../HelperComponents/ProfileCart";
import SearchInput from "../HelperComponents/SearchInput";

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
  { name: "Trending", distance: "10.2", time: "42", fee: "$6", img: trending },
  { name: "Womens", distance: "5.5", time: "37", fee: "$5", img: women },
  { name: "Mens", distance: "5.5", time: "37", fee: "$5", img: men },
  { name: "Kids", distance: "5.5", time: "37", fee: "$5", img: kid },
];

export default function Shop() {
  let { name } = useParams();
  const [selected, setSelected] = useState("Store");
  let link = "/shop/home";

  if (name === "home") {
    name = "";
  }
  if (name === "") link = "/";

  return (
    <div className="shopping">
      <div className="header-shop">
        <Link to={link}>
          <h2>
            <span className="shop-name">shopOn</span>{" "}
            {name.charAt(0, 1).toUpperCase() + name.slice(1)}
          </h2>
        </Link>
        <div className="inputs-shop">
          <div className="shop-search-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>map-marker</title>
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <input
              className="shop-search"
              placeholder="16 E Pearson St, Chicago, IL 60611"
            ></input>
          </div>
          <SearchInput></SearchInput>
        </div>
        <ProfileCart></ProfileCart>
      </div>
      <div className="categories">
        {categories.map((deal) => {
          return (
            <Link key={deal.name} to={"/category/" + deal.name.toLowerCase()}>
              <button key={deal.name} className="category">
                {deal.name}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="deals">
        {deals.map((deal) => {
          return deal.name === "Store" ? (
            <Link to="/shop/home">
              <button
                onClick={() => setSelected(deal.name)}
                key={deal.name}
                className={deal.name === selected ? "deal selected" : "deal"}
              >
                {deal.name}
              </button>
            </Link>
          ) : (
            <button
              onClick={() => setSelected(deal.name)}
              key={deal.name}
              className={deal.name === selected ? "deal selected" : "deal"}
            >
              {deal.name}
            </button>
          );
        })}
      </div>
      <div className="stores-home">
        {name !== ""
          ? storesStoreSelected.map((store) => (
              <ShoppingCard
                handleClick={() => setSelected("")}
                key={store.name}
                data={store}
              ></ShoppingCard>
            ))
          : stores.map((store) => (
              <ShoppingCard
                handleClick={() => setSelected("")}
                key={store.name}
                data={store}
              ></ShoppingCard>
            ))}
      </div>
    </div>
  );
}
