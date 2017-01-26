import React, { Component } from 'react';

(process.env.BROWSER) && require('./Banner.scss');

export default class Banner extends Component{
    render(){
        return (
            <div className="cp-Banner">
                <img src="/images/Audi-S4-2016-5120x2880-001.jpg" width="100%" height="100%"/>
                <div className="container">
                    <h1>Search hundreds of cars at once</h1>
                </div>
            </div>
        );
    }
}