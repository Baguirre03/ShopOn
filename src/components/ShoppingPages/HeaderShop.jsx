import { Link, useParams } from "react-router-dom";
export default function HeaderShop({ handleBrowse }) {
  const { name } = useParams();
  const options = [
    {
      title: "Men",
    },
    {
      title: "Trending",
    },
    {
      title: "Womens",
    },
    {
      title: "Beauty",
    },
    {
      title: "Kids",
    },
  ];
  return (
    <div className="title">
      <div className="header-shop">
        <Link to="/shop/home">
          <h2 className="welcome">
            <span className="shop-name">ShopOn</span> {name}
          </h2>
        </Link>
      </div>
      <div className="other-sections">
        {options.map((opt) => (
          <Link
            className="options-category"
            key={opt.title}
            to={"/category/" + opt.title.toLowerCase()}
            onClick={() => handleBrowse()}
          >
            <h3
              className={
                opt.title.toLowerCase() === name.toLowerCase()
                  ? "options-category selected"
                  : "options-category"
              }
            >
              {opt.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
