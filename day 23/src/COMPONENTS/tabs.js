// src/components/Tabs.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../PAGES/Homepage';
import { setActiveTab } from '../REDUX/actions';
import './Tabs.css';
import { Link } from 'react-router-dom';

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  const handleTabClick = (tab) => {
    <Home/>
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="tabs">
      <Link to="/home">
          <button
            onClick={() => handleTabClick('Home')}
            className={activeTab === 'Home' ? 'active' : ''}
          >
            Home
          </button>
      </Link>
      <Link to="/service">
          <button
            onClick={() => handleTabClick('Services')}
            className={activeTab === 'Services' ? 'active' : ''}
          >
            Services
          </button>
      </Link>
      {/* Add more tabs as needed */}
    </div>
  );
};

export default Tabs;
