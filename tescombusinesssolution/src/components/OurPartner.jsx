import React from "react";
import Slider from "react-slick";
// import img from "../our partners/images/bharatbank-removebg-preview.png"
import aws_emovebg_preview from "../image/ourPartners/aws-removebg-preview.png"
import azure_emovebg_preview from "../image/ourPartners/azure-removebg-preview.png"
import esds_emovebg_preview from "../image/ourPartners/esds-removebg-preview.png"
import googlecloud_emovebg_preview from "../image/ourPartners/googlecloud-removebg-preview.png"
import k7_emovebg_preview from "../image/ourPartners/k7-removebg-preview.png"
import lightstrom_emovebg_preview from "../image/ourPartners/lightstrom-removebg-preview.png"
import lntcloud_emovebg_preview from "../image/ourPartners/lntcloud-removebg-preview.png"
import routermobile_emovebg_preview from "../image/ourPartners/routermobile-removebg-preview.png"
import safeweb_emovebg_preview from "../image/ourPartners/safeweb-removebg-preview.png"
import tatacomm_emovebg_preview from "../image/ourPartners/tatacomm-removebg-preview.png"
import tatatele_emovebg_preview from "../image/ourPartners/tatatele-removebg-preview.png"
import vultr_emovebg_preview from "../image/ourPartners/vultr-removebg-preview.png"

function OurPartner() {
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
        rtl:false,
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
    // tescombusinesssolution\src\image\ourPartners\aws-removebg-preview.png
    return (
        <div style={{ marginTop: '150px' , marginBottom:'-200px', scale: '0.8' }}>
            <h1 style={{ fontWeight: 'bolder', textAlign: 'center' }}>Our Partner</h1>
            <div className="slider-container">
                <Slider {...settings} style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                    {/* <div className="slide"><img src={require('../image/ourPartners/aws-removebg-preview.png').defualt} className="imgTag" style={{marginTop:'-50px', display:'none'}} alt="l" /></div> */}
                    <div className="slide"><img src={aws_emovebg_preview} className="imgTag" style={{ marginTop: '-50px' }} alt="logo" /></div>
                    <div className="slide"><img src={azure_emovebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={esds_emovebg_preview} className="imgTag" style={{ marginTop: '-50px' }} alt="logo" /></div>
                    <div className="slide"><img src={googlecloud_emovebg_preview} className="imgTag" style={{ marginTop: '-50px' }} alt="logo" /></div>
                    <div className="slide"><img src={k7_emovebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={lightstrom_emovebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={lntcloud_emovebg_preview} className="imgTag" style={{marginLeft:'-20px'}} alt="logo" /></div>
                    <div className="slide"><img src={routermobile_emovebg_preview} className="imgTag" alt="logo" /></div>
                    <div className="slide"><img src={safeweb_emovebg_preview} className="imgTag" style={{marginLeft:'20px'}} alt="logo" /></div>
                    <div className="slide"><img src={tatacomm_emovebg_preview} className="imgTag" style={{marginLeft:'-20px'}} alt="logo" /></div>
                    <div className="slide"><img src={tatatele_emovebg_preview} className="imgTag" style={{marginTop:'10px'}} alt="logo" /></div>
                    <div className="slide"><img src={vultr_emovebg_preview} className="imgTag" style={{marginTop:'10px'}} alt="logo" /></div>
                </Slider>
            </div>
        </div>
    );
}

export default OurPartner;
