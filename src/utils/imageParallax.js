import { useRef } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const container = useRef();

// useGSAP(() => {
//   // gsap code here...
//   gsap.to(".box", {x: endX}); // <-- automatically reverted

// }, { scope: container }); // <-- scope is for selector text (optional)


const ImageParallax = ({ images }) => {

    // on hover on container slide in next image from bottom

    var fadein = gsap.utils.toArray('.fadein');

    fadein.forEach((fadein, i) => {

        gsap.from(fadein, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: fadein,
            },
            duration: 1.5,
            ease: "power4",
            skewX: -10,
            yPercent: 30,
            stagger: 0.2,
        });

    })








    return (

        <div className="container">

            <div className="image-container">
                <img src={images[0]} alt="img" className="image1 fadein" />
                <img src={images[1]} alt="img2" className="image2 fadein" />
            </div>

        </div>

    )



}

export default ImageParallax;