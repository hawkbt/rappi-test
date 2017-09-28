import React, { Component } from 'react';
import './style.css';
import logo from '../img/rappi.png';
import Sidebar from '../sidebar';
import $ from 'jquery';

class Header extends Component {
    componentWillMount(){

    };
    render(){
        return(
            <header>
            <nav>
                <div className="nav-wrapper #81d4fa light-blue lighten-3">
                    <a href="/" className="brand-logo center ">
                        <img src={logo} alt="" className="logo"/>
                    </a>
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <a href="" dataActivates="slide-out" className="button-collapse"><i className="fa fa-bars" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="side-nav">
                    <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                        <li>
                            <a className="collapsible-header">Dropdown <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            <div className="collapsible-body">
                            <ul>
                                <li><a href="">First</a></li>
                                <li><a href="">Second</a></li>
                                <li><a href="">Third</a></li>
                                <li><a href="">Fourth</a></li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                    </li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                    <li><a href="">First Sidebar Link</a></li>
                    <li><a href="">Second Sidebar Link</a></li>
                    <li><a className="dropdown-button" href="" data-activates="dropdown1">Dropdown <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="">First</a></li>
                        <li><a href="">Second</a></li>
                        <li><a href="">Third</a></li>
                        <li><a href="">Fourth</a></li>
                    </ul>
                </ul>
            </header>
        )
    }
}
export default Header;