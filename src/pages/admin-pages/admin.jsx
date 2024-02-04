import NavBar from "../../components/navbar"
// import AdminSidebar from "../../components/sidebars/admin.sidebar"
import { useState } from "react"
import Category from "./category"
import CreatePost from "../../components/admin-components/Post/create.post"
import Tags from "./tags"
import AllPosts from "./allPosts"

import { useAuth } from "../../utils/authProvider"


const classes = {
    wrapper: "wrapper w-full h-full",
    sidebar: "sidebar grid grid-cols-8 min-h-screen min-w-screen",
    container: "container bg-red-100 col-span-7",
    content: "content flex flex-col",
    navigationUl: "navigation grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-2 text-sm justify-start xl:justify-around bg-white  text-center ",
    li: " mx-auto p-2 min-w-[80px] w-full border-2 border-black rounded-lg bg-yellow-200 text-black hover:bg-black hover:text-white cursor-pointer shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ",
    active: 'bg-black text-white pointer-events-none'
}

const AdminPage = () => {

    const { isAuthenticated } = useAuth()
    const [activeTab, setActiveTab] = useState(
        localStorage.getItem('activeTab') || 'new-post'
    );



    const handleTopBarNavigation = (e) => {
        e.preventDefault()
        setActiveTab(e.target.id)
        localStorage.setItem('activeTab', e.target.id)
    }




    return (

        <div className={`wrapper ${!isAuthenticated ? 'hidden' : 'flex'}  flex-col `}>
            <NavBar />

            {/* <div className="col-span-2 md:col-span-1  hidden  md:block pr-8 ">
                    <div id='sidebar' className="h-full rounded-lg">  <AdminSidebar />  </div>
                </div> */}

            <div className=" bg-white">

                <div className="content flex flex-col">

                    <div className={`${classes.navigationUl} p-24`}>
                        <button id='new-post'
                            className={` ${activeTab === 'new-post' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> New Post </button>
                        <button id='all-posts'
                            className={` ${activeTab === 'all-posts' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> All Posts  </button>
                        <button id='categories'
                            className={` ${activeTab === 'categories' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> Categories  </button>
                        <button id='tags'
                            className={` ${activeTab === 'tags' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> Tags </button>
                        <button id='comments'
                            className={` ${activeTab === 'comments' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> Comments </button>
                        <button id='users'
                            className={` ${activeTab === 'users' ? classes.active : classes.li} `} onClick={handleTopBarNavigation}> Users </button>
                    </div>

                    <div className="current-tab w-full ">
                        {activeTab === 'all-posts' && <h1 className="text-center text-4xl p-10"> All Posts </h1>}
                        {activeTab === 'new-post' && <CreatePost />}
                        {activeTab === 'all-posts' && <AllPosts />}
                        {activeTab === 'categories' && <Category />}
                        {activeTab === 'tags' && <Tags />}
                        {activeTab === 'comments' && <h1 className="text-center text-4xl p-10"> Comments </h1>}
                        {activeTab === 'users' && <h1 className="text-center text-4xl p-10"> Users </h1>}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminPage