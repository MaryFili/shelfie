import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import BookShelf from './pages/BookShelf';
import WishList from './pages/WishList'


//layout
import RootLayout from './Layout/RootLayout';
import { useAuthContext } from './hooks/useAuthContext';
import LoginModal from './pages/Login';







function App() {
  const { user, authIsReady } = useAuthContext();


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={!user ? <SignUp /> : (<Navigate to="/bookshelf" />)} />
        <Route path="login" element={!user ? <LoginModal /> : (<Navigate to="/bookshelf" />)} />
        <Route path="bookshelf" element={user ? <BookShelf /> : (<Navigate to="/" />)} />
        <Route path="wishlist" element={user ? <WishList /> : (<Navigate to="/" />)} />
        <Route path="*" element={<NotFound />} />
      </Route>
    ))




  return (
    <>
      {authIsReady && <RouterProvider router={router} />}
    </>
  );
}

export default App;
