import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
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
      <section className="sidebar">
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

        <div className="Categorey mt-2">
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
        </div>

        <h5 className="text-center mt-1">Price</h5>
        <div className="sort-btn d-flex justify-content-center w-100 mx-3 mt-3">
          <button
            className="btn btn-outline-info "
            onClick={() => setsort("desc")}
          >
            HighToLow
          </button>
          <button
            className="btn btn-outline-info mx-1"
            onClick={() => setsort("asc")}
          >
            LowToHigh
          </button>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
