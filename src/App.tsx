import React from 'react';
import Topbar from './Components/TopBar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import VideoModal from './Components/Modal/VideoModal';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Facts from './Components/Facts/Facts';
import Cause from './Components/Causes/Cause';
import Donate from './Components/Donate/Donate';
import Event from './Components/Event/Event';
import Team from './Components/Team/Team';
import Volun from './Components/Volunteer/Volun';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Carousel />
      <VideoModal />
      <About />
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
