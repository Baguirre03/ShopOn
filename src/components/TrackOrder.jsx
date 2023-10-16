import track from "../assets/trackorder.png";
export default function Track() {
  return (
    <div className="track-order-container">
      <h2>Track your order</h2>
      <div className="track-content">
        <img src={track} alt="Computer with distance on it" />
        <p>
          Watch your driver pick up your clothes and deliver right to your door
        </p>
      </div>
    </div>
  );
}
