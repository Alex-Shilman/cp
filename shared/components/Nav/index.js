import React, { Component } from 'react';

(process.env.Browser) && require('./Nav.scss');

export default class Nav extends Component{
    render(){
        return(
            <nav className="cp-Nav navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">CarPatron</a>
                    </div>
                </div>
            </nav>
        );
    }
}