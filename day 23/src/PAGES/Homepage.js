// src/components/Home.js
import React from 'react';
import Footer from '../COMPONENTS/footer';
import Header from '../COMPONENTS/header';
import Tabs from '../COMPONENTS/tabs';
import '../Stylee/Home.css';

const Home = () => {
  return (
    <div className="home">
    <Header/>
    <Tabs/>
      <h2>Welcome to Our Home Design and Renovations Website</h2>
      <p>
        We specialize in turning your dream home into reality. Our team of
        experts is dedicated to providing top-notch services, from kitchen
        remodeling to bathroom renovations.
      </p>
      <h3>Our Services</h3>
      <ul>
        <li>Kitchen Remodeling</li>
        <li>Bathroom Renovations</li>
        <li>Living Room Makeovers</li>
        {/* Add more services as needed */}
      </ul>
      <h3>Why Choose Us?</h3>
      <p>
        With over a decade of experience and a track record of happy clients,
        we guarantee satisfaction. Contact us today for a consultation.
      </p>
    <Footer/>
    </div>
  );
};

export default Home;
