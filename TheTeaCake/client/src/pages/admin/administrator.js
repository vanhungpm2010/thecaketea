import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Sidebar from './components/sidebar';
import {Navbar} from './components/navbar';
import Products from './components/products/products';
import Dashboard from './components/dashboard';
import Blogs from "./components/blogs/blog";

class Admin extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="admin-page">
                    <Sidebar/>
                    <div className="main-panel">
                        <Navbar/>
                        <Route exact path={'/admin'} component={ Products } />
                        <Route path={'/admin/blog'} component={ Blogs } />
                    </div>
                    
                </div> 
            </BrowserRouter>  
        );
    }
}
export default Admin;