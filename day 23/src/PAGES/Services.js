import React from "react";
import Footer from "../COMPONENTS/footer";
import Header from "../COMPONENTS/header";
import Tabs from "../COMPONENTS/tabs";
import '../Stylee/Home.css'
function Services(){
    return(
        <div className='home'>
        <Header/>
        <Tabs/>
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
    )
}
export default Services;