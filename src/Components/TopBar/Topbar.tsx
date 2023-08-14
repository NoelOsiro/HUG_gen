import React from 'react'

const Topbar = () => {
  return (
    <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="text">
                                <i className="fa fa-phone-alt"></i>
                                <p>+254 714 956 717</p>
                            </div>
                            <div className="text">
                                <i className="fa fa-envelope"></i>
                                <p>humblegenerationke@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href="https://twitter.com/HumbleGen_ke"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/humblegenfoundation/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/humblegenfoundation/"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/humblegenfoundation/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Topbar