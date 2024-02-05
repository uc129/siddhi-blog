import { useContext } from "react";
import AboutMe from "../components/About";
import LandingHero from "../components/Landing/hero";
import { ScrollContext } from '../utils/scrollObserver';
import Portfolio from "../pages/portfolio"
const AnimatedLanding = () => {

    const { scrollY } = useContext(ScrollContext)
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollProgress = (scrollY / (scrollHeight - clientHeight)) * 100;










    return (
        <div className="wrapper  flex flex-col  lg:gap-[14em] bg-black">

            <div>
                <LandingHero />
            </div>

            <div id="about" className=" ">
                <AboutMe parentScroll={scrollProgress} />
            </div>

            {/* 
            <div id='portfolio' className="lg:-mt-44" >
                <Portfolio bgColor={'bg-white'} />
            </div> */}

        </div>
    )

}

export default AnimatedLanding;