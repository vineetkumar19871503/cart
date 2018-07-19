import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Layout from './views/layouts/Layout';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
const Routes = () => (
	<Layout>
		<Route exact path='/' component={ Home } />
		<Route path="/about" component={ About } />
		<Route path="/notfound" component={ NotFound } />
	</Layout>	
)

export default Routes;