import React from 'react';
import Product from '../../containers/Product';
import PropTypes from 'prop-types';
import './products-list.css';
const ProductList = ({products}) => {
  return (
    <div className="products-list in-block">
      {products.length > 0 && products.map((product, key) => <Product key={key} product={product}/>)}
    </div>
  )
}
export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array
}
