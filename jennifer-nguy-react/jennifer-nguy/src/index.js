import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import WebFont from 'webfontloader';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Styles/index.css';

WebFont.load({
  google: {
    families: ['Junge', 'Questrial']
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
