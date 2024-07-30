import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../Components/Footer';

const Description = () => {
  const [productdata, setProductdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://backenddata-1-cuip.onrender.com/womens/${id}`)
      .then((response) => {
        setProductdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Wait..');
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://backenddata-1-cuip.onrender.com/mens/${id}`)
      .then((response) => {
        setProductdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Wait.. ');
        setLoading(false);
      });
  }, [id]);


  const handelcart =()=>{
    axios.post("https://backenddata-1-cuip.onrender.com/cart", productdata)
    .then((res)=>setProductdata(res.data))
    .catch((err)=>alert("somthing wrong"))
  }

  if (productdata === handelcart) {
    alert("Product Add in cart");
  }

  return loading ? (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <div className="container mt-5  description-box">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-8 col-lg-6 text-center">
          <h1>Description</h1>
          {productdata && (
            <div className="border p-3 bg-light">
              <img src={productdata.image} alt={productdata.title} className="img-fluid mb-3" />
              <h3>{productdata.title}</h3>
              <h4 className="text-primary">${productdata.price}</h4>
              <p>{productdata.description}</p>
              <button className="btn btn-primary" onClick={handelcart}>Add to Cart</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
