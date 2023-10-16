import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './REDUX/reducers'; // Replace with your actual reducer path
import './index.css'; // Import your global CSS file if you have one
import App from './App';
import Header from './COMPONENTS/header';
import Footer from './COMPONENTS/footer';
import Tabs from './COMPONENTS/tabs';

const store = createStore(rootReducer);
ReactDOM.render(
    <App />
  ,document.getElementById('root')
);
