import React from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
// import logo from './images/logo-pc.png';
const Header = () => {
    return(
        <header>
            <div className="">
                {/* Nav to hold the navbar */}
                <Navbar 
                    className="navbar"
                    style={{'padding': '0% 5%'}} 
                    alignLinks="right" 
                    // brand={<a href="/" className="brand-logo"><img src={logo} alt="logo" height="30px" /></a>}
                    brand={<a href="/" className="brand-logo blue-grey-text text-darken-4">YESTHRA</a>}
                    id="mobile-nav"
                    menuIcon={<Icon className="blue-grey-text text-darken-4">menu</Icon>}
                    options={{ 
                        draggable: true, 
                        edge: 'left', 
                        inDuration: 250, 
                        outDuration: 200, 
                        preventScrolling: true,
                    }}
                >
                    <NavItem href="/English" className="blue-grey-text text-darken-4 waves-effect waves-light">English</NavItem>
                    <NavItem href="/Malayalam" className="blue-grey-text text-darken-4 waves-effect waves-light">Malayalam</NavItem>
                    <NavItem href="/Tamil" className="blue-grey-text text-darken-4 waves-effect waves-light">Tamil</NavItem>
                    <NavItem href="/Hindi" className="blue-grey-text text-darken-4 waves-effect waves-light">Hindi</NavItem>
                    <NavItem href="/JoinUs" className="blue-grey-text text-darken-4 waves-effect waves-light">Join Us</NavItem>
                    {/* <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem> */}
                </Navbar>
            </div>
        </header>
    );
}

export default Header;