import { useParams, Link } from "react-router";
import { useState } from "react";

function BikeDetails({ bikes, rentBike, returnBike }) {
  const { id } = useParams();
  const [hours, setHours] = useState(1);

  const bike = bikes.find((bike) => {
    return bike.id === Number(id);
  });

  function increaseHours() {
    if (hours < 12) {
      setHours(hours + 1);
    }
  }

  function decreaseHours() {
    if (hours > 1) {
      setHours(hours - 1);
    }
  }

  if (!bike) {
    return (
      <div className="box">
        <div className="details lost">
          <h2>Bike not found</h2>
          <Link to="/bikes" className="back-a">Back to Bikes</Link>
        </div>
      </div>
    );
  }

  const totalRent = bike.pricePerHour * hours;

  return (
    <div className="box">
      <div className="details">
        <div className="head">
          <h2>{bike.name}</h2>
          <span className={bike.isAvailable ? "tag green" : "tag red"}>
            {bike.isAvailable ? "Available" : "Under Maintenance"}
          </span>
        </div>

        <div className="list">
          <div className="row1">
            <span className="lbl">Bike ID:</span>
            <span className="val">{bike.id}</span>
          </div>
          <div className="row1">
            <span className="lbl">Brand:</span>
            <span className="val">{bike.brand}</span>
          </div>
          <div className="row1">
            <span className="lbl">Type:</span>
            <span className="val">{bike.type}</span>
          </div>
          <div className="row1">
            <span className="lbl">Price Per Hour:</span>
            <span className="val">₹{bike.pricePerHour}</span>
          </div>
          <div className="row1">
            <span className="lbl">Engine:</span>
            <span className="val">{bike.engineCC === 0 ? "Electric ⚡" : bike.engineCC + " cc"}</span>
          </div>
          <div className="row1">
            <span className="lbl">Mileage / Range:</span>
            <span className="val">{bike.mileage}</span>
          </div>
          <div className="row1">
            <span className="lbl">Location:</span>
            <span className="val">{bike.location}</span>
          </div>
          <div className="row1">
            <span className="lbl">Availability Status:</span>
            <span className="val">{bike.isAvailable ? "Available" : "Under Maintenance"}</span>
          </div>
          <div className="row1">
            <span className="lbl">Rental Status:</span>
            <span className="val">{bike.isRented ? "Rented" : "Not Rented"}</span>
          </div>
        </div>

        <div className="counter">
          <h3>Rental Duration</h3>
          <div className="c2">
            <button
              className="btn-c"
              onClick={decreaseHours}
              disabled={hours <= 1}
            >
              -
            </button>
            <span className="val-c">{hours} {hours === 1 ? "hour" : "hours"}</span>
            <button
              className="btn-c"
              onClick={increaseHours}
              disabled={hours >= 12}
            >
              +
            </button>
          </div>
          <p className="price">Total Rent: ₹{totalRent}</p>
        </div>

        <div className="btns">
          {!bike.isAvailable ? (
            <span className="alert">Under Maintenance</span>
          ) : !bike.isRented ? (
            <button className="btn blue" onClick={() => rentBike(bike.id)}>
              Rent
            </button>
          ) : (
            <button className="btn red" onClick={() => returnBike(bike.id)}>
              Return
            </button>
          )}
        </div>

        <div className="back">
          <Link to="/bikes" className="back-a">Back to Bikes</Link>
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;
