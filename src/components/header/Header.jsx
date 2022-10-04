import React, {useState} from 'react';
import './header.scss';

const Header = () => {

    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const onClickLogo = () => {
        window.scroll(0,0);
        setIsActiveHamburger(false);
    }

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <a className="logo" href="#" onClick={onClickLogo}>
                        Mr.SNARK
                    </a>
                    <ul className="menu">
                        <li><a href="#DemoVideo">Demo Video</a></li>
                        <li><a href="#Partners">Partners</a></li>
                        <li><a href="#Features">Features</a></li>
                        {/*<li><a href="#Testimonials">Testimonials</a></li>*/}
                        <li><a href="#FAQ">FAQ</a></li>
                    </ul>
                    <button className="join">join now</button>


                    <ul className={isActiveHamburger ? "menu-xs active" : "menu-xs"}>
                        <li onClick={() => {setIsActiveHamburger(!isActiveHamburger)}}><a href="#DemoVideo">Demo Video</a></li>
                        <li onClick={() => {setIsActiveHamburger(!isActiveHamburger)}}><a href="#Partners">Partners</a></li>
                        <li onClick={() => {setIsActiveHamburger(!isActiveHamburger)}}><a href="#Features">Features</a></li>
                        {/*<li onClick={() => {setIsActiveHamburger(!isActiveHamburger)}}><a href="#Testimonials">Testimonials</a></li>*/}
                        <li onClick={() => {setIsActiveHamburger(!isActiveHamburger)}}><a href="#FAQ">FAQ</a></li>
                    </ul>
                    <button onClick={() => setIsActiveHamburger(!isActiveHamburger)} className={isActiveHamburger ? "join-xs active" : "join-xs"}>join now</button>


                    <button onClick={() => setIsActiveHamburger(!isActiveHamburger)} className={isActiveHamburger ? "hamburger active" : "hamburger"}>
                        <span className="bar bar-top"></span>
                        <span className="bar bar-mid"></span>
                        <span className="bar bar-bottom"></span>
                    </button>

                    {isActiveHamburger && <div className="bg-dark"></div>}
                </div>
            </div>
        </header>
    );
};

export default Header;