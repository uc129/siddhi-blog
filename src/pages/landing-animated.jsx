import { useContext } from "react";
import AboutMe from "../components/About";
import LandingHero from "../components/Landing/hero";
import { ScrollContext } from '../utils/scrollObserver';
const AnimatedLanding = () => {

    const { scrollY } = useContext(ScrollContext)


    console.log(scrollY, 'scroll');



    return (
        <div className="wrapper flex flex-col gap-[14em] bg-black">
            <LandingHero />

            <div id="about" className="scroll-smooth">
                <AboutMe />
            </div>

        </div>
    )

}

export default AnimatedLanding;