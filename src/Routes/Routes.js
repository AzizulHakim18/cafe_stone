import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])