import React from 'react'

const HomeVideo = () => {
    const flexStyle = {
        display : 'flex',
        justifyContent: "center"
    }
    const styling = {
        paddingTop: "5rem",
        gap: "20px",
        paddingBottom: "5rem"
    }
    return (
        <div className='bg-dark' style={styling}>
            <div className='container'>
                <h2 className='module-title font-alt'>Our state of art Highly Automated Production Facility, A Glimpse for you...</h2>
                <div className="row" style={flexStyle}>
                    <div className="col-sm-8" >
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/y4ui9--p3d8" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                        </div>
                    </div>
                    {/* <div className="col-sm-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ywu_F6Xr03A" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomeVideo