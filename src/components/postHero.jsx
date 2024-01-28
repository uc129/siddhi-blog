import { borderColours } from "../utils/gradients";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";

import { Gradients } from "../utils/gradients";
import { illustrationLinks } from "../utils/imageLinks";
import Elephant from "./elephant";




const PostHero = ({ date, author, volume, postNumber, title, slug, bgImage }) => {

    let randomGradientIndex = Math.floor(Math.random() * Gradients.length);
    let randomIllustrationIndex = Math.floor(Math.random() * illustrationLinks.length);

    let randomGradient = Gradients[randomGradientIndex];
    let randomIllustration = illustrationLinks[randomIllustrationIndex];

    // let gradientColour = borderColours[randomGradientIndex];

    const [image, setImage] = useState([])
    const [illustration, setIllustration] = useState({})
    const [imageFound, setImageFound] = useState(false)



    const { isLoading, isError } = useQuery('images', async () => { return await fetchImage(bgImage) },
        { onSuccess: () => setImageFound(true) })

    const fetchImage = async (id) => {
        let data;
        await axiosClient.get(`/blog/images/${id}`).then((res) => { data = res.data; setImage(data.url) }).catch((err) => console.log(err))
        return data
    }

    useEffect(() => {
        if (imageFound) return
        else setIllustration(randomIllustration)
        console.log('illustration', randomIllustration);
    }, [imageFound, randomIllustration])


    if (isLoading) return <Elephant scale={'0.4'} />

    if (isError) return <Elephant scale={'0.4'} message={'Error'} messageColor={'text-red-400'} />



    return (


        <div className={`wrapper flex-col  font-chakra  h-[44vh] my-20 shadow-[0_15px_10px_-5px_rgba(0,0,0,0.3)] `}>

            <div className="image-background  rounded-t-lg  overflow-hidden relative top-[5.5%]  w-[100%]  h-[84%]" >

                {image.length > 0 && <img className=" object-cover h-full w-full grayscale opacity-80 " src={image} alt="background" style={{ transform: 'scale(1)' }} />}
                {illustration && <img className=" object-cover object-top h-full w-full grayscale opacity-80 " src={illustration.link} alt={illustration.name} />}

                <img src="/assets/grainyFilter.svg" alt="grainyFilter" className="absolute top-0 left-0 w-full h-full object-cover grayscale opacity-55" />
                <img src="assets/SVG/logo2.svg" alt="logo" className="absolute bottom-4 right-4 w-12 grayscale" />


                <div className="content  w-full h-[70%] min-h-[300px] flex flex-col absolute py-8 px-2  top-0 ">

                    <div className="  w-[96%]   mx-auto">

                        <div id='meta-wrapper' className={`w-full  mx-auto py-[1px]`}>

                            <div className={`meta w-full  px-4 bg-inherit  flex justify-between `}>

                                <div>
                                    <div className="date"> <p className=" text-[14px]">{date}</p> </div>
                                    <div className="author"><p className=" text-[14px]"> Written By: {author}</p></div>
                                </div>

                                <div className="volume flex gap-1">
                                    <p className=" text-[12px]">Vol:{volume}</p>
                                    <p className="issue_number text-[12px]"> No: {postNumber}   </p>
                                </div>

                            </div>
                        </div>

                        <div className="logo flex items-center  md:gap-8   px-1  py-2 2xl:p-4 ">
                            <p className="company text-xl md:text-[30px] 2xl:text-[44px] "> The Sunday Drip </p>
                        </div>

                        <div className={` w-[90%] px-1  2xl:px-4 `}>

                            <a href={`blog/post?id=${slug}`} className=" hover:text-gray-700">
                                <h1 className="text-xl md:text-3xl  2xl:text-6xl pb-4 font-grape  "> {title} </h1>
                            </a>

                            <div className={`underline w-[74%] ${randomGradient} h-[3px] md:h-[6px]`} />
                        </div>

                    </div>
                </div>

            </div>
            <br />

            <div className=" Tools -mt-1 h-[15%] flex justify-between rounded-b-lg bg-gray-100 overflow-hidden">
                <div className="buttons  flex p-4     *:bg-transparent *:text-black *:border-0">
                    <button>Like</button>  <button>Share</button>  <button>Comments</button>
                </div>

                <div className="links p-4 *:bg-transparent *:text-black *:border-0  *:hover:text-sky-500">
                    <a href={`/blog/post?id=${slug}`}>View </a>
                </div>

            </div>

        </div >
    )







}


export default PostHero;