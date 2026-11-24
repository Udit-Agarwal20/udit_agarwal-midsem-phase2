import { Link } from "react-router";

function BikeCard({ bike, rentBike, returnBike }) {
  return (
    <div className="card">
      <div className="c1">
        <h3 className="name">{bike.name}</h3>
        <span className={bike.isAvailable ? "tag green" : "tag red"}>
          {bike.isAvailable ? "Available" : "Under Maintenance"}
        </span>
      </div>
      <div className="info">
        <p className="text"><strong>Brand:</strong> {bike.brand}</p>
        <p className="text"><strong>Type:</strong> {bike.type}</p>
        <p className="text"><strong>Engine:</strong> {bike.engineCC === 0 ? "Electric ⚡" : bike.engineCC + " cc"}</p>
        <p className="text"><strong>Location:</strong> {bike.location}</p>
        <p className="price">₹{bike.pricePerHour} / hour</p>
      </div>
      <div className="btns">
        <Link to={`/bikes/${bike.id}`} className="more">View Details</Link>
        {!bike.isAvailable ? (
          <span className="alert">Under Maintenance</span>
        ) : !bike.isRented ? (
          <button className="btn blue" onClick={() => rentBike(bike.id)}>Rent</button>
        ) : (
          <button className="btn red" onClick={() => returnBike(bike.id)}>Return</button>
        )}
      </div>
    </div>
  );
}

export default BikeCard;
