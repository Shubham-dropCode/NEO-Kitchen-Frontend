import React, { useEffect } from "react";
import Slider from "react-slick";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import BreadCrumb from "../BreadCrumb";
import Footer from "../Footer";
// import "./ProductListing.css";

const ProductListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
    <section className="module sliding-portfolio">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h2 className="module-title font-alt">Products</h2>
          <div className="module-subtitle font-serif">
            What we do Produce <br />
            To Make Your Home More Smiling
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <Slider {...settings}>
              <div className="owl-item">
                <div className="col-sm-12">
                  <div className="work-item">
                    <Link to="/Fauctes">
                      <div className="work-image">
                        <img
                          src="https://i.pinimg.com/736x/64/e1/19/64e119d4f3e374941637d55c8ff7be8a.jpg"
                          alt="Portfolio Item"
                        />
                      </div>
                      <div className="work-caption font-alt">
                        <h3 className="work-title">Kitchen Faucets</h3>
                        <div className="work-descr">Read More</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="owl-item">
                <div className="col-sm-12">
                  <div className="work-item">
                    <Link to="/Sink">
                      <div className="work-image">
                        <img
                          src="https://i.pinimg.com/736x/64/e1/19/64e119d4f3e374941637d55c8ff7be8a.jpg"
                          alt="Portfolio Item"
                        />
                      </div>
                      <div className="work-caption font-alt">
                        <h3 className="work-title">Kitchen Sink</h3>
                        <div className="work-descr">Read More</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="owl-item">
                <div className="col-sm-12">
                  <div className="work-item">
                    <Link to="/Cabinate">
                      <div className="work-image">
                        <img
                          src="https://i.pinimg.com/736x/64/e1/19/64e119d4f3e374941637d55c8ff7be8a.jpg"
                          alt="Portfolio Item"
                        />
                      </div>
                      <div className="work-caption font-alt">
                        <h3 className="work-title">Kitchen Cabinate</h3>
                        <div className="work-descr">Read More</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="owl-item">
                <div className="col-sm-12">
                  <div className="work-item">
                    <Link to="/Accessories">
                      <div className="work-image">
                        <img
                          src="https://i.pinimg.com/736x/64/e1/19/64e119d4f3e374941637d55c8ff7be8a.jpg"
                          alt="Portfolio Item"
                        />
                      </div>
                      <div className="work-caption font-alt">
                        <h3 className="work-title">Kitchen Accessories</h3>
                        <div className="work-descr">Read More</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-sm-12">
            <div className="text-center">
              <a className="btn btn-border-d btn-circle mt-50" href="#">
                View All Cases
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  </>
  );
};

export default ProductListing;
