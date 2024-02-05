import '../styles/background.css'
const AboutMe = ({ parentScroll }) => {

    const handleMouseEnter = () => {
        document.getElementById('box2')?.classList.add('box-hover')
        document.getElementById('box1')?.classList.add('box-hover')
        document.getElementById('box1')?.classList.remove('box1-bgImage')
    }

    const handleMouseLeave = () => {
        document.getElementById('box2')?.classList.remove('box-hover')
        document.getElementById('box1')?.classList.add('box1-bgImage')
    }


    return (

        <div id='about-me' className="pb-20 px-24 w-screen  mx-auto overflow-hidden bg-black text-white">

            <div className="grid max-w-[80%]  gap-8 grid-cols-12 ">


                <div className='flex-col lg:flex gap-12 w-full col-span-11'>
                    <span className='text-xs  md:text-lg min-w-24 mr-12'>
                        About
                    </span>

                    <h1 className="w-30 col-span-11 text-5xl text-wrap">
                        Privileged Working With INDIA's Brightest
                    </h1>
                </div>



                <div className=" pt-12 col-span-10 min-w-[200px] max-w-[800px] mx-auto text-justify gap-4 text-sm   font-mono font-thin ">

                    <div className="w-25 float-right flex flex-col gap-4 text-sm  md:text-md  3xl:text-lg leading-relaxed tracking-wide text-deco background2 ">

                        <p>
                            <span className='bg-gray-500'> Over the past 5 years, I've had the privilege of collaborating with</span>
                            <span className='bg-gray-500'>INDIA's titans like Gucci, Emirates NBD, MG Motors, Museum of the Future and an array of other visionary leaders.</span>
                        </p>

                        <p> <span className='bg-gray-500'> From the ground-breaking to the game-changing, I've supported businesses to raise the bar of user experience.</span>  </p>

                        <p> <span className='bg-gray-500'>Currently working at TCS Interactive as UX/UI Design Lead, Where I guide an exceptional talented team on a mission to
                            craft astonishing solutions for TCS partners.</span>
                        </p>

                    </div>
                </div>

            </div>



            <div id='profile hidden lg:block'>
                <div id='box1 col-span-12' className='box box1-bgImage ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <div className='hid-box' id='box2' />
                </div>
            </div>

            <div className='info relative -bottom-16 left-[24em] hidden lg:block'>
                <h1> Unnati Chaudhary </h1>
                <h2> UX/UI Design Lead </h2>
                <h3> TCS Interactive </h3>
                <h4> New Delhi, India</h4>
            </div>

        </div >
    )





}

export default AboutMe