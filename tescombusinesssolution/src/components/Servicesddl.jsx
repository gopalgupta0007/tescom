import React, { useEffect, useState } from 'react'
import illbroadband from '../image/serviceImg/network/illbroadband.png'
import sdwan from '../image/serviceImg/network/sdwan.png'
import wifiNap from '../image/serviceImg/network/wifiNap.jpg'
import managedservice from '../image/serviceImg/network/managedservice.png'
import simBasedSolutions from '../image/serviceImg/network/simBasedConnectivity.png'
import naas from '../image/serviceImg/network/naas.png'
import networkbooster from '../image/serviceImg/network/networkbooster.png'

import lift from '../image/serviceImg/iotNmobile/lift.png'
import banner from '../image/serviceImg/iotNmobile/banner.png'
import cctv from '../image/serviceImg/iotNmobile/cctv.png'
import dataCollection from '../image/serviceImg/iotNmobile/dataCollection.png'
import lidar from '../image/serviceImg/iotNmobile/lidar.png'
import smartservillence from '../image/serviceImg/iotNmobile/smartservillence.png'
import iotNsmartcity from '../image/serviceImg/iotNmobile/iotNsmartcity.png'
// import iotNsmartcity from '../image/serviceImg/iotNmobile/iotNsmartcity.jpg'

import virtualfirwall from "../image/serviceImg/cyber_security/virtualfirwall.png"
import ddos from "../image/serviceImg/cyber_security/ddos.png"
import endpoint from "../image/serviceImg/cyber_security/endpoint.png"
import webNmail from "../image/serviceImg/cyber_security/webNmail.png"
import multifactor from "../image/serviceImg/cyber_security/multifactor.png"
import threat from "../image/serviceImg/cyber_security/threat.png"
import darkweb from "../image/serviceImg/cyber_security/darkweb.png"
import vatp from "../image/serviceImg/cyber_security/vatp.png"

import colocation from "../image/serviceImg/cloudNdc/colocation.png"
import managedhosting from "../image/serviceImg/cloudNdc/managedhosting.png"
import rack from "../image/serviceImg/cloudNdc/rack.png"
import cloudstorage from "../image/serviceImg/cloudNdc/cloudstorage.png"
import migration from "../image/serviceImg/cloudNdc/migration.png"
import disaster from "../image/serviceImg/cloudNdc/disaster.png"
import cloudmanag from "../image/serviceImg/cloudNdc/cloudmanag.png"

import rcb from "../image/serviceImg/marketing_solutions/rcb.png"
import tollfree from "../image/serviceImg/marketing_solutions/tollfree.png"
import ivr from "../image/serviceImg/marketing_solutions/ivr.png"
import smsemail from "../image/serviceImg/marketing_solutions/sms-email.png"
import truecall from "../image/serviceImg/marketing_solutions/truecall.png"

import global from "../image/serviceImg/ucc/global.jpg"
import cloudtele from "../image/serviceImg/ucc/cloudtele.jpeg"
import audioc from "../image/serviceImg/ucc/audioc.jpg"
import ucaas from "../image/serviceImg/ucc/ucaas.jpg"
import hcc from "../image/serviceImg/ucc/hcc.jpg"
import itfs from "../image/serviceImg/ucc/itfs.jpg"

