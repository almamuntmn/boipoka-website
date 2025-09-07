import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import ErrorPage from './Component/Errorpage/ErrorPage';
import Home from './Component/Home/Home';
import BookDetails from './Component/BookDetails/BookDetails';
import ListedBooks from './Component/LIstedBook/ListedBooks';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks> </ListedBooks>,
        loader: () => fetch('/booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
