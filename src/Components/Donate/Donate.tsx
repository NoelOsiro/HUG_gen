import React from 'react'

const Donate = () => {
  return (
    <div className="donate" data-parallax="scroll" data-image-src="assets/img/donate.jpg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="donate-content">
                            <div className="section-header">
                                <p>Donate Now</p>
                                <h2>Let's donate to needy people for better lives</h2>
                            </div>
                            <div className="donate-text">
                                <p>
                                Let's join hands and make a difference in the lives of those less fortunate. By contributing to our cause, you can bring positive change to underserved communities. Your donations support vital initiatives, such as providing nutritious meals, quality education, accessible healthcare, and more. Together, we can create better lives and build a brighter future for all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="donate-form">
                            <form>
                                <div className="control-group">
                                    <input type="text" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-custom">
                                        <input type="radio" name="options" checked/> Kes 200
                                    </label>
                                    <label className="btn btn-custom">
                                        <input type="radio" name="options"/> Kes 500
                                    </label>
                                    <label className="btn btn-custom">
                                        <input type="radio" name="options"/> Kes 1000
                                    </label>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit">Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Donate