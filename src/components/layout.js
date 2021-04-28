import React from 'react';

import Header from './header';
import Footer from './footer';

import '@fontsource/source-sans-pro';
import '@fontsource/roboto';

import './../styles/base.scss';
import './../styles/layout.scss';

const Layout = (props) => {
    return (
        <main className="layout-container">
            <section className="layout-content">
                <Header />
                <section className="layout-content--body">
                    {props.children}
                </section>
            </section>
            <Footer />    
        </main>
    )
};

export default Layout;