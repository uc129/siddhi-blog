import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { illustrationLinks } from '../utils/imageLinks';


const ContactMe = () => {


    const mapProps = {
        center: {
            lat: 28.6139,
            lng: 77.2090
        },
        zoom: 11
    };

    const [bgImage, setBgImage] = useState(null)


    useEffect(() => {
        if (bgImage) return
        let random = Math.floor(Math.random() * illustrationLinks.length);
        console.log(random);
        // let randomImage = illustrationLinks[random]
        let randomImage = illustrationLinks[29]
        // getImageLightness(randomImage.link, (brightness) => { console.log(brightness, 'image brightness'); setBrightness(brightness) });
        setBgImage(randomImage.link)
    }, [bgImage])




    return (
        <div className={`h-screen w-screen flex justify-center items-center overflow-hidden  bg-no-repeat  bg-contain bg-right
         text-white`} >

            <div className="min-w-[500px]  w-[80%] lg:w-[90%] h-[80%] lg:h-[80%] border-4  border-black  rounded-3xl p-4 md:p-12 
            bg-cover  bg-blend-saturation" style={{ backgroundImage: `url(${bgImage?.toString()})` }}>

                <div className="flex justify-between z-10 ">

                    <div className="hidden w-1/2 md:flex flex-col  gap-8 text-sm  pr-4">

                        <div className='flex gap-12 items-center'>
                            <img className="w-5" src="../../../assets/SVG/logo.svg" alt="logo" />
                            <p className='text-3xl font-bold font-bebas tracking-widest' >Unnati Chaudhary</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg hover:underline"><a href="/portfolio"> View Our portfolio </a></h3>
                            <p >Our work speaks for itself</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg hover:underline"> <a href="tel:+"> Text us</a>  </h3>
                            <p >We can get back sooner to you on text</p>
                        </div>

                        <div>
                            <div className='pb-2'>
                                <h3 className="font-bold text-lg"> Visit Us  </h3>
                                <p >We are located in the heart of the city</p>
                            </div>

                            <div className='h-[24vh] w-[100%] lg:w-[400px]' >
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyDoydmmHqw4Hk7fnJWCLmoO9U9HPyl0WDM" }}
                                    defaultCenter={mapProps.center}
                                    defaultZoom={mapProps.zoom}
                                />
                            </div>

                        </div>

                    </div>

                    <div className=" w-full mt-12 md:mt-0  lg:w-1/3 mx-auto min-w-[240px]  p-4 md:p-10 lg:-mr-6 rounded-xl  bg-black bg-center "
                        style={{ backgroundImage: 'url("../../../assets/gradients/gradient_login.png")' }}>


                        <div className="font-bold w-full text-xl pb-4">
                            <h1 className="text-3xl pb-2">Contact Us</h1>
                            <p>Got Ideas? We've got the skills, <br /> Lets team up.</p>
                        </div>

                        <form className="w-full flex flex-col gap-4  *:w-full *:outline-non *: *:focus:outline-purple-400 *:p-2 *:px-4 *:border-[1px] *:border-black  *:rounded-xl">

                            <input type="email" name="email" placeholder="Email" id="email" />

                            <input type="text" name="subject" id="subject" placeholder="Subject" />

                            <textarea name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>

                            <button className="text-black hover:bg-black hover:text-white" type="submit">Send</button>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )


}


export default ContactMe;