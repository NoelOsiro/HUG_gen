import React from 'react'
import Service from '../Components/Services/Service'
import Cause from '../Components/Causes/Cause'

const CausesPage = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Popular Causes</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/causes">Causes</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "38%" }}>
                <Service />
            </div>

            <Cause />
        </>
    )
}

export default CausesPage