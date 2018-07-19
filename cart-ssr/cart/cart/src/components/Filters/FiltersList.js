import React from 'react';
import {Link} from 'react-router-dom';
import './filters.css';
const filtersList = () => (
  <div className="filters-list in-block slide fadeOut">
    <ul>
      <li>
        <Link to="/">Mobiles</Link>
      </li>
      <li>
        <Link to="/">Laptops</Link>
      </li>
      <li>
        <Link to="/">Cameras</Link>
      </li>
    </ul>
  </div>
)

export default filtersList;
