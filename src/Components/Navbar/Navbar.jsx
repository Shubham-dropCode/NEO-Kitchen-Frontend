import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header
  className="site-navbar js-sticky-header site-navbar-target"
  role="banner"
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-6 col-xl-2">
        <h1 className="mb-0 site-logo">
          <a href="index.html">
            Brand<span className="text-primary">.</span>{" "}
          </a>
        </h1>
      </div>
      <div className="col-12 col-md-10 d-none d-xl-block">
        <nav
          className="site-navigation position-relative text-right"
          role="navigation"
        >
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li>
              <a href="#home-section" className="nav-link">
                Home
              </a>
            </li>
            <li className="has-children">
              <a href="#about-section" className="nav-link">
                About Us
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#team-section" className="nav-link">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#pricing-section" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#gallery-section" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#services-section" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials-section" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li className="has-children">
                  <a href="#">More Links</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li>
                      <a href="#">Menu Three</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#blog-section" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact-section" className="nav-link">
                Contact
              </a>
            </li>
            <li className="social">
              <a href="#contact-section" className="nav-link">
                <span className="icon-facebook" />
              </a>
            </li>
            <li className="social">
              <a href="#contact-section" className="nav-link">
                <span className="icon-twitter" />
              </a>
            </li>
            <li className="social">
              <a href="#contact-section" className="nav-link">
                <span className="icon-linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
        style={{ position: "relative", top: 3 }}
      >
        <a href="#" className="site-menu-toggle js-menu-toggle float-right">
          <span className="icon-menu h3" />
        </a>
      </div>
    </div>
  </div>
</header>

  )
}

export default Navbar