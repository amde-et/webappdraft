import React from 'react';
import '../Footer/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from 'react-icons/fa';
import { data } from './data';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            {data.map((item) => {
              return (
                <div className="footer-col">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.links.map((link) => {
                      return (
                        <li>
                          <a href="#">{link}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <i>
                  <FaFacebookF />
                </i>
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaLinkedin />
                </i>
                <i>
                  <FaTelegram />
                </i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
