import SuggestedPostsList from "../components/SuggestedPostsList";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import PostDetail from "../components/postDetail"
import { useParams } from "react-router-dom"






const PostDetailPage = () => {

    const { slug } = useParams();

    return (
        <div className={`flex-col justify-between `}>
            {/* <img src='/assets/grainyFilter.svg' alt='grainyFilter' className="absolute top-0 left-0 w-full h-full object-cover grayscale" /> */}


            <NavBar />
            <PostDetail slug={slug} />
            <SuggestedPostsList />
            <Footer />

        </div>
    )
}

export default PostDetailPage;