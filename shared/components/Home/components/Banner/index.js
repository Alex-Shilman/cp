import React, { Component } from 'react';
import GuestSearch from '../../../Search/components/GuestSearch';

(process.env.BROWSER) && require('./Banner.less');

export default class Banner extends Component{

    componentDidMount(){

    }
    render(){
        return (
            <div className="cp-Banner">
                <img src="/images/Audi-S4-2016-5120x2880-001.jpg" width="100%" height="100%"/>
                <div className="container">
                    <h3>Search hundreds of cars at once</h3>
                    <GuestSearch />
                </div>
            </div>
        );
    }
}