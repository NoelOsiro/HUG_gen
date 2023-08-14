import React from 'react';
import Carousel from './Components/Carousel/Carousel';
import VideoModal from './Components/Modal/VideoModal';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Facts from './Components/Facts/Facts';
import Cause from './Components/Causes/Cause';
import Donate from './Components/Donate/Donate';
import Event from './Components/Event/Event';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <Carousel />
      <VideoModal />
      <div style={{marginTop:'50%'}}>
      <About />
      </div>
      
      <Service />
      <Facts />
      <Cause />
      <Donate />
      <Event />
      <Contact />
      {/* <Blog /> */}
    </>

  );
}

export default App;
