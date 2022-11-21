import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Product = ({LinkTo}) => {
     useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
  
    return (
    <section className="module" id="alt-features" style={{backgroundColor:"#EFF3F5 "}}>
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
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Product;
