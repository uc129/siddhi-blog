import { useState, useEffect, createContext, useContext } from 'react';

const clientContext = createContext();

const ClientProvider = ({ children }) => {

    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setIsTablet(window.innerWidth <= 1024);
    }, []);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024);
    }, []);


    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        setIsLaptop(window.innerWidth >= 1366);
    }, []);

    const [isLargeDesktop, setIsLargeDesktop] = useState(false);

    useEffect(() => {
        setIsLargeDesktop(window.innerWidth >= 1920);
    }, []);

    const [isExtraLargeDesktop, setIsExtraLargeDesktop] = useState(false);

    useEffect(() => {
        setIsExtraLargeDesktop(window.innerWidth >= 2560);
    }, []);


    const [isRetina, setIsRetina] = useState(false);

    useEffect(() => {
        setIsRetina(window.devicePixelRatio > 1);
    }, []);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch('ontouchstart' in window);
    }, []);

    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        setIsPortrait(window.innerHeight > window.innerWidth);
    }, []);

    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {

        setIsLandscape(window.innerHeight < window.innerWidth);

    }, []);

    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        setIsOnline(navigator.onLine);
    }, []);

    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        setIsOffline(!navigator.onLine);
    }, []);

    return (
        <clientContext.Provider value={{ isSafari, isMobile, isTablet, isDesktop, isLaptop, isLargeDesktop, isExtraLargeDesktop, isRetina, isTouch, isPortrait, isLandscape, isOnline, isOffline }}>
            {children}
        </clientContext.Provider>
    )

}

export default ClientProvider;

export const useClient = () => {
    return useContext(clientContext);
}