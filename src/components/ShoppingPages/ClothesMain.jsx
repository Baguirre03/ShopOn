import SearchInput from "../HelperComponents/SearchInput";
import ProfileCart from "../HelperComponents/ProfileCart";
import HeaderShop from "./HeaderShop";
import BrowseBy from "./BrowseSection";
import { useState } from "react";
import browseBy from "../../data/Items";

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
