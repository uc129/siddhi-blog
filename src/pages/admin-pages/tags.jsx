import CreateTag from "../../components/admin-components/Tag/createTags";

import axiosClient from "../../utils/axiosClient";
import { useQuery } from 'react-query'
import { useEffect, useState } from "react";
import UpdateTag from "../../components/admin-components/Tag/updateTags";



const Tags = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [tags, setTags] = useState([])
    const [currentTag, setCurrentTag] = useState('')

    const { isLoading, isError, error } = useQuery('tags', fetchTags)


    async function fetchTags() {
        const { data } = await axiosClient.get('/blog/tags/all')
        if (!data) return;
        setTags(data)
        //set random Tag to Tag detail state
        let random = Math.floor(Math.random() * data.length)
        setCurrentTag(data[random])
        return data
    }

    let url = window.location.href;
    let tagName = url.split('?tag=')[1]
    useEffect(() => {
        if (!tagName) return;
        if (tags.length === 0) return;
        let tag = tags.filter((tag) => tag.name === tagName)
        if (tag.length === 0) return;
        console.log('tag', tag);
        setCurrentTag(tag[0])
    }, [tagName, tags])



    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            setSearchResults([])
            return;
        }
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        if (searchTerm === '') return;
        // console.log(tags);
        if (tags.length === 0) return;
        let search = tags.filter((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(search.slice(0, 3))
    }, [searchTerm, tags])

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }



    return (
        <div className="w-full">
            <div className="wrapper w-full   bg-white text-white flex flex-col mx-auto">
                <h1 className="p-4 text-center text-pink-500 underline 
                underline-offset-2 text-4xl">
                    Edit Tags
                </h1>

                <div className=" text-yellow-600 ">
                    <div className="container  mx-auto w-full max-h-[80vh] overflow-hidden grid grid-cols-2  xl:grid-cols-4 mt-8">

                        {/* left */}
                        <div className=" max-h-[40%]  min-h-[600px] grid grid-rows-6 pt-8 mx-auto ">
                            <div className="row-span-4">
                                <h3 className="text-center text-yellow-600 underline underline-offset-2">tags List</h3>
                                <div className="list mt-8 overflow-scroll max-h-[70%]">
                                    <ul className=" ">
                                        {
                                            tags.map((tag, index) => (
                                                <li key={index} className="text-center hover:underline">
                                                    <a href='#tag-detail' onClick={() => setCurrentTag(tag)}>
                                                        {tag.name}
                                                    </a>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                            <div className="row-span-1 flex flex-col  justify-center items-center">

                                <div className="search relative text-xs gap-4 flex flex-wrap">
                                    {searchResults.map((result, index) => (
                                        <div key={index} onClick={() => setCurrentTag(result)}
                                            className="text-center  hover:underline">
                                            <a href='#tag-detail'>
                                                {result.name}
                                            </a>
                                        </div>
                                    ))}

                                </div>

                                <div className="relative">
                                    <input onChange={handleSearch} type="text"
                                        placeholder={'Search tags'}
                                        className="form-control h-[2em] w-[10em]" />

                                    <div className="search relative right-10 bottom-2 ">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* center */}
                        <div className=" xl:col-span-2 border-l-2  border-yellow-200 xl:border-r-2">
                            <CreateTag />
                        </div>

                        {/* right */}
                        <div id="tag-detail">
                            <UpdateTag currentTag={currentTag} getCurrent={(current) => setCurrentTag(current)} />

                        </div>
                    </div >

                </div>



            </div>
        </div>
    );
}


export default Tags;