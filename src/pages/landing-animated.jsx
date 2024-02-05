import { useContext } from "react";
import AboutMe from "../components/About";
import LandingHero from "../components/Landing/hero";
import { ScrollContext } from '../utils/scrollObserver';
const AnimatedLanding = () => {

    const { scrollY } = useContext(ScrollContext)
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollProgress = (scrollY / (scrollHeight - clientHeight)) * 100;










    return (
        <div className="wrapper flex flex-col gap-[14em] bg-black">
            <LandingHero />

            <div id="about" className="scroll-smooth">
                <AboutMe parentScroll={scrollProgress} />
            </div>

        </div>
    )

}

export default AnimatedLanding;