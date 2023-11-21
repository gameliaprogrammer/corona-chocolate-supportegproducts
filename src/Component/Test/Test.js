import React, { useState }  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

  
import one from "../Assets/chocolate-mint-cream-removebg-preview.png";
import two from "../Assets/corona-dark-chocolate-removebg-preview.png";
import three from "../Assets/chocolate-mint-cream-removebg-preview.png";
import four from "../Assets/corona-dark-chocolate-removebg-preview.png";


const images = [one, two, three, four];
    
    const Test = () => {
 

      const [slideIndex,setSlideIndex] = useState(0)
      const [currentSlide,setCurrentSlide]= useState(0)


      const settings = {
        dots: true,
        infinite: true,
        className: "center",
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        arrows:true,
        slidesToScroll: 1,
        beforeChange:( current, next)=>{
          setSlideIndex(next)
        },
        afterChange:(one, two)=>{
          setCurrentSlide(one);
        }
      } 

      const matchIndex=(index)=>{
        if( index === slideIndex){
          return 'slide slide-active';
        }else{
          return 'slide'
        }
      }
      return (
          <div className="slider">
          <Slider {...settings} >
           {
            images.map((img, index)=>(
              <div className={index === (currentSlide-1)? 'prev-slide':matchIndex(index)} key={img}>
                <img src={img} alt="" /> </div>
            ))
           }
           </Slider>
          </div>
      );
    };
    
    export default Test;