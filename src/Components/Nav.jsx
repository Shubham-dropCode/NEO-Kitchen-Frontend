import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

const Nav = () => {

    // const [navBackground, setNavBackground] = useState('navbar-dark')
    // const navRef = React.useRef()
    // navRef.current = navBackground
   

    // const [state, setstate] = useState("navbar-transparent");

        useEffect(() => {
            console.log('%c Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');

            /* ---------------------------------------------- /*
             * Preloader
             /* ---------------------------------------------- */
            (function(){
 
            
                    var homeSection = $('.home-section'),
                        navbar      = $('.navbar-custom'),
                        navHeight   = navbar.height(),
                        width       = Math.max($(window).width(), window.innerWidth),
                        mobileTest  = false;
            
                    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        mobileTest = true;
                    }
                  
                    navbarSubmenu(width);
                    hoverDropdown(width, mobileTest);
            
        
            
                    /* ---------------------------------------------- /*
                     * Navbar submenu
                     /* ---------------------------------------------- */
            
                    function navbarSubmenu(width) {
                        if (width > 767) {
                            $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                                var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
                                var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                                if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                                    $(this).children('.dropdown-menu').addClass('leftauto');
                                } else {
                                    $(this).children('.dropdown-menu').removeClass('leftauto');
                                }
                                if ($('.dropdown', $(this)).length > 0) {
                                    var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                                    if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                                        $(this).children('.dropdown-menu').addClass('left-side');
                                    } else {
                                        $(this).children('.dropdown-menu').removeClass('left-side');
                                    }
                                }
                            });
                        }
                    }
            
                    /* ---------------------------------------------- /*
                     * Navbar hover dropdown on desctop
                     /* ---------------------------------------------- */
            
                    function hoverDropdown(width, mobileTest) {
                        if ((width > 767) && (mobileTest !== true)) {
                            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                            var delay = 0;
                            var setTimeoutConst;
                            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                                    var $this = $(this);
                                    setTimeoutConst = setTimeout(function() {
                                        $this.addClass('open');
                                        $this.find('.dropdown-toggle').addClass('disabled');
                                    }, delay);
                                },
                                function() {
                                    clearTimeout(setTimeoutConst);
                                    $(this).removeClass('open');
                                    $(this).find('.dropdown-toggle').removeClass('disabled');
                                });
                        } else {
                            $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                            $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                                event.preventDefault();
                                event.stopPropagation();
                                $(this).parent().siblings().removeClass('open');
                                $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                                $(this).parent().toggleClass('open');
                            });
                        }
                    }
            
                    /* ---------------------------------------------- /*
                     * Navbar collapse on click
                     /* ---------------------------------------------- */
            
                    $(document).on('click','.navbar-collapse.in',function(e) {
                        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                            $(this).collapse('hide');
                        }
                    });
            })($);
            
            
            
        }, [])

    // useEffect(() => {
    //     const changeClass = () => {
    //         const scrollValue = document.documentElement.scrollTop;
    //         if (scrollValue > 20) {
    //             setstate("navbar-dark");
    //         }
    //         else {
    //             setstate("navbar-transparent");
    //         }

    //     }
    //     window.addEventListener('scroll', changeClass);
    // }, [])


    return (
        <nav
            className={"navbar navbar-custom navbar-fixed-top bg-light navbar-light"} 
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
                        <img src='./../assets/images/Neo3D/logo.png' />
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
                                    <Link to="/Fauctes" className="dropdown-toggle" data-toggle="dropdown">
                                        Kitchen Faucets
                                    </Link>
                                    {/* <ul className="dropdown-menu">
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

                                    </ul> */}
                                </li>
                                <li >
                                    <Link to="/Sink">
                                        Kitchen Sink
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Cabinate">
                                        Kitchen Cabinets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Accessories">
                                        Kitchen Accessories
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