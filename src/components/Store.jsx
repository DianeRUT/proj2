import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/storeListing.css";
import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";
import store4 from "../assets/store4.webp";
import store6 from "../assets/store6.webp";
import person1 from "../assets/person.webp";
import don1 from "../assets/don.png";
import glass1 from "../assets/glass.webp";
import store7 from "../assets/sto1.webp";
import sound1 from "../assets/sound.webp";
import shirt1 from "../assets/shirt.webp";

const stores = [
  { name: "John Doe's Store", image: store3, rating: 5, owner: glass1 },
  { name: "Jessica's Store", image: store7, rating: 4, owner: store7 },
  { name: "Santa Monica's Store", image: store4, rating: 5, owner: shirt1 },
  { name: "Digital Good's Store", image: store2, rating: 4, owner: sound1 },
  { name: "The Glass Store", image: store1, rating: 3, owner: person1 },
  { name: "Josh Doe's Store", image: store6, rating: 4, owner: don1 },
];

const StoreList = () => {
  return (
    <div className="store-list-container">
      <h1 className="title">Store List</h1>
      <div className="filter-bar">
        <span className="total-stores">Total stores showing: {stores.length}</span>
        <button className="filter-btn">Filter</button>
        <select className="sort-dropdown">
          <option>Most Recent</option>
          <option>Top Rated</option>
        </select>
      </div>
      <div className="store-grid">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <div className="image-container">
              <img src={store.image} alt={store.name} className="store-image" />
              <div className="image-overlay">
                <div className="store-info">
                  <h2 className="store-name">{store.name}</h2>
                  <p className="store-location">Central Park, New York, US</p>
                  <p className="store-rating">{"⭐".repeat(store.rating)}</p>
                </div>
              </div>
              <img src={store.owner} alt="Owner" className="owner-image" />
            </div>
            <div className="store-footer">
              <button className="store-action">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
