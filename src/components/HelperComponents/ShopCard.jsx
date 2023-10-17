import { Link } from "react-router-dom";

export default function ShoppingCard({ data, handleClick }) {
  let clickable = true;
  if (
    data.name == "Trending" ||
    data.name == "Womens" ||
    data.name == "Mens" ||
    data.name == "Kids"
  ) {
    clickable = false;
  }
  return clickable ? (
    <Link onClick={handleClick} to={"/shop/" + data.name.toLowerCase()}>
      <div className="shopping-card">
        <div className="shop-card-image-holder">
          <img src={data.img}></img>
        </div>
        <h4>{data.name}</h4>
        <p>
          {data.distance} mi | {data.time} min | {data.fee} Delivery Fee
        </p>
      </div>
    </Link>
  ) : (
    <Link to={"/category/" + data.name.toLowerCase()}>
      <div className="shopping-card">
        <div className="shop-card-image-holder">
          <img src={data.img}></img>
        </div>
        <h4>{data.name}</h4>
        <p>
          {data.distance} mi | {data.time} min | {data.fee} Delivery Fee
        </p>
      </div>
    </Link>
  );
}
