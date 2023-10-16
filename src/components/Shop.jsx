import { useState } from "react";
import { useParams } from "react-router-dom";

const deals = [
  { name: "Sale" },
  { name: "Under 30 min" },
  { name: "under $10 Delivery Fee" },
  { name: "Store" },
  { name: "Price" },
];

export default function Shop() {
  const { name } = useParams();
  const [selected, setSelected] = useState("Store");

  function handleClick(name) {
    setSelected(name);
  }

  return (
    <div>
      <div className="header">
        <h2>Shop On {name.charAt(0, 1).toUpperCase() + name.slice(1)}</h2>
        <input></input>
        <input></input>
      </div>
      <div className="categories">
        <button className="category">Trending</button>
        <button className="category">Women's</button>
        <button className="category">Men's</button>
        <button className="category">Kid's</button>
        <button className="category">Beauty</button>
      </div>
      <div className="deals">
        {deals.map((deal) => {
          if (deal.name === selected) {
            return (
              <button
                onClick={() => setSelected(deal.name)}
                key={deal.name}
                className={"deal selected"}
              >
                {deal.name}
              </button>
            );
          }
          return (
            <button
              onClick={() => setSelected(deal.name)}
              key={deal.name}
              className="deal"
            >
              {deal.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
