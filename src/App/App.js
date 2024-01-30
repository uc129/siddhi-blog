// Desc: This is the main app file which contains all the routes and components
//  Route Elements
import Landing from '../pages/landing';
import BlogPage from '../pages/blog';
import PostDetailPage from '../pages/postDetailPage';
import AdminPage from '../pages/admin-pages/admin';
import CreatePost from '../components/admin-components/Post/create.post';
import Category from '../pages/admin-pages/category';
import RegisterUser from '../components/admin-components/auth/register';
import LoginUser from '../components/admin-components/auth/login';
//Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//Auth
import { useAuth } from '../utils/authProvider';
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


function App() {
  const { isAuthenticated } = useAuth();
  // console.log('isAuthenticated from app page', isAuthenticated);
  return <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/post' element={<PostDetailPage />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/admin' element={isAuthenticated ? <AdminPage /> : <Navigate to={'/login'} />} />
        <Route path='/admin/new-post' element={isAuthenticated ? <CreatePost /> : <Navigate to={'/login'} />} />
        <Route path='/admin/category' element={isAuthenticated ? <Category /> : <Navigate to={'/login'} />} />
      </Routes>
    </BrowserRouter>
  </>






}

export default App;
