const styles = {
    li: "  text-gray-700  text-sm font-bold list-none "
}



const AdminSidebar = () => {




    return (
        <div className="sidebar p-4 h-full bg-green-200 border-2 border-l-0 border-black">

            <div className="sidebar_title pb-8">
                <h2>Admin</h2>
            </div>

            <div className="sidebar__menu">
                <ul className="flex flex-col gap-4 ">
                    <li className={`${styles.li}`}>
                        <a href="/admin/dashboard">Dashboard</a>
                    </li>
                    <li className={`${styles.li}`} >
                        <a href="/admin/users">Users</a>
                    </li >
                    <li className={`${styles.li}`}>
                        <a href="/admin/products">Products</a>
                    </li>
                    <li className={`${styles.li}`}>
                        <a href="/admin/orders">Orders</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar