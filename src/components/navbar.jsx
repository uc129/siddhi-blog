import '../styles/underline.css'
import { useAuth } from '../utils/authProvider'
import Logout from './admin-components/auth/logout'

const NavBar = () => {
    const { user, isAuthenticated } = useAuth()

    return (

        <nav className=" w-screen min-h-20 flex justify-around items-center py-8 font-garamond text-xs"  >
            <img src={'/assets/SVG/logo.svg'} alt="logo" className="max-w-[0.6em] hover:-rotate-6 " onClick={() => window.location.href = '/'} />

            <ul className="flex justify between list-none gap-8 " >
                {/* <li> <a href='/portfolio' className=" nav-link "> Portfolio </a> </li> */}
                <li> <a href='/' className=" nav-link "> Portfolio </a> </li>

                <li> <a href='/#about' className=" nav-link "> About Me </a> </li>

                <li> <a href='/blog' className=" nav-link "> Blog </a> </li>
                <li> <a href='/contact' className=" nav-link "> Contact </a></li>
            </ul>


            {
                isAuthenticated && user &&
                <div className="flex gap-8 justify-center items-center">
                    <a href='/admin' className=" nav-link "> {user.name} </a>
                    <Logout />
                </div>
            }

            {
                !isAuthenticated &&
                <div className="">  <a href='/admin' className=" nav-link "> Login </a> </div>
            }

        </nav>


    )


}

export default NavBar