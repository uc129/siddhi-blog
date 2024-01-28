import { useContext, useCallback } from "react"
import { CarouselContext } from "./Carousel"
import styles from '../styles/carousel.css'


const CarouselItem = ({ children, index }) => {

    const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
    const isActive = selectedIndex === index;

    const handleClick = useCallback(() => {
        if (emblaApi === undefined) return;
        emblaApi.scrollTo(index);
    }, [emblaApi, index])

    return (
        <div className={`flex-shrink-0  my-auto object-scale-down
         ${styles.slide} relative ${isActive ? 'active' : ''} `}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}


export default CarouselItem
