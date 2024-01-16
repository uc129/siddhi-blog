import AboutMe from "../components/About"
import NavBar from "../components/navbar"
import '../styles/rotate.css'
import ThreeD from "../utils/three"
import Footer from '../components/footer'



const Landing = () => {

    window.onload = () => ThreeD()




    return (
        <div className="w-screen  h-full bg-cover bg-white font-hero">

            <NavBar />

            <div className="wrapper w-screen h-screen   ">

                <div className="container w-full h-full  items-center justify-center flex  mx-auto ">

                    <div className="hero w-[60%]  h-[40%] mx-auto pointer-events-none ">


                        {/*  */}
                        <div className="flex flex-col  justify-center
                         text-5xl md:text-6xl xl:text-8xl font-hero font-bold">
                            <span>
                                An  Experienced
                            </span>
                            <span>
                                Artist and  Curator
                            </span>
                        </div>


                        {/*  */}
                        <div className="w-full text-4xl lg:text-5xl xl:text-8xl font-normal 
                        flex  gap-4 items-center">
                            <div className="flex ">
                                <div className="flex items-center gap-4">
                                    <span className="hyphen inline-block w-16 h-[2px] bg-black "> </span>
                                    <span className=""> Based </span>
                                    <span> in</span>
                                </div>

                                <div className="pl-8 xl:w-[40%] flex  gap-4 items-start pt-5">
                                    <img src='/assets/icons/flower.svg' alt='flower' className="w-5 rotate inline-block" />
                                    <h6 className="flex flex-wrap font-mono ">
                                        I'm Unnati Chaudhary, a 20-year-old artist and designer.
                                        My mission is to enhance human creativity and inspiration through thoughtful design, bringing a touch of magic to every project.
                                    </h6>
                                </div>

                            </div>
                        </div>




                        <div className="p-2 flex justify-between mx-auto">
                            <h5 className="text-xs pl-10 font-mono"> Infused by my heritage from Bharat</h5>
                            <div id='three-d-cube'>
                            </div>
                            <span className=" text-5xl xl:text-8xl font-bold ">New</span>
                            <span className=" text-5xl xl:text-8xl font-bold ">Delhi</span>

                        </div>



                    </div>





                </div>


            </div>
            <AboutMe />


            <Footer />

        </div >
    )
}


export default Landing