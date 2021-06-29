import React from 'react';
import Particles from 'react-particles-js';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

import useWindowDimensions from '../hooks/useWindowDimensions';

import './../styles/header.scss';

const Header = () => {

    const { screenWidth } = useWindowDimensions();

    return (
        <>    
            <div className="header-background">
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": 36
                        },
                        "size": {
                            "value": 3.5,
                            "random": true,

                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 0.5
                            }
                        },
                        "move": {
                            "random": true,
                            "speed": 1.5
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 50
                        }
                    }
                }}/>
            </div>

            <header className="header-container">

                <h1 className="header--logo">JORDAN H</h1>

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