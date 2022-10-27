import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const ProductDetails = () => {
  return (
    <>
      <Nav />
      <BreadCrumb heading="ProductDetails" />
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-sm-40">
              <a className="gallery" href="assets/images/shop/product-7.jpg">
                <img
                  src="https://images.unsplash.com/photo-1582683522098-72ad7b0883a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="Single Product Image"
                />
              </a>
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
            <div className="col-sm-6">
              <img
                src="https://images.unsplash.com/photo-1552332271-bf8afb3d4596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Single Product Image"
              />
            </div>
          </div>
          <div className="mt-70">
            <div className="col-sm-4 text-center">
              <h4>Finishes</h4>
              <p>Gloss & Matt Finish</p>
            </div>
            <div className="col-sm-4 text-center">
              <h4>Finishes</h4>
              <p>Gloss & Matt Finish</p>
            </div>
            <div className="col-sm-4 text-center">
              <h4>Finishes</h4>
              <p>Gloss & Matt Finish</p>
            </div>
          </div>
        </div>
      </section>
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
      <Footer />
    </>
  );
};

export default ProductDetails;

{
  /* <button className="btn btn-round btn-d" type="submit">
                        Submit Review
                      </button> */
}
