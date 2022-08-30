import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Cars from "../folderCars/cars";

function Home() {
  return (
    <div className="mb-5 m-3 fw-bold text-white">
      <Header name="Welcome to Our World - Toyota " />
      <div className="container">
        <div className="row">
          {Cars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
