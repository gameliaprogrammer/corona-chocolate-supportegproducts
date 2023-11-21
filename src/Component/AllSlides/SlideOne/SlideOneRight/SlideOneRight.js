import React from "react";
import "./SlideOneRight.css";
import { IoIosArrowForward } from 'react-icons/io';


const SlideOneRight = () => {
  return (
    <div className="right-container h-[96vh]">

      {/* Features */}
      <div className="feature-container">
        <div className="content-one">
          <h3>Calories</h3>
          <p>K cal</p>
          <h1>55</h1>
        </div>

        <div className="content-one">
          <h3>Fat</h3>
          <p>K cal</p>
          <h1>0</h1>
        </div>

        <div className="content-one">
          <h3>Protien</h3>
          <p>K cal</p>
          <h1>0</h1>
        </div>
      </div>

      <div className="nutrition">
        <p>NUTRITION ALLERGENS</p>
        <p className="arrow-icon"><IoIosArrowForward /></p>
      </div>

    </div>
  );
};

export default SlideOneRight;