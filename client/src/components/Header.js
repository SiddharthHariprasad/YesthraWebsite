import React from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
import logo from './images/logo-pc.png';
const Header = () => {
    return(
        <header>
            <div className="" style={{'padding': '0% 5%'}}>
                {/* Nav to hold the navbar */}
                <Navbar 
                    className="navbar" 
                    alignLinks="right" 
                    brand={<a href="/" className="brand-logo"><img src={logo} alt="logo" height="30px" /></a>}
                    id="mobile-nav"
                    menuIcon={<Icon className="red-text text-accent-1">menu</Icon>}
                    options={{ 
                        draggable: true, 
                        edge: 'left', 
                        inDuration: 250, 
                        outDuration: 200, 
                        preventScrolling: true,
                    }}
                >
                    <NavItem href="/English" className="waves-effect waves-light">English</NavItem>
                    <NavItem href="/Malayalam" className="waves-effect waves-light">Malayalam</NavItem>
                    <NavItem href="/Tamil" className="waves-effect waves-light">Tamil</NavItem>
                    <NavItem href="/Hindi" className="waves-effect waves-light">Hindi</NavItem>
                    <NavItem href="/JoinUs" className="waves-effect waves-light">Join Us</NavItem>
                    {/* <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem> */}
                </Navbar>
            </div>
        </header>
    );
}

export default Header;