import React, { Component } from 'react';
import LoginForm            from '../LoginForm';
const tabText = [ 'Sign up', 'Login' ];
(process.env.BROWSER) && require('./Tabs.less');


export default class Tabs extends Component {
    state = {
      currentTabIndex: 1
    }

    handleOnClick = (e) => {
        this.setState({ currentTabIndex: e.currentTarget.tabIndex })
    }

    render(){
        const { currentTabIndex } = this.state;
        const tabStyle = { left: `${currentTabIndex * 50}%` };

        return (
          <div className="cp-Tabs">
              <div className="cp-Tabs__Wrapper">
                  <button
                      tabIndex="0"
                      type="button"
                      onClick={this.handleOnClick}>

                      <div>
                          <span></span>
                          <div className="cp-Tabs__Wrapper__btn-text">{tabText[0]}</div>
                      </div>
                  </button>
                  <button
                      tabIndex="1"
                      type="button"
                      onClick={this.handleOnClick}>

                      <div>
                          <span ></span>
                          <div className="cp-Tabs__Wrapper__btn-text">{tabText[1]}</div>
                      </div>
                  </button>
              </div>
              <div style={{width: '100%'}}>
                  <div className="cp-Tabs__Slider" style={{...tabStyle}}></div>
              </div>

              <LoginForm buttonText={tabText[currentTabIndex]}/>
          </div>
        );
    }
}