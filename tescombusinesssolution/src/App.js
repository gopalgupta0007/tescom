import { Route, Routes } from 'react-router-dom'// import logo from './logo.svg';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import Header from './components/Header';
import Test from './components/Test';
import Footer from './components/Footer';
// import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>      
      <Footer />
    </>
  );
}

export default App;
