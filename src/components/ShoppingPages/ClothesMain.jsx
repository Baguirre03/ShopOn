import SearchInput from "../HelperComponents/SearchInput";
import ProfileCart from "../HelperComponents/ProfileCart";
import HeaderShop from "./HeaderShop";
import BrowseBy from "./BrowseSection";
import item from "../../assets/item.png";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import { useState } from "react";

const defaultItems = [
  {
    name: "Ruched Top",
    price: "38.99",
    img: item,
    colors: ["brown", "grey"],
  },
  { name: "Slim Button Down", price: "59", img: "" },
  {
    name: "Peggy Top",
    price: "49.99",
    img: item1,
    colors: ["silver", "grey", "black"],
  },
  { name: "Ruched Top", price: "49.99", img: item2 },
  {
    name: "Slim Button Down",
    price: "45.99",
    img: "",
    colors: ["grey", "black"],
  },
  { name: "Peggy Top", price: "49.99", img: "" },
];
const browseBy = [
  {
    name: "Dresses",
    img: "",
    items: [
      {
        name: "Ruched Top",
        price: "38.99",
        img: item,
        colors: ["brown", "grey"],
      },
      { name: "Slim Button Down", price: "59", img: item1 },
      {
        name: "Peggy Top",
        price: "49.99",
        img: item2,
        colors: ["silver", "grey", "black"],
      },
      { name: "Ruched Top", price: "49.99", img: item },
      {
        name: "Slim Button Down",
        price: "45.99",
        img: item1,
        colors: ["grey", "black"],
      },
      { name: "Peggy Top", price: "49.99", img: item2 },
    ],
  },
  {
    name: "Tops",
    img: "",
    items: [
      { name: "Ruched Top", price: "49.99", img: "" },
      { name: "Slim Button Down", price: "41.99", img: "" },
      { name: "Peggy Top", price: "69.99", img: "" },
      { name: "Ruched Top", price: "23", img: "" },
      { name: "Slim Button Down", price: "40", img: "" },
      { name: "Peggy Top", price: "21", img: "" },
    ],
  },
  {
    name: "Sweaters + Cardigans",
    img: "",
    items: [
      { name: "Ruched Top", price: "49.99", img: "" },
      { name: "Slim Button Down", price: "30.99", img: "" },
      { name: "Peggy Top", price: "67.99", img: "" },
      { name: "Ruched Top", price: "25", img: "" },
      { name: "Slim Button Down", price: "49", img: "" },
      { name: "Peggy Top", price: "39", img: "" },
    ],
  },
  {
    name: "Coats + Jackets",
    img: "",
    items: [
      { name: "Ruched Top", price: "38.99", img: "" },
      { name: "Slim Button Down", price: "49", img: "" },
      { name: "Peggy Top", price: "59", img: "" },
      { name: "Ruched Top", price: "40.99", img: "" },
      { name: "Slim Button Down", price: "60", img: "" },
      { name: "Peggy Top", price: "69.99", img: "" },
    ],
  },
  {
    name: "Bottoms",
    img: "",
    items: [
      { name: "Ruched Top", price: "30.99", img: "" },
      { name: "Slim Button Down", price: "59.99", img: "" },
      { name: "Peggy Top", price: "22.99", img: "" },
      { name: "Ruched Top", price: "39", img: "" },
      { name: "Slim Button Down", price: "49.99", img: "" },
      { name: "Peggy Top", price: "49.99", img: "" },
    ],
  },
  {
    name: "Activewear",
    img: "",
    items: [
      { name: "Ruched Top", price: "49.99", img: "" },
      { name: "Slim Button Down", price: "49.99", img: "" },
      { name: "Peggy Top", price: "49.99", img: "" },
      { name: "Ruched Top", price: "49.99", img: "" },
      { name: "Slim Button Down", price: "49.99", img: "" },
      { name: "Peggy Top", price: "49.99", img: "" },
    ],
  },
  {
    name: "Intimates + Lounge",
    img: "",
    items: defaultItems,
  },
  {
    name: "Swim",
    img: "",
    items: defaultItems,
  },
  {
    name: "Shoes",
    img: "",
    items: defaultItems,
  },
  {
    name: "Accessories",
    img: "",
    items: defaultItems,
  },
  {
    name: "Sales",
    img: "",
    items: defaultItems,
  },
];

export default function ClothesMain() {
  const [currentBrowse, setCurrentBrowse] = useState("categories");

  function handleBrowse(index) {
    setCurrentBrowse(browseBy[index]);
  }
  function browseDefault() {
    setCurrentBrowse("categories");
  }

  return (
    <div className="clothes-main-container">
      <div className="header-clothes-main">
        <HeaderShop handleBrowse={browseDefault}></HeaderShop>
        <div className="clothes-main-search-prof">
          <SearchInput></SearchInput>
          <ProfileCart></ProfileCart>
        </div>
      </div>
      <span>Sort By Featured</span>
      <BrowseBy
        browseBy={browseBy}
        currentBrowse={currentBrowse}
        handleBrowse={handleBrowse}
      ></BrowseBy>
    </div>
  );
}
