import React from 'react'
import Sliders from "../Components/Slider";
import { NavLink } from "react-router-dom";
import WTestimonialslider from "../Components/WTestimonialslider";
import Footer from "../Components/Footer";
import Menslider from '../Components/Menslider';
import Mtestimonialslider from '../Components/Mtestimonialslider';

const Men = () => {
  return (
    <div className="main">
      <section className=" women-section ">
        <div className="container-fluid ">
          <div className="main-box p-0">
            <div className=" img-box">
              <img
                className="img-fluid"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/848a6128_d3c4.jpg"
                alt="Phoebe Trousers"
              />
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="content">
                <h1>Your Style Guide</h1>
                <p>Must-haves for looking good</p>
                <p>all the damn time.</p>
                <div>
                  <button className="shop-btn">
                    SHOP PANTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------Slider------------------ */}
      <section className="slider">
        <div className="heading text-center my-5 mx-5">
          <h2>This Just In</h2>
        </div>

        <div className="slider-container ">
          <div className="slide-box">
           <Menslider />
          </div>
        </div>
      </section>

      {/* -------------Slider-End------------------ */}

      {/* ----------------Categorey-section--------- */}

      <section className="category text-center">
        <div className="text-center my-5">
          <h4>Shop By Category</h4>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/dc459177_c948.jpg"
                alt="Dresses"
              />
              <NavLink className="text-dark mt-2">Tees</NavLink>
            </div>
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/5614138b_3180.jpg"
                alt="Pants"
              />
              <NavLink className="text-dark mt-2">Pants</NavLink>
            </div>
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/ed4b651f_0d02.jpg"
                alt="Jeans"
              />
              <NavLink className="text-dark mt-2">Tops</NavLink>
            </div>
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/a7f8f15b_8d46.jpg"
                alt="Jeans"
              />
              <NavLink className="text-dark mt-2">Jeans</NavLink>
            </div>
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/3d6b6c5f_a6ef.jpg"
                alt="Shorts"
              />
              <NavLink className="text-dark mt-2">Shorts</NavLink>
            </div>
            <div className="col-6 col-sm-12 col-md-3 col-lg-2  d-flex flex-column align-items-center">
              <img
                className="img-fluid border"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/6c06d252_0f62.jpg"
                alt="Shoes & Accessories"
              />
              <NavLink className="text-dark mt-2">Shoes & Accessories</NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* -------------Categorey-section-end--------*/}

      <section className="container-fluid">
        <div className="container  ">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 position-relative ">
              <img
                className="img-fluid"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/3200df9e_01ba.jpg"
                alt="The Sandal Shop"
              />
              <div className="position-absolute top-50 start-50 translate-middle my-5 text-light text-center p-0 w-100 h-50">
                <h1 className="display-5">The Sandal Shop</h1>
                <button className="btn btn-light">
                  <NavLink className="text-decoration-none text-dark" to="#">
                    Shop Now
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-4 position-relative ">
              <img
                className="img-fluid"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/877c313a_c1d9.jpg"
                alt="Second Image"
              />
              <div className="position-absolute top-50 start-50 translate-middle my-5 text-light text-center p-0 w-100 h-50">
                <h1 className="display-5">Best Selling Tees</h1>
                <button className="btn btn-light">
                  <NavLink className="text-decoration-none text-dark" to="#">
                    Shop Tees
                  </NavLink>
                </button>
                <button className="btn btn-light mx-2">
                  <NavLink className="text-decoration-none text-dark" to="#">
                    THE TEE GUIDE
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-4 position-relative ">
              <img
                className="img-fluid"
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/7b0a7637_38b1.jpg"
                alt="Third Image"
              />
              <div className="position-absolute top-50 start-50 translate-middle my-5 text-light text-center p-0 w-100 h-50">
                <h1 className="display-5">New Arrivals</h1>
                <button className="btn btn-light">
                  <NavLink className="text-decoration-none text-dark" to="#">
                    Shop The Latest
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------=-------endtestimonial----------- */}
      {/*--------------------------offer poster ------------------------ */}
      <section className="container-fluid  mt-5 h-100 w-100 ">
        <div className="container  mt-5 mb-5  offer-container ">
          <div className="row py-10 text-center">
            <div className="col-12 my-2">
              <h4>NEW MARKDOWNS ADDED</h4>
            </div>
            <div className="col-12  my-2 offer-heading">
              <p>Up to 70% of</p>
            </div>
            <div className="col-12  my-2">
              <button className="offer-btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------offer poster end------------------------ */}
      {/*------------------------ Testimonial section ------------------*/}
      <section
        className="container p-0 testimonial-slide "
        style={{
          backgroundColor: "whitesmoke overflow-hidden border border-dark ",
        }}
      >
        <div>
        <Mtestimonialslider />
        </div>
      </section>
      {/*------------------------ Testimonial section end ------------------*/}

      <section className="h-100 mt-5">
        <div className="container">
          <div className="row">
            <div className="px-auto">
              <div className="bg-img d-flex align-items-center justify-content-center">
                <div className="text-container text-dark ">
                  <p className="text">
                    We’re on a Mission To Clean Up the Industry
                  </p>
                  <p className="text-s">
                    Read about our progress in our latest Impact Report.
                  </p>
                  <button className="btn-p">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="group-img">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 p-3 text-center">
           <h2>Destination Denim</h2>
          <img className="img-fluid" src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/8223fe7a_9801.png" alt="" />
        </div>
        <div className="col-12 col-md-6 p-3 text-center ">
        <h2>Cleaner Fashion</h2>
          <img className="img-fluid" src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1200/v1/i/380b8890_5d4f.png" alt="" />
        </div>
      </div>
    </div>
  </section>

   <section style={{width:"100%",backgroundColor:"whitesmoke"}}>
    <Footer />
   </section>
    </div>
  );

}

export default Men
