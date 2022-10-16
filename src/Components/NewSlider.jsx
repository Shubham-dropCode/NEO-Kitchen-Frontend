import React from 'react'

const NewSlider = () => {
    return (
        <div className="home-slider owl-carousel js-fullheight">
            <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(images/slider-1.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <div className="col-md-12 ftco-animate">
                            <div className="text w-100 text-center">
                                <h2>Best Place to Travel</h2>
                                <h1 className="mb-3">Norway</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(images/slider-2.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <div className="col-md-12 ftco-animate">
                            <div className="text w-100 text-center">
                                <h2>Best Place to Travel</h2>
                                <h1 className="mb-3">Japan</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(images/slider-2.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <div className="col-md-12 ftco-animate">
                            <div className="text w-100 text-center">
                                <h2>Best Place to Travel</h2>
                                <h1 className="mb-3">Singapore</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewSlider