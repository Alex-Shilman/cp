import React, { Component } from 'react';
import cx                   from 'classnames';
import TabsContainer        from './components/TabsContainer';

(process.env.BROWSER) && require('./EmailLogin.less');

export default class EmailLogin extends Component {
    render(){
        const { classNames, isExtended } = this.props;
        return (
          <div className={cx("cp-EmailLogin", {[classNames]: !!classNames, "extended": isExtended })}>
            <TabsContainer/>

          </div>
        );
    }
}