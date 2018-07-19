import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './cart.css';
export default class Cart extends Component {
  constructor() {
    super();
    this.updateQty = this.updateQty.bind(this);
    this.state = {
      qty: 0,
      error: null,
      unitPrice: 0
    };
  }
  async componentWillMount() {
    const {product} = this.props;
    await new Promise((resolve) => {
      this.setState({qty: product.qty});
      resolve();
    });
    this.calculatePrice();
  }
  calculatePrice() {
    const price = this.state.qty * this.props.product.price;
    this.setState({unitPrice: price});
  }
  updateQty(e) {
    let {product, updateQty} = this.props;
    let qty = e.target.value;
    let err = null;
    if (qty == '' || /^\d+$/.test(qty)) {
      if (qty > product.maxQty) {
        qty = 1;
        err = 'Max ' + product.maxQty + ' available';
        //hide error message after 1 second
        setTimeout(() => {
          this.setState({error: null});
        }, 1000)
      }
      let unitPrice = qty * product.price;
      this.setState({qty: qty, unitPrice: unitPrice, error: err});
      updateQty(product.id, parseInt(qty));
    }
  }
  render() {
    let product = this.props.product;
    return (
      <tr key={product.id} title={product.name}>
        <td>
          <a href={product.url} className="desc" target="_blank">
            <img alt={product.name} src={product.image} className="in-block"/>
            <span className="in-block">{product.name}</span>
          </a>
        </td>
        <td className="text-center pos-rel">
          <input type="text" value={this.state.qty} onChange={this.updateQty} className="textbox qty"/>
          <ReactCSSTransitionGroup transitionName="fade-in" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
            {this.state.error
              ? <span key='transition-err' className="pos-abs txt-danger">
                  {this.state.error}
                </span>
              : null
}
          </ReactCSSTransitionGroup>
        </td>
        <td className="text-right price">{this.state.unitPrice + '/-'}</td>
      </tr>
    )
  }
}

Cart.propTypes = {
  product: PropTypes.shape({id: PropTypes.number, qty: PropTypes.number, maxQty: PropTypes.number, name: PropTypes.string, price: PropTypes.number}),
  updateQty: PropTypes.func

}
