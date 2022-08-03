import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header name="ABOUT US" />

      <div class="container">
        <p className="text-black fs-5">
          The Toyota Extended Service Plan is designed to give you a value-added
          product solution. <br></br> Quality Service. Genuine Parts. Advanced
          Driving Course. Finance Products. Accesories. Models: <br></br>
          Corolla, Fortuner, Yaris, Hilux, Rav 4, Rush, Etios, S'esfikile,
          Avanza, Aygo.
        </p>
      </div>
    </div>
  );
};

export default About;
