import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';

class Sidebar extends Component {
    componentWillMount(){
        $(document).ready(function(){
        $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true, // Choose whether you can drag to open on touch screens,
            });
        });
    }

    render(){
        return(
            <div>
                
                
            </div>
        );
    }
}
export default Sidebar;