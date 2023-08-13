import React from 'react'
import Contact from '../Components/Contact/Contact'

const ContactPage = () => {
  return (
    <>
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="col-12">
                        <a href="/">Home</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:"40%"}}>
            <Contact/>
        </div>
        
    </>
  )
}

export default ContactPage