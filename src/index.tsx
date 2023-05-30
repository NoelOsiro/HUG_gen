import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExecutiveDirector from './Pages/ExecutiveDirector';
import Administrator from './Pages/Administrator';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Header />
        <Hero />
        <Route path="/" element={<App />} />
        <Route path="/team/executive-director" element={<ExecutiveDirector />} />
        <Route path="/team/administrator" element={<Administrator />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
