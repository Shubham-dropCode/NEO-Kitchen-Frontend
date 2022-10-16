import React from 'react'
import bg from "../assets/images/Neo3D/neopro.jpg"

const HeroSlider = () => {
    const styling = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width: "100%",
        height: "100%"
    }
    const heroSecton = {
        height: '100vh'
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
                            <div className="font-alt mb-30 titan-title-size-1">
                                Hello &amp; welcome
                            </div>
                            <div className="font-alt mb-40 titan-title-size-4">Design Your World</div>
                            <a className="section-scroll btn btn-border-w btn-round" href="#about">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}

export default HeroSlider