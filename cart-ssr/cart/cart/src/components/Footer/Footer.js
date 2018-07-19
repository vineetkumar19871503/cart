import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
const Footer = () => (
  <footer className="text-center">
    <div className="container">
      <div className="ftr-menu pull-right row">
        <ul>
          <li className="btn-link">
            <Link to="/">
              <i className="fa fa-home"></i>Home
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyright pull-left">
        Copyright © 2017 E-Shopper. All Rights Reserved. E-Shopper is a popular online shop.
      </div>
    </div>
  </footer>
);
export default Footer;
