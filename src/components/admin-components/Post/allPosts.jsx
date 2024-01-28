
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../utils/axiosClient';
import { useQuery } from 'react-query'
import PostBox from './PostBox';

const AllPosts = () => {

    const [posts, setPosts] = useState([]);
    const { isLoading, isError, error } = useQuery('posts', fetchPosts)

    async function fetchPosts() {
        const { data } = await axiosClient.get('/blog/posts/all').catch((err) => console.log(err))
        if (!data) return;

        const sortedPosts = data.sort((a, b) => new Date(b.dates.initiated) - new Date(a.dates.initiated));
        setPosts(sortedPosts)
        // setPosts(data)
        return data
    }





    useEffect(() => {
        console.log(posts);
    }, [posts])

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        <div>
            <h1>All Posts</h1>
            {posts && posts.map((post) => {
                return (
                    <div className="post flex flex-col" key={post._id}>
                        <PostBox post={post} />
                    </div>
                )
            })
            }
        </div>
    );

}

export default AllPosts;