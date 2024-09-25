import React, { useEffect, useState } from 'react'
import illbroadband from '../image/serviceImg/illbroadband.png'
import sdwan from '../image/serviceImg/sdwan.png'
import wifiNap from '../image/serviceImg/wifiNap.jpg'
import managedservice from '../image/serviceImg/managedservice.png'
import simBasedSolutions from '../image/serviceImg/simBasedConnectivity.png'
import naas from '../image/serviceImg/naas.png'
import networkbooster from '../image/serviceImg/networkbooster.png'
import { downloadPdf, obfuscateEmail } from './Methods/Method'
import axios from 'axios'
// import otpGenerator from 'otp-generator'
// const otpGenerator = require('otp-generator')
// import { json } from 'react-router-dom'
// import tescomLogo from '../image/tescomLogo.png'
// import { useNavigate } from 'react-router-dom'
// console.log();
var newOTP;

const Servicesddl = () => {
  // const [auth, setAuth] = useState((atob(localStorage.getItem("auth")) == "Yes") ? false : true);
  const [auth, setAuth] = useState(false);

  useEffect(()=>{
    if (atob(localStorage.getItem("auth"))=="Yes") {
      setAuth(false)
    } else {
      if (atob(localStorage.getItem("auth"))=="No") {
        setAuth(true)
      } else {
        setAuth(true)
      }
    }
  },[])

  const [enterdOTP, setEnteredOTP] = useState({
    enterdMailOTP: 0,
    enterdPhonenoOTP: 0
  });
  const [mailData, setMailData] = useState({
    email: '',
    otp: 0
  });
  const [phonenoData, setPhonenoData] = useState({
    phone: 0,
    otp: 0
  });
  // const navigate = useNavigate()
  function closeAuth() {
    setAuth(false)
  }

  function setOTP(setMailData) {
    const x = setMailData
    x((prevData) => ({
      ...prevData,
      otp: Math.floor(Math.random() * 10000)
    }));
  }



  const setData = (e, setUseState) => {
    setUseState((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  // send OTP on Phone Number
  const sendOTPonPhoneno = (e) => {
    console.log("send otp functions started");
    console.log(phonenoData.phone);
    e.preventDefault();
    try {
      var { phone, otp } = phonenoData;
      newOTP = Math.floor(Math.random() * 10000)
      axios.post('/phoneno', { phone, otp: newOTP }) // Adjust URL to match your backend endpoint
        .then(res => {
          console.log(res.data); console.log("otp sended")
          // document.getElementsByClassName('hide')[0].style.display = "inline-block"; 
          // document.getElementsByClassName('hide')[1].style.display = "inline-block" 

          // Select all elements with the 'hide' class
          const elements = document.querySelectorAll('.phone');

          // Loop through each element and remove the 'hide' class
          elements.forEach(element => {
            element.classList.remove('hide');
          });
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err);
    }
  };

  //verify Phoneno OTP
  const verifyPhonenoOTP = (e) => {

  }

  // send OTP on mail
  const sendOTPonEmail = (e) => {
    e.preventDefault();
    console.log(mailData.otp);
    try {
      var { email, otp } = mailData;
      newOTP = Math.floor(Math.random() * 10000)
      // setOTP(setMailData)
      console.log("local setted otp => ", newOTP);
      axios.post('/mail', { email, otp: newOTP }) // Adjust URL to match your backend endpoint
        .then(response => {
          if (response.status === 200 || response.status === 'OK') {
            alert("OTP send successfully on " + obfuscateEmail(email) + " these mail.");

            // document.getElementsByClassName('hide')[0].style.display = "inline-block"; 
            // document.getElementsByClassName('hide')[1].style.display = "inline-block" 

            // Select all elements with the 'hide' class
            const elements = document.querySelectorAll('.mail');

            // Loop through each element and remove the 'hide' class
            elements.forEach(element => {
              element.classList.remove('hide');
            });
          }
          else alert("mail not sended")
        })
        .catch(error => console.log(error))
    } catch (err) {
      console.log(err);
    }
  };

  //verify Mail OTP
  const verifyEmailOTP = e => {
    e.preventDefault()
    console.log(`checking.....${enterdOTP.enterdMailOTP} == ${newOTP}`);
    console.log(`checking.....${typeof (enterdOTP.enterdMailOTP)} == ${typeof (newOTP)}`);
    if (Number(enterdOTP.enterdMailOTP) === newOTP) {
      alert("Email address verified...");
      downloadPdf();
      setAuth(false)
      localStorage.setItem("auth", btoa("Yes"))
    } else {
      alert("Invalid...");
      setAuth(true)
      localStorage.setItem("auth", btoa("No"))
    }
  }

  // if email or phone number are verifyed then user can able to downlaod the pdf
  function onButtonClick(e) {
    if (atob(localStorage.getItem("auth"))=='Yes') {
      setAuth(false)
      // localStorage.setItem("auth", btoa("No"))
      // const authElement = document.getElementById("authenticationPopUp");
      // document.body.style.setProperty('filter', 'blur(10px)', 'important');
      // authElement.style.setProperty('filter', 'blur(0px)', 'important');
      downloadPdf();
      // document.body.style.setProperty('filter', 'blur(10px)', 'important');
    } else if (atob(localStorage.getItem("auth")) == 'No') {
      setAuth(true)
      document.body.style.setProperty('overflow-y', 'hidden', 'important');
      // document.body.style.setProperty('background-color', 'rgba(170,170,170,0.5)', 'important');
    } else {
      alert("something went wrong")
    }
  };

  return (
    <div style={{ display: 'flex', height: '68.5vh', justifyContent: 'center' }}>
      {/* <div id="nav-info" style={{ flexGrow: 1, width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px' }}>
        <img src={tescomLogo} style={{ width: '50%', marginLeft: '25%',dImage:'linear-gradient(90deg,rgb(0, 191, 255) 50%, rgb(255, 145, 0) 50%)', backgroundClip:'text', color:'transparent'}}>INDIA'S FIRST SYSTEM INTEGRATOR OFFERING COMPLETE IT & TELECOM SOLUTIONS</h5> 
        <h5 style={{ fontWeight: 'bolder', textAlign: 'center', fontSize: '1.3vw', padding: '20px' }}>INDIA'S FIRST SYSTEM INTEGRATOR OFFERING COMPLETE IT & TELECOM SOLUTIONS</h5>
        <h6 style={{ fontWeight: 'bolder', textAlign: 'center', fontSi marginRight: '25%' }} alt="tescomLogo" />
        <h5 style={{fontWeight:'bolder', textAlign:'center', backgrounze: '1vw', padding: '20px', marginTop: '-50px' }}>Tescom is now emerging as a major player in providing Complete business solutions in field of, TELECOMUNICATIONS INFORMATION TECHNOLOGY to major companie & Telcos in and around…</h6>
        <button className='btn' onClick={() => navigate('/contactus')}>Know more</button>
      </div> */}
      {/* <div id="nav-options" style={{ flexGrow: 2, width: '66.6%', padding: '10px', backgroundImage: 'linear-gradient(135deg, rgb(0, 191, 255), rgb(255,255,255), rgb(255, 145, 0)' }}> */}
      <div id="nav-options" >
        <div id="allservices" style={{ width: 'fit-content', height: '60%', padding: '5px', margin: 'auto' }}>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>NETWORK</h1>
            <div className='service-nav-container'>
              <div className='parentServices'><h6>► ILL, Broadband</h6><div className='slideDownText'><h3 style={{ textAlign: 'center' }}>✦ ILL, Broadband</h3><img src={illbroadband} style={{ width: '30%', margin: '0 35%' }} alt="ill, broadband" /><div style={{ fontWeight: 500, textAlign: 'justify' }}><b>Internet Leased Line (ILL):</b> Internet Leased Line (ILL) services with managed options, including firewall and router support for enhanced security and performance. Our service is available on an OPEX model, providing flexible, cost-effective solutions for businesses.<br /><b>Broadband (BB):</b> Our Broadband (BB) service offers high-speed internet solutions tailored to businesses of all sizes, delivering fast and reliable connectivity for seamless operations. Whether you are a small business or a large enterprise, our broadband service provides the necessary bandwidth and performance to support your internet needs, including data transfer, video conferencing, cloud-based applications, and more. </div><button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '5%' }}>Download Pdf</button></div></div>
              <div className='parentServices'><h6>► SDWAN</h6><div className='slideDownText'><h3 style={{ textAlign: 'center' }}>✦ SDWAN</h3><img src={sdwan} style={{ width: '30%', height: '30%', margin: '0 35%' }} alt="ill, broadband" /><div style={{ fontWeight: 500, textAlign: 'justify' }}>We Provide Software-Defined Wide Area Network (SDWAN) technology that uses software to manage wide-area networks, separating the networking hardware from the control mechanisms. The SDWAN overlay is the virtual network layer that is built over existing physical network infrastructure.<br /><b>Setup and Configuration :-</b> The process involves configuring SDWAN controllers, edge devices, and gateways to create a secure, scalable, and high-performing network. <br /><b>Traffic Management:-</b>  SDWAN overlays optimize traffic routing by dynamically selecting the best available path for data based on current network conditions, which enhances performance, reduces latency, and ensures high availability. Security:- The overlay includes integrated security features like encryption, firewalls, and secure VPNs to protect data as it traverses the network.</div><button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '5%' }}>Download Pdf</button></div></div>
              <div className='parentServices'>
                <h6>► SIM based solutions</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ SIM based solutions</h3>
                  <img src={simBasedSolutions} style={{ width: '80%', height: '60%', margin: '0 10%' }} alt="SIM based solutions" />
                  <div style={{ fontWeight: 500, textAlign: 'justify', fontSize: '1.3em' }}>
                    Innovative SIM-based connectivity solutions for
                    remote and mobile applications, ensuring continuous network access.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '5%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Managed Services</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Managed Services</h3>
                  <img src={managedservice} style={{ width: '50%', height: '40%', margin: '0 25%' }} alt="Managed Services" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    comprehensive network management services that encompass continuous monitoring, proactive maintenance, and dedicated support to ensure your network functions seamlessly. Our team of experts actively monitors your network for potential issues, addressing them before they impact your operations. We provide routine maintenance to optimize performance, along with 24/7 support to resolve any technical challenges swiftly. This holistic approach enhances network reliability, security, and efficiency, enabling your business to focus on its core activities without worrying about connectivity or performance disruptions.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► NAAS, MPLS & NDE</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ NAAS, MPLS & NDE</h3>
                  <img src={naas} style={{ width: '70%', height: '60%', margin: '0 20%' }} alt="NAAS, MPLS & NDE" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    MPLS, Network as a Service (NaaS), and Network Design and Engineering (NDE) solutions to ensure secure and reliable point-to-point (P2P) connectivity. These services deliver robust, scalable, and efficient network infrastructure, enabling seamless communication and data transfer between business locations.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Wifi Router & Access Point</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Wifi Router & Access Point</h3>
                  <img src={wifiNap} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Wifi Router & Access Point" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    A WiFi router is a device that connects to your internet service and distributes the connection wirelessly to various devices within a network. An Access Point (AP), on the other hand, extends the WiFi coverage of an existing network by creating additional wireless access areas, ensuring strong connectivity in large or complex spaces. Together, they provide seamless internet access throughout homes or business environments.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Network Boosters</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Network Boosters</h3>
                  <img src={networkbooster} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Network Boosters" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Network boosters, also known as WiFi extenders or signal boosters, are devices designed to enhance and expand the coverage of an existing wireless network. They work by receiving the signal from your router and retransmitting it, improving connectivity in areas where the signal is weak or inconsistent. This helps eliminate dead zones and ensures more reliable internet access throughout your space.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>IOT AND MOBILITY</h1>
            <div className='service-nav-container'>
              <div>► Internet in lift screens</div>
              <div>► Digital advertising screens and hoardings</div>
              <div>► Internet to electric vehicles and smart city devices.</div>
              <div>► Lidar sensor</div>
              <div>► Smart Surveillance</div>
              <div>► Data collection Models</div>
              <div>► Centralized CCTV</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>CYBER SECURITY</h1>
            <div className='service-nav-container'>
              <div>► Virtual Firewall</div>
              <div>► DDOS</div>
              <div>► Endpoint Security</div>
              <div>► Email & Web Security</div>
              <div>► Multifactor Authentication</div>
              <div>► Threat Management</div>
              <div>► Dark Web Monitoring</div>
              <div>► VAPT</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>CLOUD & DC</h1>
            <div className='service-nav-container'>
              <div>► CO-LOCATION</div>
              <div>► MANAGED HOSTING</div>
              <div>► Rack Space</div>
              <div>► CLOUD Storage</div>
              <div>► Lift Shift Migration and Management</div>
              <div>► Disaster Recovery</div>
              <div>► Cloud Management</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>Marketing Solutions</h1>
            <div className='service-nav-container'>
              <div>► RCS</div>
              <div>► Toll Free Services</div>
              <div>► Hosted IVR</div>
              <div>► Hosted OBD Service</div>
              <div>► SMS and Email Solutions</div>
              <div>► Truecaller Business</div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>UCC</h1>{/*UNIFIED COMMUNICATIONS AND COLLABORATION*/}
            <div className='service-nav-container'>
              <div>► PRI, SIP Trunk</div>
              <div>► Cloud Telephonic</div>
              <div>► Ucaas (Microsoft) (Cisco)</div>
              <div>► Hosted Contact Centre</div>
              <div>► Audio Conferencing</div>
              <div>► ITFS & LNS</div>
            </div>
          </div>
        </div>
      </div>
      {auth && <div className='popUp' id='authContainer'>
        <span className="close" onClick={closeAuth}>&times;</span>
        <div id='auth'>
          <form>
            <center style={{ margin: '5% auto' }}>
              <h1>Email</h1>
              <input placeholder='Email' className='input' name='email' onChange={(e) => setData(e, setMailData)} type="email" id='email' />
              <button className='verifybtn' onClick={(e) => sendOTPonEmail(e)}>Send</button><br />
              <input placeholder="Enter Code" className='input hide mail' id='otp-inp' onChange={(e) => setData(e, setEnteredOTP)} name='enterdMailOTP' type="number" />
              <button className='verifybtn hide mail' id='btnVerifyEmail' onClick={e => verifyEmailOTP(e)}>verify</button><br /><br />

              <h1>Phone Number</h1>
              <input placeholder='Phone Number' className='input' type="number" name='phone' id='phoneno' onChange={(e) => setData(e, setPhonenoData)} />
              <button className='verifybtn' onClick={e => sendOTPonPhoneno(e)}>Send</button><br />
              <input placeholder="Enter Code" className='input hide phone' type="number" name='enterdPhonenoOTP' onChange={(e) => setData(e, setEnteredOTP)} />
              <button className='verifybtn hide phone' id='btnVerifyPhoneno'>verify</button><br />
            </center>
          </form>
        </div>
      </div>}
    </div>
  )
}

export default Servicesddl;





// Username vg870779@gmail.com
// Password 2B1D614FCFD3D070B7393F154656711CF3D3
// Server smtp.elasticemail.com
// Port 2525