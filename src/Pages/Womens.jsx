import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Footer from '../Components/Footer';
import Canvas from "../Components/Canvas";

const Womens = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalitems,setTotalitems]=useState()
  const pagelimit=9;
  const fetchData = () => {
    setLoading(true);
    axios.get("http://localhost:3000/womens", {
      params: {
        category: searchParams.getAll("category"),
        _sort: "price",
        _order: searchParams.get("sort"),
        _page: page,
        _limit: pagelimit 
      }
    })
    .then((res) => {
      setProducts(res.data);
      setTotalitems(parseInt(res.headers["x-total-count"], 10));
      setLoading(false);
    })
    .catch((err) =>{
      alert("Something went wrong: " + err.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, [searchParams, page]);
  
  const totalPages= Math.ceil(totalitems/pagelimit)
  return loading ? (
    <div style={{ margin: "15%", display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <>
    <div className="container">
      <h3 className="text-center">Women's Clothing</h3>  
      <div>
        <Canvas />
      </div>
      <div className="row">
        {products.map((el) => (
          <div key={el.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
            <NavLink
              style={{ textDecoration: "none" }}
              to={`/description/${el.id}`}
            >
              <Card style={{ width: "20rem", height: "auto" }}>
                <Card.Img
                  variant="top"
                  src={el.image}
                  height={200}
                  width={100}
                />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>${el.price}</Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </div>
        ))}
      </div>
      <div className=" w-100 d-flex justify-content-center">
        <button className="mx-1 btn btn-outline-dark" onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span className="px-2 py-1">{page}</span>
        <button className="mx-1 btn btn-outline-dark" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
    <section style={{ width: "100%", backgroundColor: "whitesmoke"}}>
      <Footer />
    </section>
    </>
  );
};

export default Womens;
