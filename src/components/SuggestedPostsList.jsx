import { PostData } from "../data/postData"
// import PropTypes from 'prop-types';
import { useState } from "react";

import '../styles/underline.css'

// .underlineAnimate {
//     background-size: 100% 0.1em, 0 0.1em;
//     background-position: 100% 100%, 0 100%;
//     background-repeat: no-repeat;
//     transition: background-size 400ms;
//   }

//   .underlineAnimate:hover,
//   .underlineAnimate:focus {
//     background-size: 0 0.1em, 100% 0.1em;
//   }



const SuggestedPostsList = ({ suggestedPosts }) => {

    const [hover, setHover] = useState(false);
    console.log(hover, 'hover');




    return (

        <div className="wrapper w-full p-20 pb-40 bg-white text-black border-t-2 border-pink-300">
            <div className="container  flex  gap-4">
                <h1 className=" min-w-[20%] text-3xl  text-left font-bold p-10 underline underline-offset-2">
                    Also Read:
                </h1>

                <ul className="posts pt-5 flex flex-col justify-center">
                    {PostData.map((post, index) => {

                        return (


                            <li
                                key={index}
                                id='suggested-post'
                                onClick={() => window.location.href = `/blog/post/${post.slug}`}
                                onMouseEnter={(e) => { handleMouseEnter(e); setHover(true) }}
                                onMouseLeave={(e) => { handleMouseLeave(e); setHover(false) }}
                                className="  grid grid-cols-12 gap-4 items-center pb-4 underlineAnimateReverse cursor-pointer">

                                <div className={`col-span-8  items-center pointer-events-none `}>
                                    <span className="text-xs"> {post.date} </span>
                                    <h4 > {post.title}  </h4>
                                </div>
                                <span className="text-black text-sm pt-8 pointer-events-none">  {post.author}   </span>
                            </li>


                        )


                    })}
                </ul>
            </div>
        </div >
    )
}



export const handleMouseEnter = (e) => {
    let siblings = e.target.parentNode.children;
    // console.log(siblings, 'siblings');




    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === e.target) continue;
        siblings[i].style.opacity = 0.2;
    }
}

export const handleMouseLeave = (e) => {
    let siblings = e.target.parentNode.children;
    // console.log(siblings, 'siblings');




    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === e.target) continue;
        siblings[i].style.opacity = 1;
    }
}



export default SuggestedPostsList