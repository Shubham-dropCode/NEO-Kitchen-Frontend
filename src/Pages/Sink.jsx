import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import BreadCrumb from "../Components/BreadCrumb";
import Product from "../Components/Product/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";

const NeoSink = () => {

  const {sink} = useProductContext();
  console.log(sink);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <BreadCrumb heading="Kitchen Sink" />
      <section
        className="module"
        id="alt-features"
        style={{ backgroundColor: "#EFF3F5 " }}
      >
        <div className="container py-5">
          <div className="py-5">
            <div className="row">
              <div className="col-sm-12 h-100">
                {/* <h2 className="module-title font-alt">Our Products</h2> */}
                <div className="module-subtitle font-serif">
                  What we do Produce
                  <br />
                  To Make Your Home More Smiling
                </div>

                {sink.map((item, id) => {
                  return (
                    <div key={id} className="h-100" >
                      <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="shop-item">
                          <div className="shop-item-image" style={{height: "330px" , width: "100%", objectFit:"cover"}}>
                            <img
                            className=""
                              src={ process.env.REACT_APP_ASSETS_URL + item.attributes.Thumbnail_Image.data.attributes.url}
                              alt="Accessories Pack"
                            />
                            <div className="shop-item-detail">
                            
                              <Link to={`/Sink/${item.attributes.Slug}`} className="btn btn-round btn-b">
                                <span className="icon-basket">
                                  View Product
                                </span>
                              </Link>
                            </div>
                            <div className="">
                            <h4 class="shop-item-title font-alt"><a href="#">{item.attributes.Title}</a></h4>${item.attributes.Price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <Product LinkTo="/ProductDetails"/> */}
      {/* <Footer /> */}
    </>
  );
};

export default NeoSink;
