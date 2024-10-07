import React from 'react'
import { useNavigate } from 'react-router-dom'
import Servicesddl from './Servicesddl';
import tescomLogo from '../image/tescomLogo2.png'
// const ddlservice=document.getElementById("service");
// const ddlabout=document.getElementById("about");
// // ddlservice?.addEventListener("animationstart", document.getElementById("ddl-service").style.animation='inAnimationDDL .3s 1')
// ddlservice.addEventListener("animationend", document.getElementById("ddl-service").style.animation='inAnimationDDL .5s 1 reverse')
// ddlabout.addEventListener("animationstart", document.getElementById("ddl-about").style.animation='inAnimationDDL .5s 1')

const Header = () => {
    const navigate = useNavigate()

    function slideDownAnimation(e) {
        if (e == "service" || e == "about") {
            document.getElementById("ddl-" + e).style.animation = 'inAnimationDDL .5s 1';
        }
    }

    function slideUpAnimation(e) {
        if (e == "service" || e == "about") {
            document.getElementById("ddl-" + e).style.animation = 'inAnimationDDL .5s 1 reverse';
        }
        // document.getElementById("ddl-service").style.animation = 'inAnimationDDL .5s 1 reverse';
    }
    return (
        <nav class="navbar navbar-expand-md bg-body-tertiary" style={{ width: '100vw', borderRadius: '0 0 .5vw .5vw', boxShadow: '0 3px 0 #aaa', position: 'fixed', zIndex: 100 }}>
            <div id='custom-nav' style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
                <a class="navbar-brand" href="http://localhost:3001/" style={{ margin: '0 30px' }}><img src={tescomLogo} style={{ width: '200px', height: '40px' }} alt="Tescom Business Solutinos" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" style={{ padding: '5px 0 0' }}>
                    <ul class="navbar-nav" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', marginLeft: document.body.offsetWidth >= 900 ? '45%' : '35%', width: 'fit-content' }} >
                        <li class="nav-item" onClick={() => navigate('/')}>
                            <a class="nav-link active" aria-current="page" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', fontWeight: window.location.pathname == "/" ? 'bolder' : 'bold', color: window.location.pathname == "/" ? 'black' : 'gray' }}>Home</a>
                        </li>
                        <li class="nav-item" onClick={() => navigate('/about')} id='about' >
                            <a class="nav-link" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', fontWeight: window.location.pathname == "/about" ? 'bolder' : 'bold', color: window.location.pathname == "/about" ? 'black' : 'gray' }}>About</a>
                        </li>
                        <li class="nav-item" id='service' onMouseOver={() => slideDownAnimation("service")} onMouseLeave={() => slideUpAnimation("service")}>
                            <a class="nav-link" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', fontWeight: window.location.pathname == "/service" ? 'bolder' : 'bold', color: window.location.pathname == "/service" ? 'black' : 'gray' }}>Services&nbsp;<i class="fa-solid fa-angle-down" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', alignItems: 'center' }}></i></a>
                            <div id='ddl-service' style={{ width: '60%', borderRadius: '10px', marginLeft: '10%', marginRight: '10%' }}><Servicesddl /></div>
                        </li>
                        <li class="nav-item" onClick={() => navigate('/contactus')}>
                            <a class="nav-link" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', fontWeight: window.location.pathname == "/contactus" ? 'bolder' : 'bold', color: window.location.pathname == "/contactus" ? 'black' : 'gray', whiteSpace:'nowrap' }}>Contact Us</a>
                        </li>
                        <li class="nav-item" onClick={() => navigate('/career')}>
                            <a class="nav-link" style={{ fontSize: document.body.offsetWidth >= 768 ? '1.5vw' : '2vw', fontWeight: window.location.pathname == "/career" ? 'bolder' : 'bold', color: window.location.pathname == "/career" ? 'black' : 'gray' }}>Career</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

