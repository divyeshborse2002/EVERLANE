import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer bg-light py-4  d-flex">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Login</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}}href="#">Register</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">My Profile</NavLink></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">About Us</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Careers</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Get Help</h5>
            <ul className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">FAQ</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Support</NavLink></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><NavLink style={{textDecoration:"none", color:"grey"}}  href="#">Facebook</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Twitter</NavLink></li>
              <li><NavLink style={{textDecoration:"none", color:"grey"}} href="#">Instagram</NavLink></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Search</h5>
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
