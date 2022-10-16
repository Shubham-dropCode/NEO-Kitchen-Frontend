import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <footer
                className="footer module-small bg-dark "
            >
                {/* Grid container */}
                <div className="container">
                    {/* Section: Social media */}
                    <section className="mb-4 d-flex align-item-center">
                        <div className="col-sm-7">
                            <div className='widget-title'>
                                <h3>NEO KITCHENS</h3>
                            </div>
                            <div>
                                <ul className="icon-list list-inline">
                                    <li>
                                        <Link to="/NeoPro">NEO PRO</Link>
                                    </li>
                                    <li>
                                        <Link to="/NeoSink">NEO SINK</Link>
                                    </li>
                                    <li>
                                        <Link to="/NeoBath">NEO BATH</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center text-white m-auto">
                            <div className="footer-social-links" style={{ padding: "4.5rem" }}>


                                {/* <div className="col-sm-6">
                                <div className="footer-social-links">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-dribbble" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-skype" />
                                    </a>
                                </div>
                            </div> */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-facebook" />
                                </a>
                                {/* Twitter */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark "
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-twitter" />
                                </a>
                                {/* Google */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-google" />
                                </a>
                                {/* Instagram */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-instagram" />
                                </a>
                                {/* Linkedin */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-linkedin" />
                                </a>
                                {/* Github */}
                                <a
                                    className="btn btn-link btn-floating btn-lg text-dark "
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fa fa-github" />
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center text-dark p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>


            {/* <div className="module-small bg-dark">
                <div className="container">

                    <div className=''>

                        <div className="col-sm-8">
                            <div className="widget d-flex">
                                <h5 className=" font-alt">Blog Categories</h5>


                                <ul className="icon-list list-inline">
                                    <li>
                                        <a href="#">NEO PRO</a>
                                    </li>
                                    <li>
                                        <a href="#">NEO SINK</a>
                                    </li>
                                    <li>
                                        <a href="#">NEO BATH</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                            <div className="widget">
                                <h5 className="widget-title font-alt">Popular Posts</h5>
                                <ul className="widget-posts">
                                    <li className="clearfix">
                                        <div className="widget-posts-image">
                                            <a href="#">
                                                <img src="assets/images/rp-1.jpg" alt="Post Thumbnail" />
                                            </a>
                                        </div>
                                        <div className="widget-posts-body">
                                            <div className="widget-posts-title">
                                                <a href="#">Designer Desk Essentials</a>
                                            </div>
                                            <div className="widget-posts-meta">23 january</div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="widget-posts-image">
                                            <a href="#">
                                                <img src="assets/images/rp-2.jpg" alt="Post Thumbnail" />
                                            </a>
                                        </div>
                                        <div className="widget-posts-body">
                                            <div className="widget-posts-title">
                                                <a href="#">Realistic Business Card Mockup</a>
                                            </div>
                                            <div className="widget-posts-meta">15 February</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>
            <hr className="divider-d" />
            <footer className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="copyright font-alt">
                                © 2017&nbsp;<a href="index.html">TitaN</a>, All Rights Reserved
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="footer-social-links">
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-dribbble" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-skype" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>

    )
}

export default Footer