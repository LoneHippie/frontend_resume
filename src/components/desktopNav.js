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
            <button aria-label="go to about section" onClick={() => scrollSmoothTo('about')}>About</button>
            <button aria-label="go to projects section" onClick={() => scrollSmoothTo('projects')}>Projects</button>
            <button aria-label="go to contact section" onClick={() => scrollSmoothTo('contact-me')}>Contact</button>
        </nav>
    )
};

export default desktopNav;