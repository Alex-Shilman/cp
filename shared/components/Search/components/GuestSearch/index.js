import React, { Component } from 'react';
import SearchTabs from './components/SearchTabs'

(process.env.BROWSER) && require('./GuestSearch.scss');

export default class GuestSearch extends Component{
    render(){
        return (
            <div className="cp-GuestSearch">
                <SearchTabs />
            </div>
         )
    }
}