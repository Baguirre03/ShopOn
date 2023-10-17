import ItemCard from "../HelperComponents/ItemCard";

export default function BrowseBy({
  currentBrowse,
  handleBrowse,
  browseBy,
  defaultBrowse,
}) {
  return (
    <div className="browse-by-container">
      <ul className="browse-by-list">
        <h4>Browse By:</h4>
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
        <div
          className={
            currentBrowse === "categories"
              ? "browse-items selected"
              : "browse-items"
          }
          onClick={() => defaultBrowse()}
        >
          <li>Categories</li>
        </div>
      </ul>
      <div
        className={
          currentBrowse !== "categories"
            ? "browse-no-categories"
            : "browse-by-card"
        }
      >
        {currentBrowse !== "categories" ? (
          <div key={currentBrowse.name} className="container">
            <div className="browse-items-grid">
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
