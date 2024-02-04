
import PostHero from "../components/postHero"
import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient';
import { useQuery } from 'react-query'
import { useAuth } from "../utils/authProvider";
import Elephant from "../components/elephant";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import NavBar from "../components/navbar";
import Footer from "../components/footer";



const BlogPage = () => {
    let postIncrement = 2;
    let postLimitNumber = 3;

    const { isAuthenticated } = useAuth()
    const [posts, setPosts] = useState([]);
    const [postLimit, setPostLimit] = useState(postLimitNumber);
    const [mostViewedPosts, setMostViewedPosts] = useState([]);
    const [limitedPosts, setLimitedPosts] = useState([]);

    const { isLoading, isError, error } = useQuery('posts', fetchPosts)


    async function fetchPosts() {
        const { data } = await axiosClient.get('/blog/posts/all').catch((err) => console.log(err))
        if (!data) return;
        const sortedPosts = data.sort((a, b) => new Date(b.dates.initiated) - new Date(a.dates.initiated));
        setTimeout(() => setPosts(sortedPosts), 400)
        return data
    }

    useEffect(() => {
        if (!posts) return
        setLimitedPosts(posts.slice(0, postLimit))
        setMostViewedPosts(posts.sort((a, b) => b.meta.numOfViews - a.meta.numOfViews).slice(0, 5))
    }, [posts, postLimit, postLimitNumber])

    if (!posts.length > 0 || isLoading) {
        return <Elephant scale={'0.5'} />
    }

    if (isError) return <span>Error: {error.message}</span>


    return (
        <>
            <NavBar />
            <div className="header p-4 flex justify-between font-mono ">
                {isAuthenticated && <div className="flex  gap-4" >
                    <a href="/admin?action=new-post" className="flex items-center justify-center  w-10  h-10 rounded-[50%] bg-white sticky top-0 hover:bg-orange-200 ">
                        <img src='/assets/grainyFilter.svg' alt='filter' className=" absolute top-0 rounded-[50%] pointer-events-none" />
                        <img src='/assets/icons/new-post.svg' alt='new-post' className="w-5 absolute top-2 pointer-events-none " />
                    </a>

                    <a href="/admin?action=all-posts" className="flex items-center justify-center  w-10  h-10 rounded-[50%] bg-white sticky top-0 hover:bg-green-200  ">
                        <img src='/assets/grainyFilter.svg' alt='filter' className=" absolute top-0 rounded-[50%] pointer-events-none" />
                        <img src='/assets/icons/new-post.svg' alt='new-post' className="w-5 absolute top-2 pointer-events-none " />
                    </a>
                </div>
                }
            </div>


            <section className="wrapper max-w-screen h-full flex justify-between overflow-scroll scroll-smooth p-2  ">

                <div className=" w-[60%] pl-10 h-full">

                    <h1 id='recent-heading' className="posts underline underline-offset-4 -mb-10"> Recent Posts </h1>

                    {limitedPosts && limitedPosts.map((post, index) => {
                        return (
                            // <div key={post._id} className={`${index % 2 === 0 ? 'text-black' : 'text-white'}`}>
                            <div key={post._id} className={`text-black`}>

                                <PostHero
                                    date={post.dates.initiated}
                                    author={post.author || 'Unnati'}
                                    volume={post.volume}
                                    postNumber={post.postNumber}
                                    title={post.title}
                                    slug={post._id}
                                    numOfViews={post.meta.numOfViews}
                                    bgImage={post.images[0]}

                                />
                            </div>
                        )
                    })}

                    {
                        posts && (postLimit < posts.length) &&
                        <div className="flex justify-between ">
                            <button onClick={() => setPostLimit(postLimit + postIncrement)}
                                className="h-10 px-10  mb-10 text-white hover:text-orange-600">
                                Load More..
                            </button>


                        </div>
                    }

                    <span className="h-10  px-10 float-right  mb-10">
                        <p className="flex gap-4 items-center"> TOP  <FaRegArrowAltCircleUp onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }) }} />  </p>
                    </span>


                </div>



                {/* Right side link */}
                <div className="wrapper pl-16 justify-between w-[24%] sticky top-0 ">

                    <div className="container ">
                        <h1 className="text-lg text-left font-bold  p-10 underline underline-offset-2">
                            Most Popular
                        </h1>

                        <ul>
                            {
                                mostViewedPosts.map((post, index) => {
                                    return (

                                        <li key={index} className="flex items-center justify-between p-2">
                                            <h5 className=" ">{post.title} </h5>
                                            <div className="pb-4  flex gap-2">
                                                <span> {post.numOfViews}</span>
                                                <img src='/assets/icons/eye.svg' alt='eye' className="w-5" />
                                            </div>
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>



                </div>



            </section>
            <Footer />

        </>

    )
}

export default BlogPage