import { Link } from "react-router";

function Navbar({ rentedCount }) {
  return (
    <nav className="bar">
      <div className="nav">
        <Link to="/" className="logo">Bike Rental</Link>
        <div className="links">
          <Link to="/" className="item">Home</Link>
          <Link to="/bikes" className="item">Bikes</Link>
          <Link to="/rented" className="item">Rented ({rentedCount})</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
