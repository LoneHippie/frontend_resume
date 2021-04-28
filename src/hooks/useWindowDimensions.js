import { useEffect, useState } from 'react';

function getWindowDimensions() {
    // const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
    let screenWidth;
    let screenHeight;

    if (typeof window !== 'undefined') {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }

    return {
        screenWidth,
        screenHeight
    };
};
  
export default function useWindowDimensions() {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;

    // let width;
    // let height;

    // if (typeof window !== undefined || typeof window !== 'undefined') {
    //     width = window.innerWidth;
    //     height = window.innerHeight;
    // };

    // const [ windowDimensions, setWindowDimensions ] = useState({ windowHeight: height, windowWidth: width });

    // useEffect(() => {
    //     //perform window size check ever X ms for performance
    //     // const debouncedHandleResize = debounce(function handleResize() {
    //     //     setWindowDimensions({ windowHeight: height, windowWidth: width });
    //     // }, 1000);
    //     function handleResize() {
    //         setWindowDimensions()
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);

    // }, []);

    // return windowDimensions;
};  