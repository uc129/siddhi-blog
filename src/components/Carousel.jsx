import { useCallback, useEffect, createContext, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import { Autoplay, ClassNames } from 'embla-carousel-react'
import styles from '../styles/carousel.css'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import { FaCircle } from "react-icons/fa";


export const CarouselContext = createContext({
    embla: undefined,
    selectedIndex: -1
})

export const Carousel = ({ children, className }) => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel({

        loop: true,
        draggable: true,
        speed: 1,
        align: 'center',
        skipSnapshots: false,
    }, [Autoplay(), ClassNames()])

    // const scrollPrev = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollPrev()
    // }, [emblaApi])

    // const scrollNext = useCallback(() => {
    //     if (emblaApi) emblaApi.scrollNext()
    // }, [emblaApi])

    // const onSelect = useCallback(() => {

    //     if (!emblaApi) return
    //     setSelectedIndex(emblaApi.selectedScrollSnap())


    // }, [emblaApi, setSelectedIndex])


    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        const currentIndex = emblaApi.selectedScrollSnap();
        const slidesCount = emblaApi.slideNodes().length;

        if (currentIndex === 0 && emblaApi.scrollProgress() === 0) {
            // We have looped to the beginning
            setSelectedIndex(slidesCount - 1);
        } else {
            setSelectedIndex(currentIndex);
        }
    }, [emblaApi, setSelectedIndex]);



    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)

    }, [emblaApi, onSelect])


    return (
        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>

            <div ref={viewportRef} className={`w-full overflow-hidden ${className} ${styles.viewport}`}>

                <div className={`{styles.container} flex  `}>
                    {children}
                </div>

                <div className='relative dots-indicator flex pt-12 gap-4'>
                    {children.map((_, index) => {
                        return (
                            <div key={index} className=' rounded-full flex max-w-[40%] mx-auto cursor-pointer'>
                                <FaCircle size={10} onClick={() => emblaApi.scrollTo(index)} className={`text-2xl ${selectedIndex === index ? 'text-gray-400' : 'text-gray-100'}`} />
                            </div>
                        )
                    })}

                </div>

            </div>


        </CarouselContext.Provider>
    )
}
