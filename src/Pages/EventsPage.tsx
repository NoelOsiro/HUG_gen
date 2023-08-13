import React from 'react'
import Event from '../Components/Event/Event'

const EventsPage = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Upcoming Events</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/events">Events</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "38%" }}>
                <Event />
            </div>
        </>
    )
}

export default EventsPage