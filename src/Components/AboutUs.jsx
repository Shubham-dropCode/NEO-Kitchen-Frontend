import React from 'react'

const AboutUs = () => {
    const styling = {
        backgroundImage: `url("https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`
    } 
    return (
        <section className="module pt-4 " id="about">
            <div className='container'>

                <div className="row position-relative m-0">
                    <div
                        className="col-xs-12 col-md-6 side-image"
                        // data-background="https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?cs=srgb&dl=pexels-houzlook-com-3926542.jpg&fm=jpg"
                        style={styling}
                    />

                    <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="module-title font-alt align-left">About Us</h2>
                                <div className="module-subtitle font-serif align-left">
                                    A wonderful serenity has taken possession of my entire soul, like
                                    these sweet mornings of spring which I enjoy with my whole heart.
                                </div>
                                <p>
                                    The European languages are members of the same family. Their
                                    separate existence is a myth. For science, music, sport, etc, Europe
                                    uses the same vocabulary. The languages only differ in their
                                    grammar, their pronunciation and their most common words.
                                </p>
                                <p>
                                    The European languages are members of the same family. Their
                                    separate existence is a myth. For science, music, sport, etc, Europe
                                    uses the same vocabulary.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUs