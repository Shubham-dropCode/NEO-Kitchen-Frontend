import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../assets/images/Neo3D/newhello.jpg"

const HeroSlider = () => {
    const styling = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width: "100%",
        maxWidth: '250',
        height: "100vh"
    }
    const heroSecton = {
        height: 'auto'
    }
    // const img = require("/assets/images/Neo3D/Neobackground.jpg")
    return (
        <>
            <section
                className="home-section home-parallax home-fade home-full-height bg-dark-30"
                id="home"
                style={heroSecton}
            >
                <div style={styling} className="h-100">

                    <div className="titan-caption">
                        <div className="caption-content">
                            <div className="container font-alt mb-30 titan-title-size-1">
                               Design Your World
                            </div>
                            <div className="font-alt mb-40 titan-title-size-4">Premier kitchen appliances.</div>
                            <Link to="/About" className="section-scroll btn btn-border-w btn-round">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}

export default HeroSlider