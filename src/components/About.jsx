

// import { useCookies } from 'react-cookie'
import '../styles/background.css'
import { useContext } from 'react';
import { ScrollContext } from '../utils/scrollObserver';
import { imageLinks } from '../utils/imageLinks';


const AboutMe = () => {

    // const [cookie] = useCookies(['user'])
    // console.log('cookie-about-page', cookie);

    const { scrollY } = useContext(ScrollContext)

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

        <div id='about-me' className="max-w-[80%]  bg-transparent  mx-auto pb-40 overflow-hidden">

            <div className="grid  gap-8 grid-cols-12">

                {/* row-1 */}
                <span className='text-xs  md:text-lg'>
                    About
                </span>

                <h1 className="w-30 col-span-11 text-5xl">
                    Privileged Working With <br />INDIA's Brightest
                </h1>



                {/* row-2  */}

                <div>
                    {/* empty */}
                </div>

                <div className=" pt-12 col-span-10 min-w-[200px] max-w-[800px] mx-auto text-justify gap-4 text-sm   font-mono font-thin ">
                    <div className="w-25 float-right flex flex-col gap-4 text-sm  md:text-md  3xl:text-lg leading-relaxed tracking-wide text-deco background2 ">

                        <p>
                            <span className='bg-gray-200'> Over the past 15 years, I've had the privilege of collaborating with</span>
                            <span className='bg-gray-200'>INDIA's titans like Gucci, Emirates NBD, MG Motors, Museum of the Future and an array of other visionary leaders.</span>
                        </p>

                        <p> <span className='bg-gray-200'> From the ground-breaking to the game-changing, I've supported businesses to raise the bar of user experience.</span>  </p>

                        <p> <span className='bg-gray-200'>Currently working at TCS Interactive as UX/UI Design Lead, Where I guide an exceptional talented team on a mission to
                            craft astonishing solutions for TCS partners.</span>
                        </p>

                    </div>
                </div>

                <div className='col-span-1'>
                    {/* empty */}
                </div>

                {/* row-3 */}
                <div className='col-span-12 h-[20vh]'>

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





            <img id='flower2' src={imageLinks[5].link} alt="flower-2" className="absolute top-[84em] -right-44  h-[30%] 
                transition-transform duration-0  lg:h-[60%]  opacity-[10%] 
                pointer-events-none overflow-hidden"  style={{ transform: `rotate(${scrollY / 30}deg)` }}
            />





        </div >
    )





}

export default AboutMe