import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import BreadCrumb from "../Components/BreadCrumb";
import Product from "../Components/Product/Product";
import axios from "axios";
import { Link } from "react-router-dom";

const NeoPro = () => {
  const [error, setError] = useState(null);
  const [faucet, setFaucet] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/faucets?populate=*")
      .then(({ data }) => setFaucet(data.data))
      .catch((error) => setError(error));
  }, []);

  // console.log(faucet[0].attributes.lug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      {/* <Nav /> */}
      <BreadCrumb heading="Kitchen Fauctes" />
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

                {faucet.map((item,id)=>{
                    return(
                        
                  <div className="col-sm-6 col-md-3 col-lg-3">
                    <div className="shop-item">
                      <div className="shop-item-image" style={{height: "330px" , width: "100%", objectFit:"cover"}}>
                        <img
                          src={process.env.REACT_APP_ASSETS_URL + item.attributes.Thubnail_Image.data.attributes.url}
                          alt="Accessories Pack"
                        />
                        <div className="shop-item-detail">
                        <Link to={`/Faucet/${item.attributes.Slug}`} className="btn btn-round btn-b">
                                <span className="icon-basket">
                                  View Product
                                </span>
                              </Link>
                        </div>
                        <h4 class="shop-item-title font-alt"><a href="#">{item.attributes.Title}</a></h4>${item.attributes.Price}
                      </div>
                    </div>
                  </div>
            
                    )
                })}
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default NeoPro;
