import React from 'react'

const Volun = () => {
  return (
    <div className="volunteer" data-parallax="scroll" data-image-src="assets/img/volunteer.jpg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="volunteer-form">
                            <form>
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" placeholder="Why you want to become a volunteer?" required></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Become a volunteer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="volunteer-content">
                            <div className="section-header">
                                <p>Become A Volunteer</p>
                                <h2>Let’s make a difference in the lives of others</h2>
                            </div>
                            <div className="volunteer-text">
                                <p>
                                Join us in our mission to make a meaningful difference in the lives of individuals within the underserved community. Together, we can bring positive change, alleviate hardships, and foster a brighter future for those in need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Volun