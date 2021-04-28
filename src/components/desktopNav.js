import React from 'react';

import './../styles/desktopNav.scss';

const desktopNav = () => {

    function scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    return (
        <nav className="nav-desktop">
            <span onClick={() => scrollSmoothTo('about')}>About</span>
            <span onClick={() => scrollSmoothTo('projects')}>Projects</span>
            <span onClick={() => scrollSmoothTo('contact-me')}>Contact</span>
        </nav>
    )
};

export default desktopNav;