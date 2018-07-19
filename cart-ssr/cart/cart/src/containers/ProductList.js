import {
  connect
} from 'react-redux';
import {
  getProducts
} from '../reducers/Products';
import ProductList from '../components/Product/ProductList';
import {
  addToCart
} from '../actions/Cart';
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: id => dispatch(addToCart(id))
  }
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
