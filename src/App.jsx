import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import bikes from "./data/bikes.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Bikes from "./pages/Bikes.jsx";
import BikeDetails from "./pages/BikeDetails.jsx";
import Rented from "./pages/Rented.jsx";

function App() {
  const [bikeList, setBikeList] = useState(bikes);

  function rentBike(id) {
    setBikeList(bikeList.map((bike) => {
      if (bike.id === id && bike.isAvailable) {
        return { ...bike, isRented: true };
      } else {
        return bike;
      }
    }));
  }

  function returnBike(id) {
    setBikeList(bikeList.map((bike) => {
      if (bike.id === id) {
        return { ...bike, isRented: false };
      } else {
        return bike;
      }
    }));
  }

  const rentedCount = bikeList.filter((bike) => {
    return bike.isRented;
  }).length;

  return (
    <BrowserRouter>
      <Navbar rentedCount={rentedCount} />
      <Routes>
        <Route path="/" element={<Home bikes={bikeList} />} />
        <Route path="/bikes" element={<Bikes bikes={bikeList} rentBike={rentBike} returnBike={returnBike} />} />
        <Route path="/bikes/:id" element={<BikeDetails bikes={bikeList} rentBike={rentBike} returnBike={returnBike} />} />
        <Route path="/rented" element={<Rented bikes={bikeList} rentBike={rentBike} returnBike={returnBike} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
