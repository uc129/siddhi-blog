// import logo from './logo.svg';


import BlogPage from './pages/blog';
import PostDetailPage from './pages/postDetailPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Landing from './pages/landing';
import AdminPage from './pages/admin';
import CreatePost from './forms/create.post';



const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404</h1>
  },
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },

  {
    path: "/blog/post/:slug",
    element: <PostDetailPage />

  },
  {
    path: "/blog/new-post",
    element: <CreatePost />
  },


  {
    path: '/login',
    element: <h1>Login</h1>
  },
  {
    path: '/register',
    element: <h1>Register</h1>
  },
  {
    path: '/forgot-password',
    element: <h1>Forgot Password</h1>
  },
  {
    path: '/reset-password',
    element: <h1>Reset Password</h1>
  },
  {
    path: '/profile',
    element: <h1>Profile</h1>
  },

  {
    path: '/admin',
    element: <AdminPage />
  }










]);


function App() {







  return (
    <RouterProvider router={router}>
      <div>

      </div>

    </RouterProvider>

  );
}

export default App;
