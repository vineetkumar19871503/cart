import React from 'react';
const HeaderTop = () => (
  <div className="hdr-top">
    <div className="container">
      <div className="contact-info pull-left">
        <ul>
          <li>
            <a href="tel:9898989898">
              <i className="fa fa-phone"></i>
              +91-9898989898
            </a>
          </li>
          <li>
            <a href="mailto:vineetkumar.vaishna@a3logics.in">
              <i className="fa fa-envelope"></i>
              info@domain.com
            </a>
          </li>
        </ul>
      </div>
      <div className="social-icons  pull-right">
        <ul className="nav navbar-nav">
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
export default HeaderTop;
