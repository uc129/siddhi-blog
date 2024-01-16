import { PostData } from "../data/postData"
import PostHero from "../components/postHero"
// import BodyBackground from "../components/bodyBackground"
// import NavBar from "../components/navbar"
// import Footer from "../components/footer"
import Layout from "../components/Layout"
import { useState } from "react";


const SortPostsByViews = PostData.sort((a, b) => b.numOfViews - a.numOfViews)
const mostViewedPosts = SortPostsByViews.slice(0, 5) // get the first 5 posts
const sortPostsByDate = PostData.sort((a, b) => b.date - a.date);



let postIncrement = 2;
let postLimitNumber = 2;

const BlogPage = () => {

    const [postLimit, setPostLimit] = useState(postLimitNumber);
    // const [loadedPosts, setLoadedPosts] = useState(sortPostsByDate.slice(0, postLimit));


    return (
        <Layout>
            <div className="header p-4 flex justify-between ">
                <h1 className="posts">
                    Recent
                </h1>

                <div className="flex  gap-4" >

                    <a href="/new-post" className="flex items-center justify-center  w-10  h-10 rounded-[50%] bg-white sticky top-0 hover:bg-orange-200 ">
                        <img src='/assets/grainyFilter.svg' alt='filter' className=" absolute top-0 rounded-[50%] pointer-events-none" />
                        <img src='/assets/icons/new-post.svg' alt='new-post' className="w-5 absolute top-2 pointer-events-none " />
                    </a>

                    <a href="/blog/posts/all" className="flex items-center justify-center  w-10  h-10 rounded-[50%] bg-white sticky top-0 hover:bg-green-200  ">
                        <img src='/assets/grainyFilter.svg' alt='filter' className=" absolute top-0 rounded-[50%] pointer-events-none" />
                        <img src='/assets/icons/new-post.svg' alt='new-post' className="w-5 absolute top-2 pointer-events-none " />
                    </a>



                </div>
            </div>

            <div className="wrapper max-w-screen h-full flex justify-between overflow-scroll scroll-smooth ">


                <div className="container col-span-4 w-[70%] h-full  s">

                    {sortPostsByDate.map((postDetail, index) => {
                        if (index >= postLimit) return null;
                        return (
                            <div>

                                <div key={index}
                                    className="">

                                    <PostHero

                                        date={postDetail.date}
                                        author={postDetail.author}
                                        volume={postDetail.volume}
                                        postNumber={postDetail.postNumber}
                                        title={postDetail.title}
                                        slug={postDetail.slug}
                                    />
                                </div>


                                {/* <div key={index * 100}
                                    className="">

                                    <PostHero

                                        date={postDetail.date}
                                        author={postDetail.author}
                                        volume={postDetail.volume}
                                        postNumber={postDetail.postNumber}
                                        title={postDetail.title}
                                        slug={postDetail.slug}
                                    />
                                </div> */}


                            </div>



                        )
                    })}

                    {
                        postLimit < sortPostsByDate.length &&
                        <button onClick={() => setPostLimit(postLimit + postIncrement)}
                            className="h-10 px-10  mb-10 text-white hover:text-orange-600">
                            Load More..
                        </button>
                    }



                </div>
                <div>

                </div>


                {/* Right side link */}
                <div className="wrapper w-[24%] sticky top-0 ">

                    <div className="container ">
                        <h1 className="text-lg text-left font-bold p-10 underline underline-offset-2">
                            Most Popular
                        </h1>

                        <ul>



                            {
                                mostViewedPosts.map((post, index) => {
                                    return (

                                        <li className="flex items-center justify-between p-2">

                                            <h5 className=" ">
                                                {post.title}
                                            </h5>


                                            <div className="pb-4  flex gap-2">
                                                <span>
                                                    {post.numOfViews}
                                                </span>
                                                <img src='/assets/icons/eye.svg' alt='eye' className="w-5" />
                                            </div>

                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>



            </div>

        </Layout>

    )
}

export default BlogPage