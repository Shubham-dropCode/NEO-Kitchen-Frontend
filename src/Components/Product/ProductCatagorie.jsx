import React from "react";
import bg from "../../assets/images/Neo3D/SliderImage1.jpg";
import bg1 from "../../assets/images/Neo3D/SliderImage2.jpg";
import bg2 from "../../assets/images/Neo3D/SliderImage3.jpg";

const ProductCatagorie = () => {
  // const styling = {
  //     display: "flex",
  //     alignItem: "center",
  // }

  return (
    <section className="module" id="contact" style={{backgroundColor:"#E5E5E5"}}>
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", marginTop: "5vh"}}
        >
          <div className="col-md-7 col-sm-12">
            <img src={bg} />
          </div>
          <div className="col-md-5 col-sm-12 mt-2">
            <h3>Heading</h3>
            <p className="font-alt mb-30 ">
              Sed cursus, velit eget sodales luctus sit amet massa vel, maximus
              mattis nulla.Morbi ultrices finibus bibendum.Ut sapien erat,
              scelerisque ut turpis quis, elementum varius odio.Donec dui odio,
              lacinia nec fermentum eu, ornare in lectus.Aliquam cursus egestas
              velit eget sodales luctus sit amet massa vel, libero ac
              dictum.celerisque ut turpis quis, elementum varius odio. Don
            </p>
            <h5 className="">
              <u>
                <button class="btn btn-border-d btn-round" type="submit">
                  View Projects
                </button>
              </u>
            </h5>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-2">
        <div className="container">
          {/* <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt">Contact us</h2>
                        <div className="module-subtitle font-serif" />
                    </div>
                </div> */}
          <div
            className="row"
            style={{ display: "flex", alignItems: "center", marginTop: "5vh" }}
          >
            <div className="col-sm-5">
            <h3>Heading</h3>
              <p className="font-alt mb-30 ">
                Sed cursus, velit eget sodales luctus sit amet massa vel,
                maximus mattis nulla.Morbi ultrices finibus bibendum.Ut sapien
                erat, scelerisque ut turpis quis, elementum varius odio.Donec
                dui odio, lacinia nec fermentum eu, ornare in lectus.Aliquam
                cursus egestas velit eget sodales luctus sit amet massa vel,
                libero ac dictum.celerisque ut turpis quis, elementum varius
                odio. Don
              </p>
              <h5 className=" text-white">
                <u>
                  <button class="btn btn-border-d btn-round" type="submit">
                    View Projects
                  </button>
                </u>
              </h5>
            </div>
            <div className="col-sm-7">
              <img src={bg1} className="" />
              {/* <div className="ajax-response font-alt" id="contactFormResponse" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt">Contact us</h2>
                        <div className="module-subtitle font-serif" />
                    </div>
                </div> */}
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", marginTop: "5vh" }}
        >
          <div className="col-sm-7">
            <img src={bg2} width={700} height={300} />
            <div className="ajax-response font-alt" id="contactFormResponse" />
          </div>
          <div className="col-sm-5 mt-2">
          <h3>Heading</h3>
            <p className="font-alt mb-30">
              Sed cursus, velit eget sodales luctus sit amet massa vel, maximus
              mattis nulla.Morbi ultrices finibus bibendum.Ut sapien erat,
              scelerisque ut turpis quis, elementum varius odio.Donec dui odio,
              lacinia nec fermentum eu, ornare in lectus.Aliquam cursus egestas
              velit eget sodales luctus sit amet massa vel, libero ac
              dictum.celerisque ut turpis quis, elementum varius odio. Don
            </p>
            <h5 className="">
              <u>
                <button class="btn btn-border-d btn-round" type="submit">
                  View Projects
                </button>
              </u>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatagorie;
