import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Contacts from '../Components/Contact/Contact';
import Teams from '../Components/Team/Team';
import Testimonials from '../Components/Testimonials/Testiomony';
import Clients from '../Components/Clients/Clients';
import Portfolio from '../Components/Portfolio/Portfolio';
import Facts from '../Components/Facts/Facts';
import Skills from '../Components/Skills/Skills';
import CallAction from '../Components/CallAction/CallAction';
import Services from '../Components/Services/Service';
import About from '../Components/About/About';
import Features from '../Components/Featured/Features';

function App() {
  return (
    <>
      <main id="main">
        <Features/>
        <About/>
        <Services/>
        <CallAction/>
        <Skills/>
        <Facts/>
        <Portfolio/>
        <Clients/>
        <Testimonials/>
        <Teams/>
        <Contacts/>
      </main>
    </>
  );

}

export default App;
