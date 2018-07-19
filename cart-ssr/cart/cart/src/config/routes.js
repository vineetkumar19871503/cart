import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from '../elements/Layout';
import Loadable from 'react-loadable';
import Loading from '../components/Loading/';
import PropTypes from 'prop-types';

const LazyLoad = (props) => {
  //cloning props
  let routerProps = Object.assign({}, props);
  routerProps.component = Loadable({loader: props.component, loading: Loading})
  return <Route {...routerProps}/>;
}

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <LazyLoad exact path="/" component={() => import ("../components/Home/")}/>
      <LazyLoad path="/cart" component={() => import ("../containers/Cart")}/>
      <LazyLoad path="/sales" component={() => import ("../containers/Sales")}/>
    </Layout>
  </BrowserRouter>
)
export default Routes;

LazyLoad.propTypes = {
  component: PropTypes.func
}
