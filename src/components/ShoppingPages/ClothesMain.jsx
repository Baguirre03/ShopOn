import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchInput from "../HelperComponents/SearchInput";
import ProfileCart from "../HelperComponents/ProfileCart";

export default function ClothesMain() {
  const { name } = useParams();
  const options = ["mens", "trending", "womens", "beauty"];
  if (options.includes(name)) {
    options.splice(options.indexOf(name), 1);
  }
  return (
    <div className="clothes-main-container">
      <div className="header-clothes-main">
        <div className="title">
          <div className="header-shop">
            <Link to="/shop/home">
              <h2 className="welcome">
                ShopOn <span className="name-shop-clothes">{name}</span>
              </h2>
            </Link>
          </div>
          <div className="other-sections">
            {options.map((opt) => (
              <Link
                className="options-category"
                key={opt}
                to={"/category/" + opt}
              >
                <h3>{opt}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="clothes-main-search-prof">
          <SearchInput></SearchInput>
          <ProfileCart></ProfileCart>
        </div>
      </div>
    </div>
  );
}
