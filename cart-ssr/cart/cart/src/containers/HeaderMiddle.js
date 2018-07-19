import HeaderMiddle from '../components/Header/HeaderMiddle';
import {
  connect
} from 'react-redux';
const mapStateToProps = (state) => {
  return {
    totalItems: state.cart.items.length
  }
}
export default connect(mapStateToProps)(HeaderMiddle);
