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
      <span className="sort-by">
        Sort By{" "}
        <form>
          <select>
            <option value="">Featured</option>
            <option value="">Best Sellers</option>
            <option value="">Fastest</option>
            <option value="">Price</option>
          </select>
        </form>
      </span>
      <BrowseBy
        browseBy={browseBy}
        currentBrowse={currentBrowse}
        handleBrowse={handleBrowse}
        defaultBrowse={browseDefault}
      ></BrowseBy>
    </div>
  );
}
