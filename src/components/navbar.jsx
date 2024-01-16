import '../styles/underline.css'

const NavBar = ({ user }) => {
    console.log(user);

    return (

        <nav className="flex justify between w-[80%] mx-auto px-10 pt-8 pb-4  relative  top-0 z-10 text-black   ">

            <ul className="flex justify between w-80 list-none gap-8 text-xs" >

                <li>
                    <a href='/portfolio' className=" nav-link text-xs"> Portfolio </a>
                </li>

                <li>
                    <a href='/about-me' className=" nav-link text-xs"> About Me </a>
                </li>


            </ul>



            <img src={'/assets/SVG/logo2.svg'} alt="logo" className="w-16 hover:-rotate-6 " onClick={() => window.location.href = '/'} />





            <ul className="flex justify between w-80  list-none gap-8 ">
                <li>
                    <a href='/blog' className=" nav-link text-xs"> Blog </a>
                </li>

                <li>
                    <a href='/contact' className=" nav-link text-xs"> Contact </a>
                </li>
            </ul>
        </nav>


    )


}

export default NavBar