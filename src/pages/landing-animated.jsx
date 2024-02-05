import { useContext } from "react";
import AboutMe from "../components/About";
import LandingHero from "../components/Landing/hero";
import { ScrollContext } from '../utils/scrollObserver';
const AnimatedLanding = () => {

    const { scrollY } = useContext(ScrollContext)


    let clientH = window.innerHeight;

    console.log(scrollY, clientH);



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