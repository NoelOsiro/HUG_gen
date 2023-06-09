import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Administrator from './Pages/Administrator';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>  
        <Route path="/" element={<App />} />
        <Route path="/team/executive-director" element={<Administrator />} />
        <Route path="/team/administrator" element={<Administrator />} />
        <Route path="/team/opsfinance" element={<Administrator />} />
        <Route path="/team/infosys" element={<Administrator />} />
        <Route path="/team/progscord" element={<Administrator />} />
        <Route path="/team/hr" element={<Administrator />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
