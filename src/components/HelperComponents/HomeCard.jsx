import { Link } from "react-router-dom";

export default function HomeCard({ data }) {
  return (
    <Link to={"shop/" + data.name} key={data.name}>
      <div className="home-card">
        <div className="image-container-card">
          <img src={data.src}></img>
        </div>
        <div className="right-side-home">
          <p>Deliver by: {data.time}</p>
          <div className="home-distance">
            <p>{data.distance} mi away</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
