import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useSearchParams } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


const Canvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const options = [{
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  }]

  const [search, setsearch] = useSearchParams();
  const [category, setcategory] = useState(search.getAll("category") || []);
  const [sort, setsort] = useState(search.get("sort") || null);

  useEffect(() => {
    setsearch({ category, sort });
  }, [category, sort]);

  const handelchange = (e) => {
    const { value } = e.target;
    let newcategory = [...category];

    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }
    setcategory(newcategory);
  };
return (
  <div>
     <div className=" d-block d-lg-none">
      <Button variant="primary" size="sm" onClick={toggleShow} className="my-2 ">
        Fillter
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <h5 className=" text-center  w-100">Categorey</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="Categorey mt-2 ">
          <h5 className=" text-center  w-100 mx-2 ">Womens Categorey</h5>
          <div className="main-category d-flex p-3 justify-content-center">
            <div className="label">
              <label>Dresses</label>
              <br />
              <label>Top</label>
              <br />
              <label>Jeans</label>
              <br />
              <label>Pants</label>
              <br />
              <label>Tees</label>
              <br />
              <label>Shoes</label>
            </div>
            <div className="check px-3 ">
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Dresses"}
                checked={category.includes("Dresses")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Top"}
                checked={category.includes("Top")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Jeans"}
                checked={category.includes("Jeans")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Pants"}
                checked={category.includes("Pants")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Tees"}
                checked={category.includes("Tees")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"Shoes"}
                checked={category.includes("Shoes")}
              />
              <br />
            </div>
          </div>
        
        </div>

        <div className="Categorey mt-2 ">
          <h5 className=" text-center  w-100 mx-2 ">Mens Categorey</h5>
            <div className="main-category d-flex p-3 justify-content-center">
              <div className="label">
              <label>mens-Jeans</label>
              <br />
              <label>mens-Pants</label>
              <br />
              <label>mens-Tees</label>
              <br />
              <label>mens-Short</label>
              </div>
              <div className="check px-3 ">
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"mens-Jeans"}
                checked={category.includes("mens-Jeans")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"mens-Pants"}
                checked={category.includes("mens-Pants")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"mens-Tees"}
                checked={category.includes("mens-Tees")}
              />
              <br />
              <input
                type="checkbox"
                onChange={(e) => handelchange(e)}
                value={"mens-Short"}
                checked={category.includes("mens-Short")}
              />
              </div>
            </div>
            <div className="sort-btn" style={{marginTop:"5px"}}>
      <button onClick={()=>setsort("desc")}  style={{margin:'4px',border:"1px solid white",padding:"5px",color:"white",backgroundColor:"transparent"}}>HighToLow</button>
       <button onClick={()=>setsort("asc")} style={{margin:'4px',border:"1px solid white",padding:"5px",color:"white",backgroundColor:"transparent"}}>LowToHigh</button><br />
      
      </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  </div>
)
}

export default Canvas;
