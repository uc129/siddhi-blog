const BodyBackground = () => {


    return (

        <div className="body-background absolute top-0 w-full 
        -z-10
         max-h-[180vh] overflow-hidden">
            <div>

                <img src="/assets/bodyBg/bg-2.png" alt="gradient" className=" object-cover grayscale" />
                {/* <img src="/assets/grainyFilter.svg" alt="grainyFilter" className="absolute top-0 left-0 w-full min-h-full object-cover grayscale" /> */}

            </div>

            <div>
                <img src="/assets/bodyBg/bg-3.png" alt="gradient" className=" object-cover grayscale  w-[100vw]" />
                <img src="/assets/grainyFilter.svg" alt="grainyFilter" className="absolute top-[150vh]  left-0 w-full  object-cover grayscale" />
            </div>

            {/* <div>
                <img src="/assets/bodyBg/bg-4.png" alt="gradient" className=" object-cover grayscale" />
                <img src="/assets/grainyFilter.svg" alt="grainyFilter" className="absolute top-[250vh] left-0 w-full min-h-full object-cover grayscale" />


            </div> */}







        </div>

    )




}

export default BodyBackground;