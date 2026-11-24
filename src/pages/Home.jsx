import { Link } from "react-router";

function Home({ bikes }) {
  const totalBikes = bikes.length;

  const availableBikes = bikes.filter((bike) => {
    return bike.isAvailable && !bike.isRented;
  }).length;

  const rentedBikes = bikes.filter((bike) => {
    return bike.isRented;
  }).length;

  return (
    <div className="box">
      <div className="hero">
        <h1>Bike Rental</h1>
        <p className="desc">
          Browse available bikes, scooters and electric vehicles. Rent your preferred ride at an hourly price.
        </p>
        <Link to="/bikes" className="btn blue go">Browse Bikes</Link>
      </div>

      <div className="stats">
        <div className="s1">
          <h3>Total Bikes</h3>
          <p className="num">{totalBikes}</p>
        </div>
        <div className="s1">
          <h3>Available Bikes</h3>
          <p className="num">{availableBikes}</p>
        </div>
        <div className="s1">
          <h3>Rented Bikes</h3>
          <p className="num">{rentedBikes}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
