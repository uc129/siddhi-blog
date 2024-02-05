import { CgScrollV } from "react-icons/cg";

import NavBar from "../navbar";
import '../../styles/animations.css'
import '../../styles/landing.css'
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../utils/scrollObserver";
const LandingHero = () => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar')
        const flowers = document.querySelector('.flowers')
        const bugs = document.querySelector('.bugs')
        const grass = document.querySelector('.grass')
        const scrollButton = document.querySelector('.scrollButton')

        const timeout = setTimeout(() => {
            if (!navbar || !flowers) return
            navbar.classList.remove('opacity-0')
            flowers.classList.remove('opacity-0')
            grass.classList.remove('opacity-0')
        }, 2000)

        const timeout2 = setTimeout(() => {
            if (!bugs) return
            bugs.classList.remove('opacity-0')
        }, 3000)

        const timeout3 = setTimeout(() => {
            if (!scrollButton) return
            scrollButton.classList.remove('opacity-0')
        }, 4000)

        return () => { clearTimeout(timeout); clearTimeout(timeout2); clearTimeout(timeout3) }
    })

    let { scrollY } = useContext(ScrollContext)

    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollProgress = (scrollY / (scrollHeight - clientHeight)) * 100;
    let scrollWidth = 100 - scrollProgress;




    return (
        <>

            <div className="wrapper min-h-screen min-w-screen p-0 overflow-hidden bg-white ">

                <div className="navbar opacity-0 fadeInDownDelayed">
                    <NavBar />
                </div>

                <div className="  pointer-events-none ">
                    <img src="/assets/SVG/bugs.svg" alt="bugs" className="bugs opacity-0 fadeInDelayed absolute bottom-0 left-0 w-full  object-cover" />
                    <img src="/assets//SVG/wild-flowers.svg" alt="flowers" className="flowers opacity-0 fadeInUpFlower  absolute bottom-2 left-0 w-full  object-cover" />
                    <img src="/assets/SVG/grass.svg" alt="field" className="grass opacity-0 fadeInUpFlower absolute bottom-0 scale-110" />
                </div>


                <div className="hero-body z-10 font-grape font-bold tracking-widest  h-full w-full items-center justify-center flex flex-col gap-8 text-center">

                    <div className="header fadeinUp flex flex-col justify-center items-center gap-12 pt-12 " style={{ scale: `${scrollWidth / 80}` }}>

                        <div className=" flex flex-col justify-center items-center gap-4 ">
                            <img className="h-10" src="/assets/SVG/tag.svg" alt="tagline" />
                            <div className="hero-headline  text-5xl sm:text-7xl xl:text-8xl uppercase" > The Sunday Drip</div>
                        </div>

                        {/* <p className=" fadeinUp font-chakra w-[60%] text-justify text-sm  md:text-sm  lg:text-lg lg:w-[35%] lg:text-center"> */}
                        <p className=" fadeinUp font-chakra text-center w-[50%] transition-all duration-75 " >
                            Unnati Chaudhary is an independent artist based in Delhi. She graduated with a Master's degree in English from Ashoka University and has worked with art galleries and organisations in varying capacities. Struggling to balance the minimal and the maximal in her art and life, she is interested in the contours of language, selfhood, and home.
                        </p>

                    </div>

                    <div className="scrollButton opacity-0 flex flex-col justify-center items-center text-3xl pt-24 ">
                        <span className="animate-bounce"><CgScrollV /></span>
                    </div>

                </div>



            </div>

        </>
    )




}


export default LandingHero