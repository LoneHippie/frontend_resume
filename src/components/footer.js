import React from 'react';

import './../styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <h3>Created by Jordan Hlebechuk &#169;&nbsp;{new Date().getFullYear()}</h3>

            <div className="contact-info">
                <span>(+972)053-715-4696</span>
                <span>lonehippie.dev@gmail.com</span>
            </div>
        </footer>
    )
};

export default Footer;