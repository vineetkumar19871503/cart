import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/';
import PropTypes from 'prop-types';
import '../main.css';
import 'font-awesome/css/font-awesome.min.css';
const Layout = (props) => (
  <div>
    <Header/> {props.children}
    <Footer/>
  </div>
)
export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
