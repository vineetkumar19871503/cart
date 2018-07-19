import React, {Component} from 'react';
import banner from '../../static/images/logo.png';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
export default class HeaderMiddle extends Component {
  constructor() {
    super();
    this.timeout = 0;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isMenuActive: false,
      menuCls: null,
      transitionCls: null
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.onResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }
  onResize() {
    //prevent css transition while screen is resizing
    const self = this;
    const transitionCls = self.state.transitionCls;
    if (!transitionCls) {
      self.setState({transitionCls: 'no-transition'})
    }
    self.timeout = setTimeout(() => {
      self.setState({transitionCls: null})
    }, 50);
  }
  toggleMenu() {
    const menuCls = this.state.menuCls == null
      ? 'stack-menu'
      : null;
    this.setState({menuCls: menuCls});
  }
  render() {
    return (
      <div className="container">
        <div className="hdr-middle row pos-rel test">
          <div className="pull-left banner">
            <ul>
              <li>
                <Link to="/">
                  <img alt="E-Shopper" src={banner}/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="shop-menu  pull-right">
            <ul className={"hdr-menu " + this.state.menuCls + " " + this.state.transitionCls} onClick={this.toggleMenu}>
              <li>
                <Link to="/">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fa fa-shopping-cart pos-rel">
                    {this.props.totalItems > 0
                      ? <span className="cart-count pos-abs">{this.props.totalItems}</span>
                      : null
}
                  </i>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="sales">
                  <i className="fa fa-bar-chart"></i>
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-lock"></i>
                  Login
                </Link>
              </li>
            </ul>
            <a href="javascript:void(0)" className="nav-btn" onClick={this.toggleMenu}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

HeaderMiddle.propTypes = {
  totalItems: PropTypes.number
}
