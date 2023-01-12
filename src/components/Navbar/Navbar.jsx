import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <nav>
      <nav className="nav-bar">
        <label
          className="menu-bar"
          onClick={handleOpen}
        >
          {open ? <FaTimes /> : <FaBars />}
        </label>
        <label className="logo">
          {' '}
          <span style={{ color: 'rgb(249,157,28)' }}>Amde Software Technologies </span> Solutions
        </label>
        <ul className={`${open ? 'links show' : 'links'}`}>
          <li>
            <a>
              <Link
                to="./"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link
                to="./Services"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </a>
          </li>

          <li>
            <a>
              <Link
                to="./info"
                onClick={() => setOpen(false)}
              >
                Info
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link
                to="./contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </a>
          </li>

          {/* <li><a href="#home">home</a></li>
                    <li><a href="#about us">about us</a></li>
                    <li><a href="#services">Services</a></li>                  
                    <li><a href="#contact">contact</a></li>  */}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
