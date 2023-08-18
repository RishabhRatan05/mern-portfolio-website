import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Navbar from './components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: 
    <>
    <Navbar/>
    <About/>
    </>,
  },
  {
    path: "/signin",
    element:<>
    <Navbar/>
    <Login/>
    </> ,
  },
  {
    path: "/register",
    element: <SignUp/>,
  },
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
