import React from "react";
import { Link } from "react-router-dom";

function Card({ car }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={car.image} className="card-img-top" alt="..." />
        <div className=" card-body text-center text-white">
          <br />
          <Link to={`/product/${car.id}`} className="btn btn-danger">
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
