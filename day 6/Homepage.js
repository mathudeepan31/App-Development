import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/homepage.css"

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <span className="navbar-name"><i></i></span>
          </div>
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="video-background">
          <img src="img3.jpg" type="img" />
          Your browser does not support the video tag.
      </div>

      <div className="centered-text">
        <h1>Welcome to<span className="birthday-party-text"> <i>Home Renovation!</i>  </span></h1>
      </div>

    </div>
  );
}

export default HomePage;
