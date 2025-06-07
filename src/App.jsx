import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Services from './components/Services';
import Clients from './components/Clients';
import { Element } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/autoplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="clients">
        <Clients />
      </Element>
      <Element name="footer">
        <Footer/>
      </Element>
      
    </div>
  );
}

export default App;
