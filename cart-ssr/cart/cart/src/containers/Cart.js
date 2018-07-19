import {
  connect
} from 'react-redux';
import CartList from '../components/Cart/CartList';
import {
  emptyCart,
  updateQty
} from '../actions/Cart';
import {
  getCartItems,
  getTotal
} from '../reducers/Cart';
const mapStateToProps = (state) => {
  let cartItems = getCartItems(state);
  return {
    cartItems: cartItems,
    cartTotal: getTotal(cartItems)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
    updateQty: (id, qty) => dispatch(updateQty(id, qty))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
