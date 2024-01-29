import AboutMe from "../components/About"
import NavBar from "../components/navbar"
import '../styles/rotate.css'
// import ThreeD from "../utils/ThreeJS/three"
import Footer from '../components/footer'
import { useContext, useRef } from "react"
import { ScrollContext } from "../utils/scrollObserver"


// import { imageLinks } from "../utils/imageLinks"
import PillarContainer from "../utils/ThreeJS/pillarContainer"
// import SpiderContainer from "../utils/ThreeJS/spider/container"
// import Elephant from "../components/elephant"


const Landing = () => {

    // window.onload = () => ThreeD()
    const refContainer = useRef(null)

    const { scrollY } = useContext(ScrollContext)
    // console.log(scrollY, 'scrollY from landing');

    const { current: elContainer } = refContainer;

    let progress = 0;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);  // calculate progress of scroll in terms of percentage of height of container between 0 and 1
    }





    return (
        <div ref={refContainer} className="w-screen h-full bg-cover bg-white font-hero overflow-hidden" >

            {/* <div className="flex">
                <img src={imageLinks[7].link} alt="motif1" className="absolute top-0 left-0 h-[100%] transition-all duration-0 ease-in-out lg:h-[140%]  opacity-[30%] pointer-events-none overflow-hidden "
                    style={{ transform: `rotate(${progress / 8 * 360}deg)` }}
                />
            </div> */}



            <NavBar />

            <div className="wrapper max-w-screen text-[10px] md:text-md">

                <div className="container w-full  h-[10%]  items-center justify-center flex  mx-auto  pt-16">

                    <div className="hero w-full  lg:w-[60%]  h-[40%] mx-auto pointer-events-none p-4 ">

                        {/* Headline */}
                        <h1 className="flex flex-col  justify-center pl-8 md:pl-0 text-3xl md:text-6xl font-hero font-bold">
                            An  Experienced Artist  <br /> and  Curator
                        </h1>

                        {/*  */}

                        <div className="p-2 col-span-5 flex  mx-auto text-sm md:text-md lg:text-lg xl:text-xl">
                            <h5 className="pl-10 "> Infused by my heritage from Bharat &nbsp; </h5>
                            <span className=" font-bold underline ">New Delhi</span>
                        </div>


                        <div className=" w-[80%] md:w-[90%] flex flex-col text-justify  mx-auto col-span-6  gap-2 items-start pt-5 font-mono text-xs md:text-lg ">

                            <div className="flex gap-4">
                                {/* flower */}
                                <img src='/assets/icons/flower.svg' alt='flower' className="w-8 md:w-12 rotate inline-block" />
                                {/* bio */}
                                <h6 className="flex  flex-wrap">
                                    I'm Unnati Chaudhary, a 20-year-old artist and designer.
                                    My mission is to enhance human creativity and inspiration through thoughtful design, bringing a touch of magic to every project.
                                </h6>
                            </div>

                            <div className="w-screen -translate-y-5 md:-translate-y-10 md:-translate-x-24  xl:-translate-x-44 flex justify-center">
                                <div id='three-d-cube' />
                            </div>
                        </div>

                    </div>

                    <div className=" hidden xl:block ">
                        <PillarContainer />
                    </div>






                </div>
            </div>
            <AboutMe />
            <div>
                {/* <SpiderContainer /> */}
            </div>
            <Footer />

        </div >
    )
}


export default Landing