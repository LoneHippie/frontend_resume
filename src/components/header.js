import React from 'react';
import { Link } from 'gatsby';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

import useWindowDimensions from '../hooks/useWindowDimensions';

import './../styles/header.scss';

const Header = () => {

    const { screenWidth } = useWindowDimensions();

    return (
        <>    
            <div className="header-background"></div>

            <header className="header-container">

                <h1 className="header--logo"><Link to="/">JORDAN H</Link></h1>

                {
                    screenWidth > 750 ? (
                        <DesktopNav />
                    ) : (
                        <MobileNav />
                    )
                }

            </header>
        </>
        
    )
};

export default Header;