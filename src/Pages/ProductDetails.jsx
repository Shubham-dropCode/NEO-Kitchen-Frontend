import React, { useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
// import Footer from "../Components/Footer";
// import Nav from "../Components/Nav";

// import $ from "jquery";
// import Slider from "slick-carousel";
import "jquery-ui-dist/jquery-ui";
import ProductSlider from "../Components/Product/ProductSlider";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   var module = $('.home-section, .module, .module-small, .side-image');
  //       module.each(function(i) {
  //           if ($(this).attr('data-background')) {
  //               $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
  //           }
  //       });
  // }, [])

  return (
    <>
      {/* <Nav /> */}
      <BreadCrumb heading="ProductDetails" />
      <section className="module">
        <div className="container">
          <h1>Heading</h1>
          <div className="row">
            <div className="col-sm-8 mb-sm-40">
              <ProductSlider/>
              {/* <div className="hero-slider" style={{ height: "50vh" }}>
                <ul className="slides" style={{ height: "50vh" }}>
                  <li
                    className="bg-dark-30 bg-dark"
                    style={{
                      backgroundImage: `url('${bg1}')`,
                    }}
                  >
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">
                          Hello &amp; welcome
                        </div>
                        <div className="font-alt mb-40 titan-title-size-4">
                          We are Titan
                        </div>
                        <a
                          className="section-scroll btn btn-border-w btn-round"
                          href="#about"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </li>

                  <li
                    className="bg-dark-30 bg-dark"
                    style={{
                      backgroundImage: `url('${bg2}')`,
                    }}
                  >
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-2">
                          Titan is creative multipurpose html template for
                          <br />
                          web developers who change the world
                        </div>
                        <a className="btn btn-border-w btn-round" href="about">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    className="bg-dark-30 bg-dark"
                    style={{
                      backgroundImage: `url('${bg3}')`,
                    }}
                  >
                    <div className="titan-caption">
                      <div className="caption-content">
                        <div className="font-alt mb-30 titan-title-size-1">
                          We build brands that build business
                        </div>
                        <div className="font-alt mb-40 titan-title-size-3">
                          We are Amazing
                        </div>
                        <a
                          className="section-scroll btn btn-border-w btn-round"
                          href="#about"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}

              {/* <ul className="product-gallery">
            <li>
              <a className="gallery" href="assets/images/shop/product-8.jpg" />
              <img
                src="assets/images/shop/product-8.jpg"
                alt="Single Product"
              />
            </li>
            <li>
              <a className="gallery" href="assets/images/shop/product-9.jpg" />
              <img
                src="assets/images/shop/product-9.jpg"
                alt="Single Product"
              />
            </li>
            <li>
              <a className="gallery" href="assets/images/shop/product-10.jpg" />
              <img
                src="assets/images/shop/product-10.jpg"
                alt="Single Product"
              />
            </li>
          </ul> */}
         </div>
            <div className="col-sm-4">
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="col-sm-4 text-center">
                  <h3>Thickness</h3>
                  <p>15 MM</p>
                </div>
                <div className="col-sm-4 text-center">
                  <h3>Finishes</h3>
                  <p>Gloss & Matt Finish</p>
                </div>
                <div className="col-sm-4 text-center">
                  <h3>Sizes (CM)</h3>
                  <p>800 x3000 MM 800 x3200 MM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <button className="btn btn-border-d btn-round btn-block mt-4">
          Inquery Now
        </button>
      </div>
      {/* <hr className="divider-w" /> */}
      <section className="module-small">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt">Related Products</h2>
            </div>
          </div>
          <div className="row multi-columns-row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="shop-item">
                <div className="shop-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1435820394963-a15297f976fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80"
                    alt="Accessories Pack"
                  />
                  <div className="shop-item-detail">
                    <a className="btn btn-round btn-b">
                      <span className="icon-basket">View Product</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="shop-item">
                <div className="shop-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1550053808-52a75a05955d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Accessories Pack"
                  />
                  <div className="shop-item-detail">
                    <a className="btn btn-round btn-b">
                      <span className="icon-basket">View Product</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="shop-item">
                <div className="shop-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1554381316-14cf94cbe791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Accessories Pack"
                  />
                  <div className="shop-item-detail">
                    <a className="btn btn-round btn-b">
                      <span className="icon-basket">View Product</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="shop-item">
                <div className="shop-item-image">
                  <img
                    src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Accessories Pack"
                  />
                  <div className="shop-item-detail">
                    <a className="btn btn-round btn-b">
                      <span className="icon-basket">View Product</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default ProductDetails;

{
  /* <button className="btn btn-round btn-d" type="submit">
                        Submit Review
                      </button> */
}
