

import '../styles/background.css'
// import { useState } from 'react'




const AboutMe = () => {

    // const [opacity, setOpacity] = useState(0)

    const handleMouseEnter = () => {
        document.getElementById('box2').classList.add('box-hover')
        document.getElementById('box1').classList.add('box-hover')
        document.getElementById('box1').classList.remove('box1-bgImage')





    }

    const handleMouseLeave = () => {
        document.getElementById('box2').classList.remove('box-hover')
        document.getElementById('box1').classList.add('box1-bgImage')

    }





    return (

        <div id='about-me' className="w-[70%]  mx-auto pb-40">

            <div className="grid grid-cols-12">

                {/* col - 1  */}
                <span className='text-xs'>
                    About
                </span>



                {/* col- 2 to 6  */}

                <h1 className="w-30 col-span-3 text-5xl">
                    Privileged Working With MENA's Brightest
                </h1>

                {/* col- 6 to 9  */}

                <div className="grid col-span-3 gap-4 text-sm  grid-rows-3 h-[90%] font-mono font-thin ">

                    <h5 className="w-25 row-start-2  float-right flex flex-col gap-4">
                        <p className="text-xs leading-relaxed ">
                            Over the past 15 years, I've had the privilege of collaborating with MENA titans like Gucci, Emirates NBD, MG Motors, Museum of the Future and an array of other visionary leaders.
                        </p>

                        <p className="text-xs leading-relaxed">
                            From the ground-breaking to the game-changing, I've supported businesses to raise the bar of user experience.
                        </p>

                        <p className="text-xs leading-relaxed">
                            Currently working at TCS Interactive as UX/UI Design Lead, Where I guide an exceptional talented team on a mission to craft astonishing solutions for TCS partners.

                        </p>
                    </h5>
                </div>

                {/* col- 9 to 12  */}

                {/* hover:opacity-80 transition-opacity duration-500 ease-in-out  */}

                <div id='profile' className={`col-start-10 col-span-3`}>

                    <div id='box1' className='box box1-bgImage'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    // first image is bg image for box1
                    >
                        <div className='hid-box' id='box2'>
                            {/* // second image is bg image for box2 */}
                        </div>
                    </div>




                </div>

            </div>





        </div >
    )





}

export default AboutMe