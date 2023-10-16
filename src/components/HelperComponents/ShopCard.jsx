import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ShoppingCard({ data }) {
  let clickable = true;
  if (
    data.name == "Trending" ||
    data.name == "Women's" ||
    data.name == "Men's" ||
    data.name == "Kid's"
  ) {
    clickable = false;
  }
  return clickable ? (
    <Link to={"/shop/" + data.name.toLowerCase()}>
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
    <div className="shopping-card">
      <div className="shop-card-image-holder">
        <img src={data.img}></img>
      </div>
      <h4>{data.name}</h4>
      <p>
        {data.distance} mi | {data.time} min | {data.fee} Delivery Fee
      </p>
    </div>
  );
}
