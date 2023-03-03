import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="bookshelf" element={<BookShelf />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
