import { MdOutlineMailOutline } from "react-icons/md";
import { Carousel } from "./Carousel";
import CarouselItem from "./carouselItem";
import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";
import { useState } from "react";







const Footer = () => {

    useQuery('images', fetchImages)
    const [images, setImages] = useState([])

    async function fetchImages() {
        const { data } = await axiosClient.get(`/blog/images/search?category=post`).then((res) => setImages(res.data))
            .catch((err) => console.log(err))
        if (!data) return;
        return data
    }





    return (
        <footer className="flex flex-col overflow-hidden border-t-2 border-black border-collapse ">

            <div className="flex py-16 px-8 gap-12 h-full  bottom-0 bg-transparent items-center sticky left-0  ">
                <p>© 2023 Unnati Chaudhary</p>
                <ul className="flex gap-8  items-center">
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/unnati-choudhary-9a7a3b1b4/">LinkedIn</a></li>
                    <li><a target="_blank" rel="noreferrer" href="instagram.com/unnati_chaudhary">Instagram</a></li>
                    <li><a target="_blank" rel="noreferrer" href="portfolio.com/unnati_chaudhary">Portfolio</a></li>
                    <a href="mailto:unnatichaudhary12@gmail.com" className="hover:underline">
                        <MdOutlineMailOutline className="text-gray-600 text-xl" />
                    </a>
                </ul>
            </div>

            {images.length > 0 &&
                <div className="flex px-4 gap-8 h-80 w-full grayscale pb-1">
                    <Carousel >
                        {images.map((image, index) => (
                            <CarouselItem key={index} >
                                <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            }
        </footer>
    )

}

export default Footer