import React from 'react'
import logo from '../images/logo.svg'
import '../styles/Nav.scss'

const Nav = ({showNav, togggleMenu}) => {
    return (
        <>
            <header>
                <div id="header-left">
                    <div id="logo">
                    <img src={logo} alt="logo"/> 
                    </div>
                    <nav>
                        <ul>
                            <li><a  href="#">Features</a></li>
                            <li><a  href="#">Pricing</a></li>
                            <li><a  href="#">Resources</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="header-right">
                    <button id="login-btn">Login</button>
                    <button id="signup-btn" className="btn">Sign Up</button>
                </div>
                <div id="menu-icon" onClick={togggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div id="hamburger-menu" className={showNav ? "showNav" : "hideNav"}>
                <nav>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#" class="btn">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Nav;