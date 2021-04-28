import React from 'react';

import './../styles/mobileNav.scss';

const mobileNav = () => {

    function scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            document.getElementById('nav-toggle').checked = false;
        }, 300);
    };

    return (
        <div className="nav-mobile">

            <input type="checkbox" className="nav-mobile__checkbox" id="nav-toggle"></input>
            
            <label htmlFor="nav-toggle" className="nav-mobile__button">
                <span className="nav-mobile__icon">&nbsp;</span>
            </label>

            <div className="nav-mobile__background">&nbsp;</div>

            <nav className="nav-mobile__nav">

                <ul className="nav-mobile__list">
                    <li className="nav-mobile__item"><span onClick={() => scrollSmoothTo('about')} className="nav-mobile__link">About</span></li>
                    <li className="nav-mobile__item"><span onClick={() => scrollSmoothTo('projects')} className="nav-mobile__link">Projects</span></li>
                    <li className="nav-mobile__item"><span onClick={() => scrollSmoothTo('contact-me')} className="nav-mobile__link">Contact</span></li>
                </ul>
            </nav>

        </div>
    )
}

export default mobileNav;