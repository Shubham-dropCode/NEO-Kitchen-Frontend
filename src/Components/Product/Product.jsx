import React, { useEffect } from "react";
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
       

         
              <div className="col-lg-3 mb-3 mb-lg-0 h-100">
                <Link to={LinkTo}>
                  <div className="hover hover-2 text-white rounded">
                    <img
                      src="https://i.pinimg.com/564x/17/3a/2b/173a2bf7af455fc310ca09506017ddac.jpg"
                      alt=""
                    />
                    <div className="hover-overlay" />
                    <div className="hover-2-content px-5 py-4">
                      <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                        <span className="font-weight-light text-white">
                          Kitchen{" "}
                        </span>
                        faucets
                      </h3>
                      <p className="hover-2-description text-uppercase mb-0">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              

              <div className="col-lg-3" >
                <Link to={LinkTo}>
                  <div className="hover hover-2 rounded">
                    <img
                      src="https://i.pinimg.com/564x/17/3a/2b/173a2bf7af455fc310ca09506017ddac.jpg"
                      alt=""
                    />
                    <div className="hover-overlay" />
                    <div className="hover-2-content px-5 py-4">
                      <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                        {" "}
                        <span className="text-white">kitchen </span>Sink
                      </h3>
                      <p className="hover-2-description text-uppercase mb-0">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3">
                <Link to={LinkTo}>
                  <div className="hover hover-2 text-white rounded">
                    <img
                      src="https://i.pinimg.com/564x/17/3a/2b/173a2bf7af455fc310ca09506017ddac.jpg"
                      alt=""
                    />
                    <div className="hover-overlay" />
                    <div className="hover-2-content px-5 py-4">
                      <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                        {" "}
                        <span className="font-weight-light">kitchen </span>Cabinate
                      </h3>
                      <p className="hover-2-description text-uppercase mb-0">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 " >
                <Link to={LinkTo}>
                  <div className="hover hover-2 text-white rounded">
                    <img
                      src="https://i.pinimg.com/564x/17/3a/2b/173a2bf7af455fc310ca09506017ddac.jpg"
                      alt=""
                    />
                    <div className="hover-overlay" />
                    <div className="hover-2-content px-5 py-4">
                      <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                        {" "}
                        <span className="font-weight-light">Kitchen </span>Accessoires
                      </h3>
                      <p className="hover-2-description text-uppercase mb-0">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="py-5">
                <h3 className="font-weight-bold mb-0">Demo 3</h3>
                <p className="font-italic text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="row">
              
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className="hover hover-3 text-white rounded">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-5.jpg"
                                alt=""
                            />
                            <div className="hover-overlay" />
                            <div className="hover-3-content px-5 py-4">
                                <h3 className="hover-3-title text-uppercase font-weight-bold mb-1">
                                    <span className="font-weight-light">Image </span>Caption
                                </h3>
                                <p className="hover-3-description small text-uppercase mb-0">
                                    Lorem ipsum dolor sit amet, consectetur <br />
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hover hover-3 text-white rounded">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-img-hover/hoverSet-6.jpg"
                                alt=""
                            />
                            <div className="hover-overlay" />
                            <div className="hover-3-content px-5 py-4">
                                <h3 className="hover-3-title text-uppercase font-weight-bold mb-1">
                                    <span className="font-weight-light">Image </span>Caption
                                </h3>
                                <p className="hover-3-description small text-uppercase mb-0">
                                    Lorem ipsum dolor sit amet, consectetur <br />
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Product;
