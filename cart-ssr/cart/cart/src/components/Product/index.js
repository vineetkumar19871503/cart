import React, {Component} from 'react';
import config from '../../constants/';
import PropTypes from 'prop-types';
export default class Product extends Component {
  constructor() {
    super();
    this.manageCart = this.manageCart.bind(this);
  }
  manageCart() {
    const {product, addToCart, removeFromCart, isInCart} = this.props;
    isInCart
      ? removeFromCart(product.id)
      : addToCart(product.id);
  }
  render() {
    let {product, isInCart} = this.props,
      cls = 'btn-success full-w',
      btnName = 'Add to cart';
    if (isInCart) {
      cls = 'btn-danger full-w';
      btnName = 'Remove';
    }
    return (
      <div className="product-container">
        <div className="product">
          <img src={product.image} alt={product.name} title={product.name} className="product-thumb"/>
          <div className="product-desc">
            <a className="product-name" href={product.url} target="_blank">{product.name}</a>
            <span className="price row">{config.CURRENCY + ' ' + product.price + '/-'}</span>
            <button className={"row btn " + cls} onClick={this.manageCart}>{btnName}</button>
          </div>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object,
  isInCart: PropTypes.bool,
  removeFromCart: PropTypes.func,
  addToCart: PropTypes.func
}
