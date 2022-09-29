import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className="blur" style={{background: "var(--purpleblur)",position: "absolute",
    right: "28px",borderRadius:"100%"}}>hbjbj</div>
        <div className="blur" style={{background: "var(--blueblur)",position: "absolute",
    right: "1000px",
    top: "500px",borderRadius:"100%"}}>hbjbj</div>
    <App />
  </React.StrictMode>
);

reportWebVitals();
