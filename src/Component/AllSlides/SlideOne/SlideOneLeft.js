import React from "react";
import "./SlideOneLeft.css";
import mint from "../../Assets/mint.png";
import cacao from "../../Assets/cacao.png";


const SlideOneLeft = () => {


  return (

    <div className="left-container h-[96vh] pt-20">

      <div className="btn-new"> <p> New </p> </div>

      <h1 className="dobule-decker"> chocolate mint cream</h1>

      {/* Description */}
      <p className="description">
      Corona Chocolate Mint Cream 40gm
      </p>

      {/* Ingredients and Order Button */}
      <div className="ingradient-order-price-container">

        {/* Ingredients */}
        <div className="ingradient">
          <p>INGREDIENTS</p>
          <div className="icon">
            <img src={mint} alt="mint" />
            <img src={cacao} alt="cacao" />
          </div>
        </div>

        {/* Order Button */}
        <div className="price_order_btn-conatiner">
          {/* <div className="btn order-btn-cont"><button>Order Now</button></div> */}
          <div className="price-container">
            <p className="price">EGP 10.00</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SlideOneLeft;