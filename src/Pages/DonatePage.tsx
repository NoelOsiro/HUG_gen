import React from 'react'
import Donate from '../Components/Donate/Donate'
import Volun from '../Components/Volunteer/Volun'

const DonatePage = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Donate or Volunteer</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/donate">Donate</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "38%" }}>
                <Donate/>
            </div>
            <Volun/>
        </>
    )
}

export default DonatePage