import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact";
import HomePage from "../Pages/HomePage";
import SignIn from "../Sheared/SignIn";
import SignUp from "../Sheared/SignUp";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/food',
                element: <PrivateRoutes><Home></Home></PrivateRoutes>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])