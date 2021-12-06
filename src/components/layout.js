import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

import '@fontsource/source-sans-pro';
import '@fontsource/roboto';

import favicon from '../../public/static/jh-logo-1.png';

import './../styles/base.scss';
import './../styles/layout.scss';

const Layout = (props) => {
    return (
        <main className="layout-container">

            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Jordan Hlebechuk | Web Developer</title>
                <link rel="icon" href={favicon} />
                <meta name="title" content="Jordan Hlebechuk | Web Developer" />
                <meta name="description" content="Jordan Hlebechuk, professional web and software developer for hire" />
            </Helmet>

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