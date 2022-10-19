import React from 'react'

const BreadCrumb = ({ heading }) => {
    const styling = {
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/06/01/02/18/black-2362261_960_720.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    // width: "100%",
    // maxWidth: '250',
    // height: "100vh"
}
    return (
        <section
            className="module bg-dark-30 about-page-header"
            // data-background="assets/images/about_bg.jpg" 
            style={styling}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1 className="module-title font-alt mb-0">{heading}</h1>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BreadCrumb