import NavBar from "../components/navbar"
import AdminSidebar from "../components/sidebars/admin.sidebar"

const classes = {
    wrapper: "wrapper w-full h-full",
    sidebar: "sidebar grid grid-cols-8 min-h-screen min-w-screen",
    container: "container bg-red-100 col-span-7",
    content: "content flex flex-col",
    navigation: "navigation flex flex-wrap gap-2 p-2" +
        "justify-start xl:justify-around bg-gray-100 text-center border-b-2 border-black",

    li: "w-[100%] mx-auto ml-2 md:ml-0 md:w-48 " +
        "py-4 bg-gray-200 rounded-lg " +
        "font-bold text-2xl md:text-xl lg:text-lg " +
        "hover:bg-gray-300 hover:text-gray-800 hover:shadow-lg "

}

const AdminPage = () => {

    return (
        <div className="wrapper min-h-screen h-full w-full min-w-screen flex flex-col ">
            <NavBar />

            <div className="sidebar grid grid-cols-8 min-h-screen min-w-screen">

                <div className="col-span-2 md:col-span-1   ">
                    <AdminSidebar />
                </div>

                <div className="container  bg-red-100 col-span-6  md:col-span-7">

                    <div className="content flex flex-col">

                        <ul className={`${classes.navigation}`}>
                            <li className={`${classes.li}`}> New Post </li>
                            <li className={`${classes.li}`}> Tab 2  </li>
                            <li className={`${classes.li}`}> Tab 3  </li>
                            <li className={`${classes.li}`}> Tab 4  </li>
                            <li className={`${classes.li}`}> Tab 5  </li>
                            <li className={`${classes.li}`}> Tab 6  </li>
                        </ul>


                        <div className="current-tab w-full">





                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminPage