const iconOptions = {
    root: null,
    rootMargin: '-50px'
};

const projectOptions = {
    root: null,
    rootMargin: '-25px'
};

export const iconObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return };

        entry.target.classList.add('loaded');
        
        observer.unobserve(entry.target);
    });
}, iconOptions);

export const projectObserverDesktop = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return };

        entry.target.classList.add('loaded-desktop');

        observer.unobserve(entry.target);
    });
}, projectOptions);

export const projectObserverMobile = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return };

        console.log(entry.target)
        entry.target.classList.add('loaded-mobile');

        observer.unobserve(entry.target);
    });
}, projectOptions);