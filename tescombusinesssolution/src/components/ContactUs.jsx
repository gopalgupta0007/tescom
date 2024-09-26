import React, { useEffect, useState } from 'react';
import whatsappLogo from '../image/whatsappimg.png'
import axios from 'axios';

const ContactUs = () => {

  const [contactUs, setContactUs] = useState({
    fname: '',
    lname: '',
    email: !localStorage.getItem("email") ? '' : localStorage.getItem("email"),
    phone: !localStorage.getItem("phone") ? '' : localStorage.getItem("phone"),
    msg: '',
  });

  const setContactUsData = (e, setUseState) => {
    setUseState((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const sendMsg = (e) => {
    e.preventDefault();
    try {
      let {fname, lname, email, phone, msg} = contactUs;
      axios.post('/contact', {fname, lname, email, phone, msg}) // Adjust URL to match your backend endpoint
        .then(response => {
          if (response.status === 200 || response.status === 'OK') {
            alert('msg send successfull')

            // clear enter data
            setContactUs(prevData=>({...prevData, msg:''}))
          } else alert("msg not sended")
        })
        .catch(error => console.log(error))
    } catch (err) {
      console.log(err);
    }
  }

  console.log(contactUs);

  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        zoom: 14,
        center: new window.google.maps.LatLng(19.1867, 72.9741),
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      };
      const map = new window.google.maps.Map(document.getElementById('gmap_canvas'), mapOptions);
      const marker = new window.google.maps.Marker({
        map: map,
        position: new window.google.maps.LatLng(19.1867, 72.9741)
      });
      const infowindow = new window.google.maps.InfoWindow({
        content: '<strong>My Location</strong><br>Thane, Mumbai, Maharastra<br>'
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
      infowindow.open(map, marker);
    };

    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.body.appendChild(script);
    };

    if (!window.google) {
      loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp');
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="container" style={{ paddingTop: '100px' }} >
      <div className="innerwrap">
        <section className="section1 clearfix">
          <div className="textcenter">
            {/* <span className="shtext">Contact Us</span> */}
            {/* <span className="seperator"></span> */}
            <h1 id='tescomTxtStyle' style={{ fontWeight: 'bolder' }}>Contact Us</h1>
          </div>
        </section>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
            <div className="sec2map" style={{ overflow: 'hidden', height: '550px', width: '100%' }}>
              <div id="gmap_canvas" style={{ height: '100%', width: '100%' }}></div>
            </div>
          </div>
          <div className="col2 column2 last">
            <div className="sec2innercont">
              <div className="sec2addr">
                <p><b>First Branch :-</b>Oak Bag, Kalyan Station Rd, Bhanu Sagar Talkies, Bhanunagar Kalyan(West), Kalyan West, Kalyan, Maharashtra 421301</p>
                <p><b>Second Branch :-</b>106 & 107, First Floor, ABHIJEET SOCIETY, Dada Patil Wadi, Naupada, Thane West, Thane, Maharashtra 400602</p>
                <p><b>Thired Branch :-</b>Sion East, Antop Hill, Mumbai, Maharashtra 400037</p>
                <p><span className="collig">Phone :</span> +91 9029019067</p>
                <p><span className="collig">Email :</span> support@tescom.in</p>
              </div>
            </div>
            <div className="sec2contactform">
              <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="clearfix">
                  <input className="col2 first" type="text" name='fname' style={{ fontWeight: 'bolder' }} value={contactUs.fname} onChange={e => setContactUsData(e, setContactUs)} placeholder="FirstName" />
                  <input className="col2 last" type="text" name='lname' style={{ fontWeight: 'bolder' }} value={contactUs.lname} onChange={e => setContactUsData(e, setContactUs)} placeholder="LastName" />
                </div>
                <div className="clearfix">
                  <input className="col2 first" type="email" name='email' value={contactUs.email} onChange={e => setContactUsData(e, setContactUs)} style={{ fontWeight: 'bolder' }} placeholder="Email" />
                  <input className="col2 last" type="text" name='phone' value={contactUs.phone} onChange={e => setContactUsData(e, setContactUs)} style={{ fontWeight: 'bolder' }} placeholder="Contact Number" />
                </div>
                <div className="clearfix">
                  <textarea name="msg" cols="30" rows="7" style={{ fontWeight: 'bolder' }} value={contactUs.msg} onChange={e => setContactUsData(e, setContactUs)} placeholder="Your message here..."></textarea>
                </div>
                <div className="clearfix" style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="submit" style={{ borderRadius: '10px' }} value="Send" onClick={e=>sendMsg(e)} />
                  <button id="submitbtn" onClick={()=>window.location.href = "https://api.whatsapp.com/send?phone=917357482947"} target="_blank" style={{ height: '60px', paddingTop: '7px', margin: '10px', borderRadius: '10px', padding: '5px', fontWeight: 500, outline: 'none', border: 'none' }}>Contact on Whatsapp<img src={whatsappLogo} alt="whatsappLogo" style={{ width: '50px' }} /></button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
