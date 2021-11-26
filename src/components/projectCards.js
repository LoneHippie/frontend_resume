import React, { useEffect, useRef } from 'react';

import useWindowDimensions from '../hooks/useWindowDimensions';

import './../styles/projectCards.scss';

const ProjectCards = () => {

    const { screenWidth } = useWindowDimensions();

    const projectsRef = useRef();

    //adds initial animation on project cards with intersection observer. Has case for desktop and mobile
    useEffect(() => {
        const projectOptions = {
            root: null,
            rootMargin: '-25px'
        };

        if (screenWidth > 750) {
            const sectionProjects = projectsRef.current;

            const projectObserverDesktop = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { return };
            
                    entry.target.classList.add('loaded-desktop');
                    observer.unobserve(entry.target);
                });
            }, projectOptions);

            projectObserverDesktop.observe(sectionProjects);
        } else {
            const sectionProjects = projectsRef.current.querySelectorAll('.project-card');

            const projectObserverMobile = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { return };
            
                    entry.target.classList.add('loaded-mobile');
                    observer.unobserve(entry.target);
                });
            }, projectOptions);

            sectionProjects.forEach(section => {
                projectObserverMobile.observe(section);
            });
        }
    }, [screenWidth]);

    return (
        <section className="project-container" ref={projectsRef}>

            <div className="project-card" id="project-1">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-anireka.png'} alt="anireka laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-anireka.png'} alt="anireka tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-anireka.png'} alt="anireka phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">AniReka</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A website/PWA for finding new anime recommendations and getting detailed info on different series/movies using React, TS and GraphQL
                    </p>

                    <div className="project-card__info--tech tech-long">
                        <img src={'static/react.svg'} alt="ReactJS" title="ReactJS"></img>
                        <img src={`static/typescript.svg`} alt="TypeScript" title="TypeScript"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={`static/figma.svg`} alt="figma" title="figma"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://www.anireka.com">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/anireka">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card" id="project-2">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-dd.png'} alt="Drinkdex laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-dd.png'} alt="Drinkdex tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-dd.png'} alt="Drinkdex phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">Drinkdex</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A MERN stack web application for creating, saving and sharing cocktail recipes. Gets data and authenticates users via a home made API
                    </p>

                    <div className="project-card__info--tech tech-long">
                        <img src={'static/react.svg'} alt="ReactJS" title="ReactJS"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={'static/node-js.svg'} alt="NodeJS" title="NodeJS"></img>
                        <img src={'static/mongodb.svg'} alt="MongoDB" title="MongoDB"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://drinkdex-v1.herokuapp.com/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/drinkdex">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card" id="project-3">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-platform.png'} alt="platform laptop mockup" loading="lazy"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-platform.png'} alt="platform tablet mockup" loading="lazy"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-platform.png'} alt="platform phone mockup" loading="lazy"></img>

                    <span className="project-card__mockups--title">Platform Mag</span>
                </div> 

                <div className="project-card__info">

                    <p className="text-block">
                        A freelance project for a political news site/blog using Gatsby, GraphQL and Contentful CMS  
                    </p>

                    <div className="project-card__info--tech">
                        <img src={'static/gatsby.svg'} alt="GatsbyJS" title="GatsbyJS"></img>
                        <img src={'static/sass.svg'} alt="sass" title="sass"></img>
                        <img src={'static/figma.svg'} alt="Figma" title="Figma"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://www.theplatformmag.com">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/the-platform-mag">Repo</a>
                    </div>

                </div>

            </div>

        </section>
    )
};

export default ProjectCards;
