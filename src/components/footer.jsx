import { MdOutlineMailOutline } from "react-icons/md";
import { Carousel } from "./Carousel";
import CarouselItem from "./carouselItem";

const images = [
    <img src="/assets/siddhi-art/hugo.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art1.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art2.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art3.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art4.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art5.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art6.jpg" className="h-80 pointer-events-none" alt="" />,
    <img src="/assets/siddhi-art/art7.jpg" className="h-80 pointer-events-none" alt="" />,
]

const Footer = () => {

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

            <div className="flex px-4 gap-8 h-80 w-full grayscale pb-1">
                <Carousel >
                    {images.map((image, index) => (
                        <CarouselItem key={index} >
                            {image}
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>

        </footer>
    )

}

export default Footer