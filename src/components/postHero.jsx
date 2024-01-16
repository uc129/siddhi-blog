import { Gradients } from "../utils/gradients"
import { BgImages } from "../utils/bgImages";
import { borderColours } from "../utils/gradients";
// import { useState, useEffect } from "react";



const PostHero = ({ date, author, volume, postNumber, title, slug, backgroundGradient, backgroundImage }) => {

    // console.log(borderColours, 'borderColours');

    let numGradients = Gradients.length;
    let numBgImages = BgImages.length;

    let randomGradientIndex = Math.floor(Math.random() * numGradients);
    let randomBgImageIndex = Math.floor(Math.random() * numBgImages);

    let randomGradient = Gradients[randomGradientIndex];
    let randomBgImage = BgImages[randomBgImageIndex];
    let gradientColour = borderColours[randomGradientIndex];



    // const [loaded, setLoaded] = useState(false);






    if (!backgroundGradient) {
        backgroundGradient = randomGradient;
    }

    if (!backgroundImage) {
        backgroundImage = randomBgImage;
    }



    // console.log("backgroundGradient", backgroundGradient);
    // console.log("backgroundImage", backgroundImage);




    return (


        // <div className={`wrapper w-[65%]  font-thin  mx-auto flex justify-center h-[58vh] my-20 
        //                       ${backgroundGradient}
        //                       `}>

        <div className={`wrapper  font-thin  mx-auto flex justify-center h-[58vh] my-20 
        shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]
                              `}>
            <div className="Image-background overflow-hidden relative top-[5.5%]  w-[94%]  h-[87%]" >

                <img className=" object-cover h-full w-full
                 grayscale " src={backgroundImage} alt="background" />

                <img src="/assets/grainyFilter.svg" alt="grainyFilter" className="absolute top-0 left-0 w-full h-full object-cover grayscale" />
                <img src="assets/SVG/logo2.svg" alt="logo" className="absolute bottom-4 right-4 w-12 grayscale" />


                <div className="content w-full h-[70%] min-h-[300px] flex flex-col absolute py-8 px-2  top-0 ">

                    <div className="  w-[96%]   mx-auto">



                        <div id='meta-wrapper' className={`
                        // ${backgroundGradient} 
                        w-full  mx-auto py-[1px] font-normal`}>

                            <div className={`meta w-full  px-4 bg-inherit  flex justify-between    `}>

                                <div className="date">
                                    <p className=" text-[12px]">{date}</p>
                                </div>

                                <div className="author">
                                    <p className=" text-[12px]"> Written By: {author}</p>
                                </div>

                                <div className="volume flex gap-1">
                                    <p className=" text-[12px]">Vol:{volume}</p>
                                    <p className="issue_number text-[12px]"> No: {postNumber}   </p>
                                </div>

                            </div>

                        </div>



                        <div className="logo flex items-center  md:gap-8   px-1  py-2 2xl:p-4 ">

                            <div className={`flex justify-start w-16 h-16 rounded-3xl border-2 border-${gradientColour} `}  >

                                <img className="w-10 rounded-full" src="/logo.svg" alt="logo" />
                                {/* <img className="w-10 rounded-full" src="/assets/grainyFilter.svg" alt="filter" /> */}


                            </div>
                            <p className="company  text-xl  md:text-[30px]   2xl:text-[44px]"> The Sunday Drip </p>

                        </div>




                        <div className={` w-[90%] px-1  2xl:px-4 `} >

                            <a href={`blog/post/${slug}`} className="text-black hover:text-gray-700">
                                <h1 className="text-xl md:text-3xl  2xl:text-6xl pb-4 tracking-tighter font-thin
                       font-display ">
                                    {title}
                                </h1>
                            </a>


                            <div className={`underline w-[74%]   ${backgroundGradient}   h-[3px] md:h-[6px]`} />


                        </div>



                    </div>
                </div>

            </div>
        </div >
    )







}


export default PostHero;