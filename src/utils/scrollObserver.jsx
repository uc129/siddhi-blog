import { createContext, useCallback, useState, useEffect } from "react";

export const ScrollContext = createContext({ scrollY: 0 })





const ScrollObserver = ({ children }) => {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);


    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}



export default ScrollObserver


