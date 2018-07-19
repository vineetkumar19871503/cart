import {
  connect
} from 'react-redux';
import Product from '../components/Product/';
import {
  addToCart,
  removeFromCart
} from '../actions/Cart';
import {
  checkCartExistence
} from '../reducers/Products';
const mapStateToProps = (state, props) => {
  return {
    isInCart: checkCartExistence(state, props)
  }
}
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
