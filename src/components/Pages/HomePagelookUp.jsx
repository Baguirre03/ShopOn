import HomeCard from "../HelperComponents/HomeCard";
import nike from "../../assets/nike.png";
import zara from "../../assets/zara.png";
import nordstrom from "../../assets/nordstrom.svg";
import loft from "../../assets/loft.png";
import gap from "../../assets/gap.png";
import madwell from "../../assets/madwell.png";

const homeData = [
  {
    src: nike,
    time: "10:30am",
    distance: ".2",
    name: "nike",
  },
  {
    src: zara,
    time: "5:00pm",
    distance: "8",
    name: "zara",
  },
  {
    src: nordstrom,
    time: "4:00pm",
    distance: "9",
    name: "nordstrom",
  },
  {
    src: loft,
    time: "2:30pm",
    distance: "4",
    name: "loft",
  },
  {
    src: madwell,
    time: "1:30pm",
    distance: "5",
    name: "madewell",
  },
  {
    src: gap,
    time: "11:30am",
    distance: ".3",
    name: "gap",
  },
];

export default function HomeSearch() {
  return (
    <div className="home-search-container">
      <div className="search-top">
        <h2>Find Stores Near By</h2>
        <div className="search-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>magnify</title>
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
          <input
            className="address-search"
            placeholder="Enter Your Address"
          ></input>
        </div>
      </div>
      <div className="search-card-container">
        {homeData.map((data) => {
          return <HomeCard key={data.distance} data={data}></HomeCard>;
        })}
      </div>
    </div>
  );
}
