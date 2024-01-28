import SuggestedPostsList from "../components/SuggestedPostsList";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import PostDetail from "../components/admin-components/Post/PostDetail";
import { useState } from "react";
import axiosClient from "../utils/axiosClient";
import { useQuery } from "react-query";

const PostDetailPage = () => {

    const [post, setPost] = useState([]);
    const { isLoading, isError, error } = useQuery('post', fetchPost)
    let href = window.location.href;
    let id = href.split('?id=')[1];
    if (!id) return <div> <h1>Post Not Found</h1></div>


    async function fetchPost() {
        const { data } = await axiosClient.get(`/blog/posts/${id}`)
            .catch((err) => console.log(err))
        if (!data) return;
        setPost(data)
        return data
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }




    return (
        <div className={`flex-col justify-between `}>
            {/* <img src='/assets/grainyFilter.svg' alt='grainyFilter' className="absolute top-0 left-0 w-full h-full object-cover grayscale" /> */}
            <NavBar />
            <PostDetail post={post} />
            <SuggestedPostsList />
            <Footer />

        </div>
    )
}

export default PostDetailPage;