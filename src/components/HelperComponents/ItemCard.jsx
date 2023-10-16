export default function ItemCard({ data }) {
  return (
    <div className="shopping-card item">
      <div className="shop-card-image-holder item">
        <img src={data.img}></img>
      </div>
      <h4>{data.name}</h4>
      <p>${data.price}</p>
      {data.colors &&
        data.colors.map((color) => (
          <span key={color} className={"color" + color}></span>
        ))}
    </div>
  );
}
