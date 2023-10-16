export default function ShoppingCard({ data }) {
  return (
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
