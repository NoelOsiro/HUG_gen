import React from 'react'
import About from '../Components/About/About'
import Facts from '../Components/Facts/Facts'
import Team from '../Components/Team/Team'
import Testimonials from '../Components/Testimonials/Testimonials'

const AboutPage = () => {
  return (
    <>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>About</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                    </div>
                </div>
            </div>
        </div>
        <About/>
        <Facts/>
        <Team/>
        <Testimonials/>
    </>
  )
}

export default AboutPage