import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Mens from "./Mens";
import Womens from "./Womens";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

const Product = () => {
  const [change, setChange] = useState(false);

  const toggleComponent = () => {
    setChange(!change);
  };

  return (
    <>
    <div className="container-fluid product-container p-0">
      <section className="row">
        <div className="col-lg-3 d-none  d-lg-block sidebar-container p-0">
          <Sidebar />
        </div>
        <div className="col-12 col-lg-9 offset-lg-3">
          <div className="text-center my-3">
            <button onClick={toggleComponent} className="btn btn-outline-dark ">
              {change ? "Show Womens" : "Show Mens"}
            </button>
          </div>
          <div>
            {change ? <Mens /> : <Womens />}
          </div>
        </div>
       
      </section>
    </div>

    

    </>
  );
};

export default Product;