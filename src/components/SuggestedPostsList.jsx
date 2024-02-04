import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

import '../styles/underline.css'
import Elephant from "./elephant";

const SuggestedPostsList = ({ post }) => {


    const [currentPost] = useState(post)
    const [suggestedPosts, setSuggestedPosts] = useState([])


    // let randomTag = currentPost.tags[Math.floor(Math.random() * currentPost.tags?.length)]

    const fetchPostByCategory = async () => {
        await axiosClient.get(`/blog/posts/category/${currentPost.category}`).then((res) => setSuggestedPosts((suggestedPosts) => [...suggestedPosts, res.data]))
            .catch((err) => console.log(err))
        return
    }
    // const fetchPostByTag = async () => {
    //     await axiosClient.get(`/blog/posts/tag/${randomTag}`).then((res) => setSuggestedPosts((suggestedPosts) => [...suggestedPosts, res.data]))
    //         .catch((err) => console.log(err))
    //     return
    // }

    useEffect(() => {
        if (suggestedPosts.length > 0) return
        fetchPostByCategory()
    })



    if (!post) return <div> <Elephant message={'Loading'} /> </div>
    // console.log(post);





    return (

        <div className="wrapper w-full p-20 pb-40 bg-white text-black border-t-2 border-pink-300">
            <div className="container  flex  gap-4">
                <h1 className=" min-w-[20%] text-3xl  text-left font-bold p-10 underline underline-offset-2">Also Read:</h1>
                <ul className="posts pt-5 flex flex-col justify-center">
                    {suggestedPosts.slice(0, 3).map((post, index) => {
                        return (
                            <li
                                key={index}
                                id='suggested-post'
                                onClick={() => window.location.href = `/blog/post?id=${currentPost._id}`}
                                className="  grid grid-cols-12 gap-4 items-center pb-4 underlineAnimateReverse cursor-pointer">
                                <div className={`col-span-8  items-center pointer-events-none `}>
                                    <span className="text-xs"> {currentPost.dates?.initiated} </span>
                                    <h4 > {currentPost.title}  </h4>
                                </div>

                                <span className="text-black text-sm pt-8 pointer-events-none">  {currentPost.author}   </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}



export default SuggestedPostsList