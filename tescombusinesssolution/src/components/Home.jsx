import React, { useEffect } from 'react'
import carousel1 from "../image/carousel1.png"
import carousel2 from "../image/carousel2.png"
import carousel3 from "../image/carousel3.png"
import carousel4 from "../image/carousel4.png"
import carousel5 from "../image/carousel5.png"
import animatedImg from "../image/animatedGif.gif"
import { useNavigate } from 'react-router-dom'
import OurServices from './OurServices'
import OurPartner from './OurPartner'
// import tescomLogo from '../image/tescomLogo2.png'

const Home = () => {

    // useEffect(()=>{
    //     console.log("useEffect is running");
    //     let primaryhome= document.getElementById("primary-home")
    //     if (document.body.offsetWidth>786) {
    //         primaryhome.style.flexDirection='row'
    //     }else{
    //         primaryhome.style.flexDirection="column-reverse"
    //     }
    // },[document.body.offsetWidth])
    useEffect(() => {
        if (window.scrollY !== 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth behavior
        }
    }, []);

    const navigate = useNavigate();
    return (
        <div id="homeContainer" style={{ position: 'relative', top: '100px', marginBottom: '300px' }}>
            <div style={{ position: 'absolute', left: '-10px', color: 'transparent', height: '1000px', boxShadow: '40px 400px 700px 60px rgb(0, 191, 255)', zIndex: -100 }}>.</div>
            <div style={{ position: 'absolute', right: 0, color: 'transparent', height: '1000px', boxShadow: '40px 400px 700px 60px rgb(255, 145, 0)', zIndex: -100 }}></div>
            <section id="homePrimary" style={{ width: '95%', height: '80vh', display: 'flex', flexDirection: document.body.offsetWidth > 786 ? 'row' : 'column-reverse', margin: document.body.offsetWidth > 630 ? '0 auto -50px' : '0 auto -200px', justifyContent: 'space-between', alignItems: 'center', borderBottom: document.body.offsetWidth > 630 ? '3px solid #ddd' : '' }}>
                {/* <div id='tescomDetails slideDownText' style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '3%', position: 'relative', bottom: '20px', zIndex: 50 }}> */}
                <div id='tescomDetails' className='slideDownText' >
                    <h1 className='textTypeAnimation' data-text="TESCOM">TESCOM</h1>
                    <h2 id='business_solutinos'>
                        <b className='textTypeAnimation_business' data-text="BUSINESS">BUSINESS</b>&nbsp;
                        <b className='textTypeAnimation_solutions' data-text="SOLUTIONS">SOLUTIONS</b>
                    </h2>
                    <h4 className='slideDownText' style={{ fontSize: '1.1vw', fontWeight: 'bolder', margin: '10px 0' }}>INDIA'S FIRST SYSTEM INTEGRATOR  OFFERING COMPLETE IT & TELECOM SOLUTIONS</h4>
                    <h6 className='slideDownText' style={{ fontWeight: 'bolder', textAlign: 'justify', margin: '10px 0' }}>Tescom is now emerging as a major player in providing Complete business solutions in field of, TELECOMUNICATIONS INFORMATION TECHNOLOGY  to major companie & Telcos in and around…</h6>
                    <div className="btn slideDownText" onClick={() => navigate('/contactus')}>Know More</div>
                </div>
                <div id='tescomImgs'><img src={animatedImg} alt="animation" /></div>
                {/* <div id='tescomImgs'><img src={animatedImg} style={{ width: '50vw', transform: 'scale(1.3)', position: 'relative', right: document.body.offsetWidth > 786 ?'100px':'0px' }} alt="animation" /></div> */}
            </section>
            <section id='carousel'>
                <center><h1 id='carouselHeading' style={{ color: 'black', position: 'relative', top: '100px', fontWeight: 'bolder', margin: '-1vw 2.5% 0' }}>Tescom: Bringing You the Latest in Telecommunications Innovation - Photo Gallery</h1></center>
                <div id="carouselExampleAutoplaying" style={{ width: '95%', overflow: 'hidden', position: 'relative', top: '130px', zIndex: '-100', margin: 'auto' }} class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" >
                            <img src={carousel1} width="80%" className="d-block w-90" style={{ margin: 'auto', height: '80vh' }} alt="carousel1" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel2} width="80%" style={{ margin: 'auto', height: '80vh' }} className="d-block w-90" alt="carousel2" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel3} width="80%" style={{ margin: 'auto', height: '80vh' }} className="d-block w-90" alt="carousel3" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel4} width="80%" style={{ margin: 'auto', height: '80vh' }} className="d-block w-90" alt="carousel4" />
                        </div>
                        <div className="carousel-item">
                            <img src={carousel5} width="80%" style={{ margin: 'auto', height: '80vh' }} className="d-block w-90" alt="carousel5" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <OurServices />
            <OurPartner />
        </div>
    )
}

export default Home;