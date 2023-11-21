import React from "react";
import "./SlideTwoLeft.css";
import mint from "../../Assets/mint.png";
import caco from "../../Assets/cacao.png";


const SlideTwoLeft = ({ props }) => {


  return (

    <div className="left-container h-[96vh] pt-20">

      <div className="btn-new"> <p> New </p> </div>

      <h1 className="dobule-decker"> Corona Dark Chocolate </h1>


      {/* Description */}
      <p className="description">
      Corona Dark Chocolate 
      </p>

      {/* Ingredients and Order Button */}
      <div className="ingradient-order-price-container">

        {/* Ingredients */}
        <div className="ingradient">
          <p>INGREDIENTS</p>
          <div className="icon">
            <img src={mint} alt="mint" />
            <img src={caco} alt="caco" />
          </div>
        </div>

        {/* Order Button */}
        <div className="price_order_btn-conatiner">
          <div className="price-container">
            <p className="price">EGP 174.45 </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SlideTwoLeft;