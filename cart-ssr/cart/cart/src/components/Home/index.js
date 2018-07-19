import React, {Component} from 'react';
import {FiltersList} from '../Filters/';
import ProductList from '../../containers/ProductList';
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <FiltersList/>
          <ProductList/>
        </div>
      </div>
    );
  }
}
