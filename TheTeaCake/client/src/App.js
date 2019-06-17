import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import Home from './pages/client_page/home';
import Admin from './pages/admin/administrator';
import Collection from './pages/client_page/collection';

import BlogPage from './pages/client_page/blogpage';
import About from './pages/client_page/about';
import Order from './TuanComponents/Order';
import Header from './pages/client_page/components/header';
import store from './store';
import { getTypeProduct } from './actions/typeProduct';
import Payment from './TuanComponents/payment';
import SignIn from './pages/login/SignIn';
import SignupPage from './pages/login/SignupPage';
import {withRouter} from 'react-router'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        store.dispatch(getTypeProduct());
    }
    render() { 
        return ( 
            <div>
            {this.props.location.pathname!=='/admin' ?  <Header /> :""}
           
            
            <Route exact path="/" component = {Home}/>
            <Route exact path="/home" component = {Home}/>
            <Route exact path="/admin" component = {Admin}/>
            <Route exact path="/menu" component = {Collection}/>
            <Route exact path="/blog" component = {BlogPage}/>
            <Route exact path ="/about" component ={About}/>
            <Route exact path ="/order" component ={Order}/>
            <Route exact path ="/payment" component ={Payment}/>
            
        </div>
           
         );
    }
}
 
export default withRouter(App);