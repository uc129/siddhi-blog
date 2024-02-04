
import React, { useEffect, useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import { useQuery } from 'react-query'
import PostBox from '../../components/admin-components/Post/PostBox';
import Elephant from '../../components/elephant';

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
        return <Elephant scale={0.5} />
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        <div>
            <h1>All Posts</h1>
            {posts && posts.map((post) => {
                return (

                    <PostBox post={post} />

                )
            })
            }
        </div>
    );

}

export default AllPosts;