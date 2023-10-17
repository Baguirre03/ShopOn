import ItemCard from "../HelperComponents/ItemCard";

export default function BrowseBy({ currentBrowse, handleBrowse, browseBy }) {
  console.log(currentBrowse);
  return (
    <div className="browse-by-container">
      <ul className="browse-by-list">
        <h4>Browse By:</h4>
        <span className="line"></span>
        {browseBy.map((opt, index) => {
          return (
            <div
              className={
                currentBrowse.name === opt.name
                  ? "browse-items selected"
                  : "browse-items"
              }
              onClick={() => handleBrowse(index)}
              key={opt.name}
            >
              <li key={opt}>{opt.name}</li>
            </div>
          );
        })}
      </ul>
      <div className="browse-by-card">
        {currentBrowse !== "categories" ? (
          <div key={currentBrowse.name} className="container">
            <h3>{currentBrowse.name}</h3>
            <div className="category-items">
              {currentBrowse.items.map((item) => (
                <ItemCard key={item.name} data={item}></ItemCard>
              ))}
            </div>
          </div>
        ) : (
          browseBy.map((opt, index) => {
            return (
              <div
                className="browse-card"
                onClick={() => handleBrowse(index)}
                key={opt.name}
              >
                <div className="browse-card-children">
                  <img src={opt.img}></img>
                  <p key={opt}>{opt.name}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
