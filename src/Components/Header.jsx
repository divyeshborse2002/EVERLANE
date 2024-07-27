import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const Header = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <header>
      <div className="text-changer">
        <div className="span-text">
          <span>Up to 70% Off: New Markdowns Added. Shop Women Shop Men</span>
        </div>
        <div className="ind-logo">
          <img
            height="14"
            width="20"
            alt="IN flag"
            className="styles_rotating-banner__country-flag__8243Y everlane-flag everlane-flag--IN everlane-flag--4x3"
            src="https://www.everlane.com/assets/flags/4x3/in.svg"
          />
        </div>
        <span className="inr">INR</span>
      </div>
      {/* -------Navbar------------ */}
      <Navbar bg="light" expand="lg" className="d-block d-lg-none">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleShow} />
            <Navbar.Brand as={Link} to="/" className="mx-auto">
              EVERLANE
            </Navbar.Brand>
            <Nav className="d-flex align-items-center">
              <Nav.Link as={Link} to="/search">
                <CiSearch size={15} />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <IoCartOutline size={15} />
              </Nav.Link>
              <Nav.Link as={Link} to="/form">
                <FiUser size={15} />
              </Nav.Link>
            </Nav>
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            className="custom-offcanvas" // Apply custom class
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/women">Women</Nav.Link>
                  <Nav.Link as={Link} to="/men">Men</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/everworld-stories">Everworld Stories</Nav.Link>
                  <Nav.Link as={Link} to="/product">New Arrivals</Nav.Link>
                  <Nav.Link as={Link} to="/product">Best Sellers</Nav.Link>
                  <Nav.Link as={Link} to="/product">Clothing</Nav.Link>
                  <Nav.Link as={Link} to="/product">Tees</Nav.Link>
                  <Nav.Link as={Link} to="/product">Dresses</Nav.Link>
                  <Nav.Link as={Link} to="/product">Jeans & Denim</Nav.Link>
                  <Nav.Link as={Link} to="/product">Shoes, Bags, & Accessories</Nav.Link>
                  <Nav.Link as={Link} to="/product">Sales</Nav.Link>
                </Nav>
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-between align-items-center w-100 bg-light p-2 d-none d-lg-flex">
        <div className="d-flex justify-content-around w-25">
          <Nav.Link as={Link} to="/women">Women</Nav.Link>
          <Nav.Link as={Link} to="/men">Men</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </div>
        <Navbar.Brand as={Link} to="/" className="mx-auto text-dark w-25">
          EVERLANE
        </Navbar.Brand>
        <Nav className="d-flex align-items-center">
          <Nav.Link className="text-dark">
            <CiSearch size={15} />
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-dark">
            <IoCartOutline size={15} />
          </Nav.Link>
          <Nav.Link as={Link} to="/form" className="text-dark">
            <FiUser size={15} />
          </Nav.Link>
        </Nav>
      </div>
      <div className="navbar-tow d-none d-lg-block">
        <ul>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Best Sellers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Tees
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Dresses
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Jeans & Denim
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Shoes, Bags, & Accessories
            </NavLink>
          </li>
          <li>
            <NavLink to={"/product"} style={{ textDecoration: "none", color: "black" }}>
              Sales
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
