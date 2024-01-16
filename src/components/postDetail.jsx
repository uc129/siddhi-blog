
import { PostData } from "../data/postData";
import { useEffect, useState } from "react";
// import { ImagesCarousel } from "./carousel";



const PostDetail = ({ slug }) => {


    const post = PostData.find((post) => post.slug === slug);
    const [imageIndex, setImageIndex] = useState(0);


    const [loaded, setLoaded] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [indexChange, setIndexChange] = useState(false);

    const handlePrevClick = () => {
        setIndexChange(true);

        setImageIndex(Math.abs(imageIndex - 1) % images.length)
    }

    const handleNextClick = () => {
        setIndexChange(true);
        setImageIndex((imageIndex + 1) % images.length)
    }



    useEffect(() => {

        if (loaded || indexChange) {
            setOpacity(0);
            for (let i = 0; i <= 1; i += 1) {
                setTimeout(() => {
                    setOpacity(i);
                }, 100);
            }
            setIndexChange(false);
        }

    }, [indexChange, loaded]);

    if (!post) return <h1>Post Not Found</h1>

    const { title, description, author, volume, postNumber, date, content, images } = post;





    return (


        <div className={`wrapper w-screen   pt-10  `}>

            <div className="container  gap-8 mb-14 xl:mb-40 mx-auto">

                <div className="carousel w-[60%] max-h-[500px] mx-auto b-2 lg:mb-40">
                    {images && images.length > 0 &&
                        <div className="image-container relative ">

                            <img loading="lazy"
                                onLoad={() => setLoaded(true)}
                                className={`rounded-[50px] max-h-[50vh] `} src={images[imageIndex].url} alt="blog"
                                style={{
                                    opacity: opacity,
                                    transition: 'opacity 0.5s ease-in-out'

                                }}

                            />

                            <div className={`flex flex-between`}
                                style={{
                                    opacity: opacity,
                                    transition: 'opacity 0.5s ease-in-out'

                                }}
                            >

                                <button onClick={handlePrevClick}
                                    className=" absolute top-[40%]  ml-4
                                     hover:-translate-x-2"
                                >
                                    <img loading="lazy" className="w-10 pointer-events-none" alt='prev' src='/assets/icons/left.svg' />
                                </button>


                                <button onClick={handleNextClick}
                                    className="absolute top-[40%] right-0   mr-4
                                    hover:translate-x-2
                                    ">
                                    <img loading="lazy" className="w-10 pointer-events-none" alt='next' src='/assets/icons/right.svg' />

                                </button>

                            </div>

                            <div className={`flex justify-between pt-12 text-lg px-24 `}
                                style={{
                                    opacity: opacity,
                                    transition: 'opacity 0.5s ease-in-out'
                                }}>

                                <p> {images[imageIndex].name} </p>
                                <p> {images[imageIndex].description} </p>
                            </div>
                        </div>
                    }

                </div>



                <div className={` px-10 ${(images && images.length > 0) ? 'row-span-1' : 'row-span-2'} w-[80%]  mx-auto `}>

                    <h1 className="text-3xl text-center">{title}</h1>
                    <p className="p-4 w-[80%] mx-auto "> <em>  {description}  </em>  </p>

                    <p className="text-sm flex gap-8   justify-end">
                        <span> vol. {volume} </span>
                        <span> post.  {postNumber} </span>
                        <span> {date} </span>
                        <span> Written By:  {author} </span>
                    </p>

                    <div className={`content text-lg leading-relaxed w-[80%] rounded-lg  mx-auto mt-4 md:mt-12 xl:mt-24 text-justify  `}>
                        {
                            <div>
                                <span className="text-4xl ">

                                    {content.slice(0, 2)}

                                </span>

                                <span>

                                    {content.slice(2, content.length)}
                                </span>
                            </div>
                        }
                    </div>

                </div>

            </div>

        </div >
    )
}

export default PostDetail