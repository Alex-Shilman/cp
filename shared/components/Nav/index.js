import React, { Component }     from 'react';
import Navbar                   from 'react-bootstrap/lib/Navbar';
import Nav                      from 'react-bootstrap/lib/Nav';
import NavItem                  from 'react-bootstrap/lib/NavItem';
import NavDropdown              from 'react-bootstrap/lib/NavDropdown';
import MenuItem                 from 'react-bootstrap/lib/MenuItem';
import { LinkContainer }        from 'react-router-bootstrap'
import { connect }              from 'react-redux';

(process.env.Browser) && require('./Nav.less');

const UserIcon = ({
    children
}) => (
    <span className="cp-Nav_User">
        <svg className="cp-Nav_User-Person" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle className="colorable svg-white-default" stroke="currentColor" fill="none" cx="12" cy="10" r="3.5"/>
            <path className="colorable svg-white-default" stroke="currentColor" fill="none" d="M12,14c-4,0-7.21,2.67-7.47,6.05a11,11,0,0,0,14.95,0C19.21,16.67,16,14,12,14Z"/>
            <path className="colorable svg-white-default" stroke="currentColor" fill="none" d="M23,12A11,11,0,1,0,4.53,20.05C4.79,16.67,8,14,12,14s7.21,2.67,7.47,6.05A11,11,0,0,0,23,12Z"/>
        </svg>
    { children }
    </span>
)



@connect((state, ownProps) => ({
    user: state.user
}), null)
export default class Navigation extends Component{
    render(){
        const { signIn, user } = this.props;
        debugger;
        const Person = ({title}) => (
            (user && user.profile)
                  ?  (user.profile.picture)
                        ?   <span className="cp-Nav_User">
                                <img className="cp-Nav_User-Avatar" src={user.profile.picture} />
                                {user.profile.name}
                            </span>
                        : <UserIcon>{ user.profile.name }</UserIcon>
                  :   <UserIcon>{ title }</UserIcon>
        );

        return(
            <Navbar inverse fixedTop className="cp-Nav">
                <div className="container">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <div className="cp-Nav__Block">
                                    <span className="cp-Nav__Block-Logo">Cp</span>
                                </div>
                                <span className="cp-Nav__Text">CarPatron</span>
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Sell My Car</NavItem>
                            <NavItem eventKey={2} href="#">Car Values</NavItem>
                            <NavDropdown eventKey={3} title="Questions" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>

                        <Nav
                            className="cp-Nav__UserNav"
                            pullRight>
                            <NavDropdown eventKey={4} title={<Person title="My Account"/>} id="basic-nav-dropdown">
                                {
                                    (user && user.profile)
                                        ? <MenuItem eventKey={4.1} href="/auth/logout">Sign out</MenuItem>
                                        : <MenuItem eventKey={4.1} onClick={signIn}>Sign in</MenuItem>
                                }
                                {
                                    (user && user.profile)
                                        && <LinkContainer to="user/profile">
                                                <MenuItem eventKey={4.1}>My Profile</MenuItem>
                                           </LinkContainer>
                                }
                                {
                                    !(user && user.profile)
                                        && <MenuItem eventKey={4.2} onClick={signIn}>Sign up</MenuItem>
                                }
                                <MenuItem divider />
                                <MenuItem eventKey={4.3}>Tips</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={4.4}>Price Alerts</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

