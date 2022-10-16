import React from 'react'

const BreadCrumb = ({ heading }) => {
    return (
        <section
            className="module bg-dark-30 about-page-header"
            data-background="assets/images/about_bg.jpg"
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