import { downloadPdf, getCurrentDate, obfuscateEmail } from './Methods/Method'
import axios from 'axios'
import { toast } from 'react-toastify'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'


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
  const [getdata, setGetdata] = useState([]);
  var dburl = process.env.REACT_APP_DB;
  // const [clickedBtn, setClickedBtn] = useState(false);
  // const
  // const [user, setUser] = useState(null);
  const [enterdOTP, setEnteredOTP] = useState(null);

  const [userdata, setUserData] = useState({
    phone: null,
    email: '',
    otp: null
  });

  useEffect(() => {
    if (atob(localStorage.getItem("auth")) == "Yes") {
      setAuth(false)
      console.log(userdata);
    } else {
      if (atob(localStorage.getItem("auth")) == "No") {
        setAuth(true)
      } else {
        setAuth(true)
      }
    }

    // axios.get('https://sheet.best/api/sheets/f7065a2b-fb8a-4b0d-9dc4-40a2878def3b')
    axios.get("/getalldata")
      .then(res => { setGetdata(res.data.users); console.log(res.data) })
      .catch(err => toast.error(err))
  }, [])


  function closeAuth() {
    setAuth(false)
    document.body.style.setProperty('overflow-y', 'visible', 'important');
  }

  const setData = (e, setUseState) => {
    setUseState((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  console.log(userdata);
  console.log(getdata);
  // send OTP on mail
  const sendOTP = (e) => {
    e.preventDefault();
    console.log(userdata.otp);
    var { phone, email, otp } = userdata;

    // const searchEmail = "vg870777@gmail.com";

    const emailExists = getdata.some(user => String(user.email) == String(email));
    const phoneExists = getdata.some(user => Number(user.phoneno) == Number(phone));

    if (!phone == "" && !email == "") {
      // if (true) {
      if (emailExists || phoneExists) {
        // if(false){
        toast.warning("these data already used, used other email id and phone number...")
      } else {
        try {
          // newOTP = Math.floor(Math.random() * 10000)
          newOTP=283
          let otpNumber=newOTP
          if (otpNumber.toString().length!=4) {
            newOTP.toString().padStart(4, '0')  
          }
          // setOTP(setMailData)
          console.log("local setted otp => ", newOTP);
          axios.post('/mail', { phone, email, otp: newOTP }) // Adjust URL to match your backend endpoint
            .then(response => {
              if (response.status === 200 || response.status === 'OK') {
                // document.getElementsByClassName('hide')[0].classList.remove(); 
                toast.success("OTP send successfully on " + obfuscateEmail(email) + " these mail.");
                localStorage.setItem("email", userdata.email)
                localStorage.setItem("phone", userdata.phone)
                // document.getElementsByClassName('hide')[0].classList.remove(); 
                document.getElementsByClassName('hide')[0].style.display = "inline-block"
                // Select all elements with the 'hide' class
                // const elements = document.querySelectorAll('.mail');

                // // Loop through each element and remove the 'hide' class
                // elements.forEach(element => {
                //   element.classList.remove('hide');
                // });
              }
              else toast.error("mail not sended")
            })
            .catch(error => console.log(error))
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.info("should be fill email and phone number both")
    }
  };

  //verify Mail OTP
  const verifyOTP = e => {
    e.preventDefault()
    if (Number(enterdOTP) === newOTP) {
      toast.success("Email address verified...");
      downloadPdf();  // download only those pdf which user click on that button
      setAuth(false)
      console.log("users data => ", userdata);
      const { email, phone, otp } = userdata;

      // store data in google sheets
      // axios.post('https://sheet.best/api/sheets/f7065a2b-fb8a-4b0d-9dc4-40a2878def3b', { email, phoneno: phone, date: getCurrentDate() })
      axios.post('/savedata', { email, phoneno: phone, date: getCurrentDate() })
        .then(res => console.log("data save in db successfull", res))
        .catch(err => console.error(err))
      // store data in data base
      localStorage.setItem("auth", btoa("Yes"))
    } else {
      toast.warning("Invalid...");
      setAuth(true)
      localStorage.setItem("auth", btoa("No"))
    }
  }

  // if email or phone number are verifyed then user can able to downlaod the pdf
  function onButtonClick(e) {
    if (atob(localStorage.getItem("auth")) == 'Yes') {
      setAuth(false)
      downloadPdf();
    } else if (atob(localStorage.getItem("auth")) == 'No') {
      setAuth(true)
      document.body.style.setProperty('overflow-y', 'hidden', 'important');
      // document.body.style.setProperty('background-color', 'rgba(170,170,170,0.5)', 'important');
    } else {
      toast.warning("something went wrong")
    }
  };

  return (
    <div style={{ display: 'flex', height: '68.5vh', justifyContent: 'center' }}>
      <div id="nav-options" >
        <div id="allservices" style={{ width: 'fit-content', height: '60%', padding: '5px', margin: 'auto' }}>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>NETWORK</h1>
            <div className='service-nav-container'>
              <div className='parentServices' ><h6>► ILL, Broadband</h6><div className='slideDownText'><h3 style={{ textAlign: 'center' }}>✦ ILL, Broadband</h3><img src={illbroadband} style={{ width: '30%', margin: '0 35%' }} alt="ill, broadband" /><div style={{ fontWeight: 500, textAlign: 'justify' }}><b>Internet Leased Line (ILL):</b> Internet Leased Line (ILL) services with managed options, including firewall and router support for enhanced security and performance. Our service is available on an OPEX model, providing flexible, cost-effective solutions for businesses.<br /><b>Broadband (BB):</b> Our Broadband (BB) service offers high-speed internet solutions tailored to businesses of all sizes, delivering fast and reliable connectivity for seamless operations. Whether you are a small business or a large enterprise, our broadband service provides the necessary bandwidth and performance to support your internet needs, including data transfer, video conferencing, cloud-based applications, and more. </div><button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '5%' }}>Download Pdf</button></div></div>
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
                <div className='slideDownText' style={{width:'200vw', height:'200vh', position:'absolute',left:'-500px', top:'-500px', zIndex:100, backgroundColor:'transparent'}}></div>
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
              <div className='parentServices' >
                <h6>► Internet in lift screens</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Internet in lift screens</h3>
                  <img src={lift} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Internet in lift screens" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Internet in lift screens means connecting elevator screens to the internet. This allows the screens to show live updates like news, weather, ads, and important alerts. The content can be updated in real-time and customized for the building or its users. These screens make elevator rides more informative and engaging.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Digital advertising screens and hoardings</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Digital advertising screens and hoardings</h3>
                  <img src={banner} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Digital advertising screens and hoardings" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Digital advertising screens and hoardings are large electronic displays used to show ads in public places. Unlike traditional posters, they use LED or LCD screens to show dynamic, changing content like videos and animations. These ads can be updated quickly and targeted to specific audiences, making them more flexible and engaging than printed signs.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Internet to electric vehicles and smart city devices.</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Internet to electric vehicles and smart city devices.</h3>
                  <img src={iotNsmartcity} style={{ width: '70%', height: '50%', margin: '0 15%' }} alt="Internet to electric vehicles and smart city devices." />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Connecting electric vehicles and smart city devices to the internet allows them to share data in real-time. For electric vehicles, this means features like GPS navigation, remote updates, charging station information, and traffic alerts. Smart city devices, like traffic lights and sensors, use the internet to improve things like traffic flow, energy use, and safety. Together, they create a more efficient, connected, and sustainable urban environment.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Lidar sensor</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Lidar sensor</h3>
                  <img src={lidar} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Lidar sensor" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    A LiDAR sensor uses lasers to measure distances by bouncing light off objects and measuring how long it takes to return. This creates a detailed 3D map of the surroundings. LiDAR is often used in self-driving cars, drones, and robots to detect obstacles, measure terrain, and navigate safely.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Smart Surveillance</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Smart Surveillance</h3>
                  <img src={smartservillence} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Smart Surveillance" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Smart surveillance uses advanced technology like cameras, sensors, and AI to monitor areas automatically. It can detect unusual activities, recognize faces, and send alerts in real-time. This makes it more efficient than traditional surveillance, improving security in places like homes, businesses, and public spaces.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Data collection Models</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Data collection Models</h3>
                  <img src={dataCollection} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Data collection Models" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Data collection models are methods used to gather information from various sources. These models define how, when, and what data is collected. Examples include surveys, sensors, or tracking user behavior online. The collected data is then analyzed to make decisions, improve products, or understand trends.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Centralized CCTV</h6>
                <div className='slideDownText'>
                  <h3 style={{ textAlign: 'center' }}>✦ Centralized CCTV</h3>
                  <img src={cctv} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Centralized CCTV" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Centralized CCTV refers to a system where all security cameras in different locations send their footage to one central hub. This allows security personnel to monitor multiple areas from one place, making it easier to manage and review footage for better safety and surveillance control.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>CYBER SECURITY</h1>
            <div className='service-nav-container'>
              <div className='parentServices' >
                <h6>► Virtual Firewall</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Virtual Firewall</h3>
                  <img src={virtualfirwall} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Virtual Firewall" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    A virtual firewall is a software-based security system that monitors and controls network traffic in virtual environments, like the cloud. It functions like a traditional firewall but is more flexible and scalable. Virtual firewalls protect against unauthorized access and malware by filtering traffic based on security rules and can be easily managed remotely.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► DDOS</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ DDOS(Distributed Denial-of-Service)</h3>
                  <img src={ddos} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="DDOS" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    DDoS, or Distributed Denial of Service, is a type of cyberattack where many computers work together to flood a website or server with traffic. This overwhelming amount of requests can cause the website to slow down or crash, making it unavailable to real users. DDoS attacks can disrupt online services and lead to significant downtime.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Endpoint Security</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Endpoint Security</h3>
                  <img src={endpoint} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Endpoint Security" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Endpoint security is a strategy to protect devices like computers, smartphones, and tablets that connect to a network. It involves using software and tools to prevent, detect, and respond to security threats on these devices. By securing endpoints, organizations can safeguard sensitive data and reduce the risk of cyberattacks.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Email & Web Security</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Email & Web Security</h3>
                  <img src={webNmail} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Email & Web Security" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Email and web security involves protecting users from threats like spam, phishing, and malware that come through email and browsing. Email security filters out harmful messages, while web security blocks unsafe websites. Together, they help safeguard personal and organizational information online.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Multifactor Authentication</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Multifactor Authentication</h3>
                  <img src={multifactor} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Multifactor Authentication" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Multifactor Authentication (MFA) is a security process that requires users to provide two or more verification methods to access an account. This usually combines something you know (like a password), something you have (like a smartphone or security token), and something you are (like a fingerprint). MFA adds an extra layer of security, making it harder for unauthorized users to gain access to accounts.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Threat Management</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Threat Management</h3>
                  <img src={threat} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Threat Management" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Threat management is the process of identifying, assessing, and addressing potential security threats to an organization. It involves recognizing vulnerabilities, implementing measures to reduce risks, and responding to incidents to protect data and assets. Effective threat management helps organizations stay safe from cyberattacks and other security risks.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Dark Web Monitoring</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ Dark Web Monitoring</h3>
                  <img src={darkweb} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Dark Web Monitoring" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Dark web monitoring is a security service that keeps an eye on the dark web for any stolen or compromised personal information, like passwords or credit card numbers. It helps organizations and individuals identify if their data is being sold or shared illegally, allowing them to take action to protect themselves from potential fraud or identity theft.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► VAPT</h6>
                <div className='slideDownText right-top'>
                  <h3 style={{ textAlign: 'center' }}>✦ VAPT</h3>
                  <img src={vatp} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="VAPT" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    <b>Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method that helps organizations identify and fix security weaknesses in their IT systems and software. VAPT combines two methods: Vulnerability Assessment (VA) and Penetration Testing (PT):</b>
                    <ul>
                      <li>
                        Vulnerability Assessment
                      </li><br />
                      Identifies all vulnerabilities in a network or application, but can't differentiate between exploitable and non-exploitable vulnerabilities.<br />
                      <li>
                        Penetration Testing
                      </li><br />
                      Identifies exploitable vulnerabilities from the first step and attempts to exploit them.
                    </ul>
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>CLOUD & DC</h1>
            <div className='service-nav-container'>
              <div className='parentServices' >
                <h6>► CO-LOCATION</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }} id='centerdiv'>
                  <h3 style={{ textAlign: 'center' }}>✦ CO-LOCATION</h3>
                  <img src={colocation} style={{ width: '70%', height: '50%', margin: '0 15%' }} alt="CO-LOCATION" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Securely house your IT infrastructure in our state of-the-art data centers, ensuring high availability and robust security. Co-location refers to the practice of placing multiple related or interdependent resources, systems, or functions in the same physical location or in close proximity to one another. This is commonly done for various operational, efficiency, or technical reasons.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► MANAGED HOSTING</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ MANAGED HOSTING</h3>
                  <img src={managedhosting} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="MANAGED HOSTING" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    "Leverage our managed hosting services for reliable, high-performance hosting with expert management and support" means using their hosting solution ensures dependable, fast website performance while professionals handle server maintenance, security, and updates, allowing you to focus on your business instead of technical management.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Rack Space</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ Rack Space</h3>
                  <img src={rack} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Rack Space" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    "Rack space in the cloud" refers to virtual server storage or computing resources offered by cloud providers. Instead of physical servers, businesses rent cloud-based space to store data or run applications, offering flexibility, scalability, and reduced need for on-premise hardware.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► CLOUD Storage</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ CLOUD Storage</h3>
                  <img src={cloudstorage} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="CLOUD Storage" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Cloud storage solutions offer scalable, secure, and flexible options for storing data online. They allow businesses to expand storage capacity as needed while ensuring data safety. With high efficiency, users can easily access, manage, and back up data from anywhere, supporting growth without costly infrastructure investments.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Lift Shift Migration and Management</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ Lift Shift Migration and Management</h3>
                  <img src={migration} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Lift Shift Migration and Management" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Lift-and-shift migration moves your applications and workloads to the cloud without changing their code. This method helps transition smoothly while minimizing disruptions and downtime, ensuring your systems continue running as they did before, but with the added benefits of the cloud's flexibility and scalability.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Disaster Recovery</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ Disaster Recovery</h3>
                  <img src={disaster} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Disaster Recovery" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Disaster recovery solutions protect your business by creating backups of your data and systems. In case of unexpected disruptions like power outages or cyberattacks, these solutions help restore your operations quickly, ensuring your business keeps running smoothly without major downtime or data loss.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Cloud Management</h6>
                <div className='slideDownText cloudndc'>
                  <h3 style={{ textAlign: 'center' }}>✦ Cloud Management</h3>
                  <img src={cloudmanag} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Cloud Management" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Cloud management services take care of the technical details of using AWS, Azure, or GCP, such as monitoring, maintenance, and optimization. This allows you to focus on your business goals while experts manage the complexities of your cloud infrastructure for better performance and reliability.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>Marketing Solutions</h1>
            <div className='service-nav-container'>
              <div className='parentServices' >
                <h6>► RCS</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ RCS(Rich Communication Services)</h3>
                  <img src={rcb} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="RCS" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    RCS (Rich Communication Services) lets you send interactive and media-rich messages to your customers, like images, videos, and buttons for quick responses. It provides a more engaging and personalized messaging experience compared to standard SMS, helping businesses connect with customers more effectively.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Toll Free Services</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Toll Free Services</h3>
                  <img src={tollfree} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Toll Free Services" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Toll-free services allow your customers to call you for free, improving customer service and making it easier for them to reach your business. This helps create a more convenient and positive experience, encouraging better communication and support.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Hosted IVR</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Hosted IVR</h3>
                  <img src={ivr} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Hosted IVR" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Hosted IVR (Interactive Voice Response) systems automate customer calls by allowing callers to interact with a menu using voice or keypad inputs. This helps handle inquiries more efficiently, reducing wait times and improving customer service without needing a live agent for every call.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► SMS and Email Solutions</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ SMS and Email Solutions</h3>
                  <img src={smsemail} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="SMS and Email Solutions" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Our SMS and email solutions help you send targeted messages to your audience quickly and reliably. This ensures effective communication, keeping your customers informed and engaged while allowing you to reach them through their preferred channels.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Truecaller Business</h6>
                <div className='slideDownText cloudndc' style={{ height: '300px', top: '-295px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Truecaller Business</h3>
                  <img src={truecall} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Truecaller Business" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Truecaller Business boosts your company's visibility and credibility by helping customers recognize and trust your calls and messages. It allows users to see your business name and details, making it easier for them to connect with you and enhancing overall customer confidence in your communications.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6vw', fontWeight: 'bolder' }} className='tescomTxtStyle'>UCC</h1>{/*UNIFIED COMMUNICATIONS AND COLLABORATION*/}
            <div className='service-nav-container'>
              <div className='parentServices' >
                <h6>► Global SIP Connect</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Global SIP Connect</h3>
                  <img src={global} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Global SIP Connect" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Global SIP connect services use SIP trunking to simplify your communication system. This reduces costs and boosts flexibility by allowing voice and data transmission over the internet instead of traditional phone lines. It's a more efficient and cost-effective way to manage business communication.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Cloud Telephonic</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Cloud Telephonic</h3>
                  <img src={cloudtele} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Cloud Telephonic" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Cloud telephonic services allow phone systems to operate over the internet instead of traditional phone lines. This lets businesses manage calls, voicemails, and other communication features from anywhere, using cloud-based software, providing more flexibility and scalability.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Ucaas (Microsoft) (Cisco)</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Ucaas (Microsoft) (Cisco)</h3>
                  <img src={audioc} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Ucaas (Microsoft) (Cisco)" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    UCaaS (Unified Communications as a Service) from Microsoft and Cisco offers cloud-based communication tools. It provides advanced features for messaging, calling, and video meetings, allowing teams to collaborate easily and work together seamlessly from anywhere.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Hosted Contact Centre</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Hosted Contact Centre</h3>
                  <img src={ucaas} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Hosted Contact Centre" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    A hosted contact center is a cloud-based solution for managing customer interactions. It offers advanced features like call routing and customer support tools, allowing businesses to handle customer inquiries efficiently while easily scaling as needed.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► Audio Conferencing</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ Audio Conferencing</h3>
                  <img src={hcc} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="Audio Conferencing" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    Audio conferencing solutions improve team communication by offering clear and reliable voice calls for meetings and collaborations. This helps teams stay connected and work together effectively, no matter where they are.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
              <div className='parentServices' >
                <h6>► ITFS & LNS</h6>
                <div className='slideDownText right-bottom' style={{ height: '350px' }}>
                  <h3 style={{ textAlign: 'center' }}>✦ ITFS & LNS</h3>
                  <img src={itfs} style={{ width: '70%', height: '60%', margin: '0 15%' }} alt="ITFS & LNS" />
                  <div style={{ fontWeight: 500, textAlign: 'justify' }}>
                    ITFS (International Toll-Free Service) allows customers to call a business for free from different countries. LNS (Local Number Service) provides local phone numbers in various regions, making it easier for businesses to offer local customer support globally.
                  </div>
                  <button className='btn' onClick={onButtonClick} style={{ fontWeight: 700, position: 'relative', left: '80%', top: '0%' }}>Download Pdf</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {auth && <div className='popUp' id='authContainer' onMouseEnter={() => document.body.style.overflowY = "hidden"} onMouseLeave={() => document.body.style.overflowY = "visible"}>
        <span className="close" onClick={closeAuth}>&times;</span>
        <div id='auth'>
          <form>
            <center style={{ margin: '5% auto' }}>
              <h1>Verifications</h1>
              <input placeholder='Email' className='input' style={{ margin: '5px', borderRadius: '10px', outline: 'none', border: 'none' }} name='email' value={userdata.email} onChange={(e) => setData(e, setUserData)} type="email" id='email' autoFocus={true} />
              <input placeholder='Phone Number' className='input' style={{ margin: '5px', borderRadius: '10px', outline: 'none', border: 'none' }} value={userdata.phone} type="number" name='phone' id='phoneno' onChange={(e) => setData(e, setUserData)} /><br />
              <button className='verifybtn' onClick={(e) => sendOTP(e)} style={{ margin: '5px', borderRadius: '10px', outline: 'none', border: 'none' }}>Send</button><br />
              <div className='hide'>
                <hr />
                <input placeholder="Enter OTP" className='input mail' id='otp-inp' onChange={(e) => setEnteredOTP(e.target.value)} value={enterdOTP} name='otp' type="number" />
                <button className='verifybtn mail' id='btnVerifyEmail' onClick={e => verifyOTP(e)}>verify</button>
              </div>
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