import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
// import Footer from "../Components/Footer";
// import Nav from "../Components/Nav";

// import $ from "jquery";
// import Slider from "slick-carousel";
import "jquery-ui-dist/jquery-ui";
import ProductSlider from "../Components/Product/ProductSlider";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const {Slug} = useParams()
  const [error, setError] = useState(null);
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/Sinks?populate=*")
      .then(({ data }) => setProduct(data.data))
      .catch((error) => setError(error));
     
  }, []);

  // console.log(Product);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  // const location = useParams();
  // const [mainData, setMainData] = useState(null);
  
  
  // useEffect(() => {
  //   const data = location.type;
  //   console.log(location);
  //   for (const key in products) {
  //     if (key === data) {
  //       console.log(`${key}: ${products[key]}`);
  //       setMainData(products[key]);
  //     }
  //   }
  // }, []);

  return (
    <>
      <BreadCrumb heading="ProductDetails" />
      <section className="module">
        <div className="container">
          <h1>Product Name</h1>
          <div className="row">
            <div className="col-sm-8 mb-sm-40">
              <ProductSlider />
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
                  <h3>Freatures</h3>
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
              <Link to="/Category">  <button  className="btn btn-border-d btn-round mt-50">Add To Cart</button></Link>
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
