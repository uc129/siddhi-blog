import '../styles/underline.css'
import { useAuth } from '../utils/authProvider'
import Logout from './admin-components/auth/logout'

const NavBar = () => {

    const { user, isAuthenticated } = useAuth()
    // console.log(user, 'user from navbar');



    return (

        <nav className=" w-screen flex justify-around p-8 font-garamond"  >

            <ul className="flex justify between w-80 list-none gap-8 text-xs" >
                <li> <a href='/portfolio' className=" nav-link text-xs"> Portfolio </a> </li>
                <li> <a href='/#about' className=" nav-link text-xs"> About Me </a> </li>
            </ul>


            <ul className="flex justify between w-80  list-none gap-8 ">
                <li> <a href='/blog' className=" nav-link text-xs"> Blog </a> </li>
                <li> <a href='/contact' className=" nav-link text-xs"> Contact </a></li>
            </ul>

            <img src={'/assets/SVG/logo2.svg'} alt="logo" className="w-16 hover:-rotate-6 " onClick={() => window.location.href = '/'} />


            {
                isAuthenticated && user &&
                <div className="flex gap-8 justify-center items-center">
                    <a href='/admin' className=" nav-link text-xs"> {user.name} </a>
                    <Logout />
                </div>
            }

            {
                !isAuthenticated &&
                <div className="">  <a href='/admin' className=" nav-link text-xs"> Login </a> </div>
            }

        </nav>


    )


}

export default NavBar