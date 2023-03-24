import React from 'react'
import "./NavBar.css"
import SignUp from './SignUp'
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>BuDdLiNg</div>
            <div className='nav-link'>
                <a href='home'>home</a>
                <a href='about'>about</a>
                <a href='contact'>contact</a>
                <a href='signup'>sign up</a>
                <a href='service'>service</a>
            </div>
            <div className='nav-toggle'>
                <div className='bar'></div>
            </div>
        </div>
    )
}

export default NavBar
