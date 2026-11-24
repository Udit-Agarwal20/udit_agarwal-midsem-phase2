import { useState } from "react";
import BikeCard from "../components/BikeCard.jsx";

function Bikes({ bikes, rentBike, returnBike }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredBikes = bikes.filter((bike) => {
    return (
      (bike.name.toLowerCase().includes(search.toLowerCase()) ||
      bike.brand.toLowerCase().includes(search.toLowerCase())) &&
      (type === "All" || bike.type === type)
    );
  });

  return (
    <div className="box">
      <h2>All Bikes</h2>

      <div className="filter">
        <input
          type="text"
          className="search"
          placeholder="Search bikes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Scooter">Scooter</option>
          <option value="Bike">Bike</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <p className="count">Matching Bikes: {filteredBikes.length}</p>

      {filteredBikes.length === 0 ? (
        <p className="empty">No bikes found</p>
      ) : (
        <div className="grid">
          {filteredBikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              rentBike={rentBike}
              returnBike={returnBike}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bikes;
