import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About GPT3</a></p>
            <p><a href="#features">Open AI</a></p>
            <p><a href="#possibility">Possibilities</a></p>
            <p><a href="#blog">More Articles</a></p>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navbar ? "gpt3__navbar active" : "gpt3__navbar"}>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <a href='#home'><img src={logo} alt='logo' /></a>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>

            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
