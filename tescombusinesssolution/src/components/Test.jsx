import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import bharatbank_removebg_preview from "../image/"
import bluedart_removebg_preview from "../image/ourImages/bluedart-removebg-preview.png"
import camlin_removebg_preview from "../image/ourImages/camlin-removebg-preview.png"
import ecom_removebg_preview from "../image/ourImages/ecom-removebg-preview.png"
import fis_removebg_preview from "../image/ourImages/fis-removebg-preview.png"
import fortis_removebg_preview from "../image/ourImages/fortis-removebg-preview.png"
import hsbc_removebg_preview from "../image/ourImages/hsbc-removebg-preview.png"
import inframarket_removebg_preview from "../image/ourImages/inframarket-removebg-preview.png"
import kec_removebg_preview from "../image/ourImages/kec-removebg-preview.png"
import lnt_removebg_preview from "../image/ourImages/lnt-removebg-preview.png"
import oberoi_removebg_preview from "../image/ourImages/oberoi-removebg-preview.png"
import polycab_removebg_preview from "../image/ourImages/polycab-removebg-preview.png"
import schindler_removebg_preview from "../image/ourImages/schindler-removebg-preview.png"
import tatacapital_removebg_preview from "../image/ourImages/tatacapital-removebg-preview.png"
import titan_removebg_preview from "../image/ourImages/titan-removebg-preview.png"
import trnet_removebg_preview from "../image/ourImages/trnet-removebg-preview.png"
import veenaworld_removebg_preview from "../image/ourImages/veenaworld-removebg-preview.png"
import yusen_removebg_preview from "../image/ourImages/yusen-removebg-preview.png"

function Test() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true
    // responsive: [{
    //   breakpoint: 768,
    //   setting: {
    //     slidesToShow: 4
    //   }
    // }, {
    //   breakpoint: 520,
    //   setting: {
    //     slidesToShow: 3
    //   }
    // }]
  };
  return (
    <div className="slider-container" style={{ paddingTop: '100px', scale: '0.8' }}>
      <img src={schindler_removebg_preview} alt="" />
    </div>
  );
}

export default Test;
