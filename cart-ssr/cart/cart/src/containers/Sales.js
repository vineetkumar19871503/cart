import {
  connect
} from 'react-redux';
import {
  Sales
} from '../components/Sales/';
import salesData from '../data/sales';
import {
  importData
} from '../actions/Sales';
const mapDispatchToProps = (dispatch) => {
  return {
    importData: () => dispatch(importData(salesData))
  }
}
const mapStateToProps = () => {
  return {
    sales: salesData
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sales);
