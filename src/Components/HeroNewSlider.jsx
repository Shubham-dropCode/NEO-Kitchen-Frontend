import React from 'react'

const HeroNewSlider = () => {
    return (
        <section className="home-section home-parallax home-fade" id="home">
            <div className="hero-slider">
                <ul className="slides">
                    <li
                        className="bg-dark-30 bg-dark"
                        style={{ backgroundImage: "url(../assets/images/Neo3D/SliderImage2.jpg)" }}
                    >
                        <div className="titan-caption">
                            <div className="caption-content">
                                <div className="font-alt mb-30 titan-title-size-1">
                                    Hello &amp; welcome
                                </div>
                                <div className="font-alt mb-40 titan-title-size-4">
                                    We are Titan
                                </div>
                                <a
                                    className="section-scroll btn btn-border-w btn-round"
                                    href="#about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </li>
                    <li
                        className="bg-dark-30 bg-dark"
                        style={{ backgroundImage: "url(../assets/images/Neo3D/SliderImage1.jpg)" }}
                    >
                        <div className="titan-caption">
                            <div className="caption-content">
                                <div className="font-alt mb-30 titan-title-size-2">
                                    Titan is creative multipurpose html template for
                                    <br />
                                    web developers who change the world
                                </div>
                                <a className="btn btn-border-w btn-round" href="about">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </li>
                    <li
                        className="bg-dark-30 bg-dark"
                        style={{ backgroundImage: "url(../assets/images/Neo3D/SliderImage3.jpg)" }}
                    >
                        <div className="titan-caption">
                            <div className="caption-content">
                                <div className="font-alt mb-30 titan-title-size-1">
                                    We build brands that build business
                                </div>
                                <div className="font-alt mb-40 titan-title-size-3">
                                    We are Amazing
                                </div>
                                <a
                                    className="section-scroll btn btn-border-w btn-round"
                                    href="#about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default HeroNewSlider