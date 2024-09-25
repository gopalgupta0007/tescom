import React from 'react'
import tescom from '../image/tescom.png'
import tescom2 from '../image/tescomImg2.png'
import OurPartner from './OurPartner'
import OurServices from './OurServices'
import Number from './Number'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    // <div id='aboutus-container' style={{ width: '100%', margin: '0 20%', padding: '100px 0 170px' }}>
    <div id='aboutus-container' style={{ width: '100%', margin: 'auto', padding: '100px 0 170px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }} id='tescomTxtStyle'>About Us</h1>
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', marginLeft: '10%' }}>
          <h1 style={{ fontSize: '3vw', whiteSpace: 'nowrap' }}>Tescom Business Solutions</h1>
          <p style={{ fontSize: '1.5vw' }}>INDIA'S FIRST SYSTEM INTEGRATOR OFFERING COMPLETE IT & TELECOMSOLUTIONS</p>
        </div>
        <div className='circle' style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={tescom} width="50%" alt="tescom" id='aboutCircleImg' />
        </div>
      </section><hr />
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'0 5%' }}>
          <div className='circle' style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={tescom2} width="100%" style={{ clipPath: 'polygon(0 1%, 80% 0%, 100% 100%, 0% 100%)' }} alt="tescom" />
          </div>
          <div style={{ textAlign: 'center', position: 'relative', marginLeft: '-100px' }}>
            <h1 style={{ fontSize: '2vw', position: 'relative', left: '-30px', whiteSpace: 'nowrap' }}>Introduction To TESCOM Business Solution</h1>
            <p style={{ fontSize: '1.5vw' }}>India's first system integrator offering complete IT & telecom solutions</p>
            <br />
            <ul style={{ textAlign: 'justify', fontSize: '1vw', marginLeft: '30px', whiteSpace: 'wrap' }}>
              <li>We have committed to delivering excellence, integrity, and customer-focused services.</li>
              <li style={{ marginLeft: '10px' }}>Our comprehensive offerings include managed IT services, DC & cloud solutions, cybersecurity , network connectivity, IoT solutions, marketing services, and UCC.</li>
              <li style={{ marginLeft: '30px' }}>At TESCOM, we prioritize quality and innovation, ensuring our clients stay ahead in an ever-evolving digital landscape. </li>
            </ul>
        </div>
      </section><hr />
      <section>
        <h1 style={{ textAlign: 'center' }}>Our Footprint in India</h1>
        <div style={{ width: '20%', margin: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', fontSize: '1.5vw', fontWeight: 'bolder' }}>
          <div style={{ textAlign: 'center', fontSize: '2em' }}><Number n={6764} /></div>
          <div style={{ borderTop: '5px solid black', textAlign:'center' }}>Installations Across India</div>
        </div>
        <br />
        <div id='table' style={{ width: '50%', margin: '10px auto', borderRadius: '5px', padding: '10px 20px', boxShadow: '0 0 10px #aaa' }}>
          <div id='tableHeading' style={{ fontSize: '1.25rem', display: 'flex', justifyContent: 'space-between', borderBottom: '5px solid #aaa', fontWeight: 'bolder' }}>
            <div>State Name</div>
            <div>Installations</div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Maharashtra</div>
            <div><Number n={1234} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Karnataka</div>
            <div><Number n={812} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Delhi</div>
            <div><Number n={750} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Gujarat</div>
            <div><Number n={602} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Tamil Nadu</div>
            <div><Number n={448} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Uttar Pradesh</div>
            <div><Number n={353} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Rajasthan</div>
            <div><Number n={322} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>West Bengal</div>
            <div><Number n={330} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Madhya Pradesh</div>
            <div><Number n={252} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Andhra Pradesh</div>
            <div><Number n={352} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Telangana</div>
            <div><Number n={219} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Kerala</div>
            <div><Number n={427} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #aaa', transition: 'all 0.1s' }}>
            <div>Punjab</div>
            <div><Number n={434} /></div>
          </div>
          <div className="stateInstallation" style={{ fontSize: '1rem', padding: '2px 5px', display: 'flex', justifyContent: 'space-between', transition: 'all 0.1s' }}>
            <div>Haryana</div>
            <div><Number n={229} /></div>
          </div>
        </div>
      </section><hr />
      <section></section>
      <section id='joinourTeam' style={{ fontSize: '2vw', marginBottom:'-100px' }} >
        <div style={{ width: '100%', margin: '0 40%' }}>
          <h1 className='tescomTxtStyle' style={{ fontWeight: 'bolder', textAlign: 'center', width: 'fit-content', fontSize: '1.25em' }}>Join Our Team</h1>
        </div>
        <h5 style={{ fontWeight: 'bolder', textAlign: 'center', whiteSpace: 'nowrap', fontSize: '.5em', margin: '20px 0' }}>Join our team and work on cutting-edge solutions in cybersecurity, cloud services, unified communications, IoT, mobility, and digital infrastructure. <br />Be part of a team that delivers managed hosting, network security, digital advertising, and smart city innovations.</h5>
        <button className="btn" onClick={() => navigate('/career')} style={{ margin: '0 45%', whiteSpace: 'nowrap', fontSize: '.5em' }}>Get In Touch</button>
      </section>
      <OurServices />
      <OurPartner />
    </div>
  )
}

export default About
