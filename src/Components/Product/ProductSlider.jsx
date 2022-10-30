import React from "react";
import Slider from "react-slick";
import bg3 from "./../../assets/images/Neo3D/SliderImage1.jpg";
import bg1 from "./../../assets/images/Neo3D/SliderImage2.jpg";
import bg2 from "./../../assets/images/Neo3D/SliderImage3.jpg";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>

<div>
            <img src={bg1}/>
          </div>
          <div>
          <img src={bg2}/>
          </div>
          <div>
          <img src={bg3}/>
          </div>
            </Slider>
  );
};

export default ProductSlider;
