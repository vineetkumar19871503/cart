import React, {Component} from 'react';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
//require('../../static/css/style.css');
export default class Layout extends Component{
	constructor(){
		super();	
	}
	render(){
		return (
			<div id="container" className="hello">
				<Header />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}