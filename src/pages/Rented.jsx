import { Link } from "react-router";
import BikeCard from "../components/BikeCard.jsx";

function Rented({ bikes, rentBike, returnBike }) {
  const rentedBikes = bikes.filter((bike) => {
    return bike.isRented;
  });

  let totalPrice = 0;

  for (let i = 0; i < rentedBikes.length; i++) {
    totalPrice = totalPrice + rentedBikes[i].pricePerHour;
  }

  return (
    <div className="box">
      <h2>Rented Bikes</h2>
      <div className="sum">
        <p>Total Rented Bikes: {rentedBikes.length}</p>
        <p className="price">Total Price Per Hour: ₹{totalPrice}</p>
      </div>

      {rentedBikes.length === 0 ? (
        <div className="empty-box">
          <p className="empty">No bikes rented</p>
          <Link to="/bikes" className="btn blue">Browse Bikes</Link>
        </div>
      ) : (
        <div className="grid">
          {rentedBikes.map((bike) => (
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

export default Rented;
