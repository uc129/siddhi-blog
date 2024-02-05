import { useEffect, useState } from "react"
import axiosClient from "../utils/axiosClient"
import { illustrationLinks } from "../utils/imageLinks"




const Portfolio = ({ bgColor }) => {

    const [images, setImages] = useState([])
    const [gotImages, setGotImages] = useState(false)


    const fetchProjects = async () => {
        try {
            const res = await axiosClient.get('/blog/images/all')
            let data = await res.data;
            setImages(data)
            setGotImages(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (gotImages) return
        fetchProjects()
    }, [gotImages])








    return (
        <div className={`wrapper ${bgColor} flex flex-col h-screen w-screen `}>

            <div className="w-[80%] mx-auto p-14">


                <div className="grid grid-cols-8 ">

                    {/* {images && images.map((image, index) => {
                        return (
                            <div key={index} className="col-span-4 gap-4 row-span-4 text-center pb-8" >
                                <img src={image.url} alt={image.title} className=" max-h-[400px]" />
                                <div className="flex gap-8">
                                    <h3>{image.title}</h3>
                                    <p>{image.description}</p>
                                </div>
                            </div>
                        )
                    })} */}


                    {illustrationLinks && illustrationLinks.map((image, index) => {
                        return (
                            <div key={index} className="col-span-4   p-4 text-center pb-8" >
                                <img src={image.link} alt={image.link} className="h-full pointer-events-none" />
                            </div>
                        )
                    })

                    }

                </div>


            </div>
        </div>
    )
}

export default Portfolio