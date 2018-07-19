import React from 'react';
import PropTypes from 'prop-types';
import config from '../../constants/';
import './cart.css';
import Cart from './Cart';
export default class CartList extends React.Component {
	render() {
		let { cartItems, cartTotal } = this.props;
		return (
			<div className="container cart">
				{this.props.cartItems.length > 0 ?
					<div>
						<table className="row full-w">
							<thead>
								<tr className="cart-head">
									<td>
										<span className="in-block pull-left">
											Items <strong>({cartItems.length})</strong>
										</span>
									</td>
									<td className="text-center">Qty.</td>
									<td className="text-right">Amount ({config.CURRENCY})</td>
								</tr>
							</thead>
							<tbody>
								{
									cartItems.map(product => {
										return (
											<Cart key={product.id} product={product} {...this.props} />
										)
									})
								}
								<tr className="cart-total">
									<td>Total</td>
									<td className="text-center">{cartTotal.totalItems}</td>
									<td className="text-right">
										{config.CURRENCY + ' ' + cartTotal.totalCost + '/-'}
									</td>
								</tr>
							</tbody>
						</table>
						<div className="cart-action full-w text-right">
							<button className="btn btn-danger" onClick={this.props.emptyCart} title="Empty Cart">
								<i className="fa fa-remove"></i>Empty Cart
							</button>
							<button className="btn btn-success" onClick={this.props.emptyCart} title="Empty Cart">
								<i className="fa fa-shopping-cart"></i>Checkout
							</button>
						</div>
					</div>
					:
					<div className="alert alert-danger">No items in your cart :(</div>
				}
			</div>
		)
	}
}

CartList.propTypes = {
	cartItems: PropTypes.array,
	emptyCart: PropTypes.func,
	cartTotal: PropTypes.shape({
		totalItems: PropTypes.number,
		totalCost: PropTypes.number
	})
}
