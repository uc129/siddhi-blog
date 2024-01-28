// import BodyBackground from "./bodyBackground";
import Footer from "./footer"
import NavBar from "./navbar"

const Layout = ({ children }) => {


    return (
        <div className="w-full h-full font-roboto"
        // style={{ background: `url('/assets/grainyFilter.svg')` }}
        >

            {/* <img className="  grayscale absolute top-0" src='/assets/grainyFilter.svg' alt="grainyFilter" /> */}

            <NavBar />
            <div className="container w-full mx-auto font-hero">
                {children}
            </div>

            <Footer />

        </div>
    )

}

export default Layout;