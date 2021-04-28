import { useEffect, useState } from 'react';

function getWindowDimensions() {
    let screenWidth;
    let screenHeight;

    if (typeof window !== undefined) {
        const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

        return {
            screenWidth,
            screenHeight
        }
    } else {
        screenWidth = 1000;
        screenHeight = 1000;

        return {
            screenWidth,
            screenHeight
        }
    } 
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
};  