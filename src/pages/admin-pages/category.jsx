import CreatePostCategory from "../../components/admin-components/Category/createCategory";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosClient";
import { useQuery } from 'react-query'
import UpdateCategory from "../../components/admin-components/Category/updateCategory";
import Elephant from "../../components/elephant";


const Category = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('')

    const { isLoading, isError, error } = useQuery('categories', fetchCategories)

    useEffect(() => {
        if (searchTerm === '') return;
        if (categories.length === 0) return;
        let search = categories.filter((data) => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(search.slice(0, 3))
    }, [searchTerm, categories])


    async function fetchCategories() {
        const { data } = await axiosClient.get('/blog/categories/all')
        if (!data) return;
        setCategories(data)
        //set random category to category detail state
        let random = Math.floor(Math.random() * data.length)
        setCurrentCategory(data[random])
        return data
    }


    let url = window.location.href;
    let categoryName = url.split('?category=')[1]
    useEffect(() => {
        if (!categoryName) return;
        if (categories.length === 0) return;
        let category = categories.filter((category) => category.name === categoryName)
        if (category.length === 0) return;
        console.log('category', category);
        setCurrentCategory(category[0])
    }, [categoryName, categories])




    if (isLoading) {
        return <div className="">
            <Elephant />
        </div>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    console.log(currentCategory);


    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            setSearchResults([])
            return;
        }
        setSearchTerm(e.target.value)
    }


    return (
        <div className="w-full">
            <div className="wrapper w-full   bg-white text-white flex flex-col mx-auto">
                <h1 className="p-4 text-center text-pink-500 underline 
                underline-offset-2 text-4xl">
                    Edit Categories
                </h1>

                <div className=" text-yellow-600 ">
                    <div className="container  mx-auto w-full max-h-[80vh] overflow-hidden grid grid-cols-2  xl:grid-cols-4 mt-8">

                        {/* left */}
                        <div className=" max-h-[40%] min-h-[600px] grid grid-rows-6 pt-8 mx-auto ">
                            <div className="row-span-4">
                                <h3 className="text-center text-yellow-600 underline underline-offset-2">Categories List</h3>
                                <div className="list mt-8 overflow-scroll max-h-[70%]">
                                    <ul className=" list-disc">
                                        {
                                            categories.map((category, index) => (
                                                <li key={index} className="text-center hover:underline">
                                                    <a href='#category-detail' onClick={() => setCurrentCategory(category)}>
                                                        {category.name}
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
                                        <div key={index} className="text-center  hover:underline">
                                            <a href='#category-detail' onClick={() => setCurrentCategory(result)}>
                                                {result.name}
                                            </a>
                                        </div>
                                    ))}

                                </div>

                                <div className="relative">
                                    <input onChange={handleSearch} type="text"
                                        placeholder={'Search Categories'}
                                        className="form-control h-[2em]" />

                                    <div className="search relative right-10 bottom-2 ">

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* center */}
                        <div className=" xl:col-span-2 border-l-2  border-yellow-200 xl:border-r-2">
                            <CreatePostCategory />
                        </div>

                        {/* right */}

                        {currentCategory &&
                            <div id="category-detail">
                                <UpdateCategory currentCategory={currentCategory}
                                    getCurrentCategory={(category) => setCurrentCategory(category)} />
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}


export default Category;