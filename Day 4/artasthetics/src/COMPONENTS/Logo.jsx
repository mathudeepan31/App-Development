// ImageComponent.js

import React from 'react';
import Logoimage from "../logo.png";
import '../COMPONENTS/logo.css'
// Define your ImageComponent as a functional component
function Logo() {
  return <img src={Logoimage} alt="logo" />;
}

export default Logo;
