import React, { Component } from 'react';
import IconCart from '../../../TuanComponents/IconCart';
import {  NavLink } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header className="site-header">
                <div className="container">
                    <div className="row">
                        <div className="site-logo retina pull-left">
                            <a href="/home"><img src="../images/logo.png" width="160" alt="Logo"/></a>
                        </div>
                        <nav role="navigation" className="navbar pull-right" style={{padding: '0', margin: '0'}}>
                            <div className="navbar-header">
                                <button type="button" data-toggle="collapse" data-target=".site-navigation" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="fa fa-bars"></span></button>
                            </div>
                            <ul className="site-navigation">
                                <li className="active"><a href="/home">home</a></li>
                                <li><a href="/menu">menu</a>
                                    {/* <ul className="sub-menu">
                                        <li><a href="elements.html">elements</a></li>
                                        <li><a href="portfolio.html">portfolio</a></li>
                                        <li><a href="404.html">error 404</a></li>
                                        <li><a href="search.html">search page</a></li>
                                        <li><a href="coming-soon.html" target="_blank">coming soon</a></li>
                                    </ul> */}
                                </li>
                                <li><a href="/blog">blog</a></li>
                                <li><a href="/about">about</a></li>
                                <li><a href="#reservation">reservation</a></li>
                                
                                <li><a href="#contact">contact</a></li>
                                <li><NavLink to='/payment'><IconCart /></NavLink></li>
                                <li><a href ="/admin" className="fa fa-user" style={{color:'white'}} aria-hidden="true"></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
          </header>
        )
    }
}
export default Header;