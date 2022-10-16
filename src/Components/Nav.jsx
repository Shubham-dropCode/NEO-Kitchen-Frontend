import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [state, setstate] = useState("navbar-transparent");


    useEffect(() => {
        const changeClass = () => {
            const scrollValue = document.documentElement.scrollTop;
            if (scrollValue > 20) {
                setstate("navbar-dark");
            }
            else {
                setstate("navbar-transparent");
            }

        }
        window.addEventListener('scroll', changeClass);
    }, [])


    return (
        <nav
            className="navbar navbar-custom navbar-fixed-top bg-dark" onScroll={state}
        // role="navigation"
        >
            <div className="container">
                <div className="navbar-header">
                    <button
                        className="navbar-toggle"
                        type="button"
                        data-toggle="collapse"
                        data-target="#custom-collapse"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link to="/" className="navbar-brand" >
                        NEO KITCHENS
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="custom-collapse">
                    <ul className="nav navbar-nav navbar-right font-weight-bold">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link to="/Category" className="dropdown-toggle" data-toggle="dropdown">
                                Products
                            </Link>
                            <ul className="dropdown-menu">
                                <li className="dropdown">
                                    <Link to="/NeoPro" className="dropdown-toggle" data-toggle="dropdown">
                                        Neo Pro
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="index_mp_fullscreen_static.html">Tiles</a>
                                        </li>
                                        <li>
                                            <a href="index_mp_classic_static.html">Slab</a>
                                        </li>
                                        <li>
                                            <a href="index_mp_classic_static.html">3d Tiles</a>
                                        </li>
                                        <li>
                                            <a href="index_mp_classic_static.html">Wooden</a>
                                        </li>
                                        <li>
                                            <a href="index_mp_classic_static.html">Wall Panel</a>
                                        </li>

                                    </ul>
                                </li>
                                <li >
                                    <Link to="/NeoSink">
                                        Neo Sink
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/NeoBath">
                                        Neo Bath
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/About">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/Visualiser">
                                Visualiser
                            </Link>
                        </li>
                        <li>
                            <Link to="/ContactUs">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav