import React, { useEffect } from "react";
import Slider from "react-slick";
// import img from "../our partners/images/bharatbank-removebg-preview.png"
import bharatbank_removebg_preview from "../image/ourImages/bharatbank-removebg-preview.png"
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

function OurSerives() {
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
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    };

    return (
        <div style={{ marginTop: '150px', marginBottom:'-200px', scale: '0.8' }}>
            <h1 style={{ fontWeight: 'bolder', textAlign: 'center' }}>Our Esteemed Clients</h1>
            <div className="slider-container">
                {/* <Slider {...settings} style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                    <div className="slide"><img src={bharatbank_removebg_preview} className="imgTag" style={{ marginLeft: '-50px', marginTop: '30px' }} alt="logo" /></div>
                    <div className="slide"><img src={bluedart_removebg_preview} className="imgTag" style={{ marginLeft: '-40px', marginTop: '20px' }} alt="logo" /></div>
                    <div className="slide"><img src={camlin_removebg_preview} className="imgTag" style={{ marginTop: '10px' }} alt="logo" /></div>
                    <div className="slide"><img src={ecom_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={fis_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={fortis_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={hsbc_removebg_preview} className="imgTag" style={{ marginTop: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={inframarket_removebg_preview} className="imgTag" style={{ marginLeft: '-80px', marginTop: '30px' }} alt="logo" /></div>
                    <div className="slide"><img src={kec_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={lnt_removebg_preview} className="imgTag" style={{ marginTop: '20px', marginLeft: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={oberoi_removebg_preview} className="imgTag" style={{ marginLeft: '-40px' }} alt="logo" /></div>
                    <div className="slide"><img src={polycab_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={schindler_removebg_preview} className="imgTag" style={{ marginTop: '30px', marginLeft: '-70px' }} alt="logo" /></div>
                    <div className="slide"><img src={tatacapital_removebg_preview} className="imgTag" style={{ marginTop: '40px', marginLeft: '-70px' }} alt="logo" /></div>
                    <div className="slide"><img src={titan_removebg_preview} className="imgTag" style={{ marginTop: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={trnet_removebg_preview} className="imgTag" style={{ marginTop: '20px' }} alt="logo" /></div>
                    <div className="slide"><img src={veenaworld_removebg_preview} className="imgTag" style={{ marginTop: '10px' }} alt="logo" /></div>
                    <div className="slide"><img src={yusen_removebg_preview} className="imgTag" style={{ marginLeft: '-50px' }} alt="logo" /></div>
                </Slider> */}
                <Slider {...settings} style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                    <div className="slide"><img src={tatacapital_removebg_preview} className="imgTag" style={{ marginTop: '40px', marginLeft: '-70px' }} alt="logo" /></div>
                    <div className="slide"><img src={bharatbank_removebg_preview} className="imgTag" style={{ marginLeft: '-50px', marginTop: '30px' }} alt="logo" /></div>
                    <div className="slide"><img src={bluedart_removebg_preview} className="imgTag" style={{ marginLeft: '-40px', marginTop: '20px' }} alt="logo" /></div>
                    <div className="slide"><img src={fis_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={schindler_removebg_preview} className="imgTag" style={{ marginTop: '30px', marginLeft: '-70px' }} alt="logo" /></div>
                    <div className="slide"><img src={titan_removebg_preview} className="imgTag" style={{ marginTop: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={camlin_removebg_preview} className="imgTag" style={{ marginTop: '10px' }} alt="logo" /></div>
                    <div className="slide"><img src={trnet_removebg_preview} className="imgTag" style={{ marginTop: '20px' }} alt="logo" /></div>
                    <div className="slide"><img src={ecom_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={oberoi_removebg_preview} className="imgTag" style={{ marginLeft: '-40px' }} alt="logo" /></div>
                    <div className="slide"><img src={hsbc_removebg_preview} className="imgTag" style={{ marginTop: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={fortis_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={inframarket_removebg_preview} className="imgTag" style={{ marginLeft: '-80px', marginTop: '30px' }} alt="logo" /></div>
                    <div className="slide"><img src={kec_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={lnt_removebg_preview} className="imgTag" style={{ marginTop: '20px', marginLeft: '-20px' }} alt="logo" /></div>
                    <div className="slide"><img src={polycab_removebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={veenaworld_removebg_preview} className="imgTag" style={{ marginTop: '10px' }} alt="logo" /></div>
                    <div className="slide"><img src={yusen_removebg_preview} className="imgTag" style={{ marginLeft: '-50px' }} alt="logo" /></div>
                </Slider>
            </div>
        </div>
    );
}

export default OurSerives;
