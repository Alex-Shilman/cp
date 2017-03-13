import React, { Component } from 'react';
import { Link }             from 'react-router';

export default class Sidebar extends Component {
    render(){
        return (
            <div className="cp-Profile__Sidebar">
              <ul style={{lineHeight:'40px'}}>
                  <li>
                      <Link
                          to="user/profile"
                          activeStyle={{color: '#ff690f'}}>
                          My Profile
                      </Link>
                  </li>
                  <li>
                      <Link
                          to="user/media"
                          activeStyle={{color: '#ff690f'}}>
                          Photos and Video
                      </Link>
                  </li>
                  <li>
                      <Link
                          to="user/security"
                          activeStyle={{color: '#ff690f'}}>
                          Trust and Verification
                      </Link>
                  </li>
              </ul>

              <Link
                  to="user/profile"
                  activeClassName="btn btn-block"
                  style={{border: '1px solid #ff690f', color: '#ff690f', marginTop: 20}}>
                  View Profile
              </Link>
            </div>
        );
    }
}