import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Order from "../Components/Order/Order";
import PrivetRoute from "./PrivateRoute";
import Profile from "../Components/Profile/Profile";
import DashLayout from "../Layouts/DashLayout";
import DashHome from "../Components/Dashboard/DashHome";
import TotalOrder from "../Components/Dashboard/TotalOrder";
import TotalUsers from "../Components/Dashboard/TotalUsers";
import AdminRoute from "./AdminRoute";
import Contact from "../Components/Contact/Contact";
import AboutUS from "../Components/AboutUS/AboutUS";
import Blogs from "../Components/Blogs/Blogs";
import Payment from "../Components/Profile/Payment";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/order',
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <AboutUS></AboutUS>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/order/${params?.id}`)
            },
        ]

    },
    {
        path: '/',
        element: <AdminRoute> <DashLayout></DashLayout></AdminRoute>,
        children: [
            {
                path: '/dashhome',
                element: <AdminRoute><DashHome></DashHome></AdminRoute>
            },
            {
                path: '/totalorders',
                element: <AdminRoute><TotalOrder></TotalOrder></AdminRoute>
            },
            {
                path: '/allusers',
                element: <AdminRoute><TotalUsers></TotalUsers></AdminRoute>
            },
        ]
    }
])