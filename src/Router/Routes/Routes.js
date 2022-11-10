import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import AddService from "../../Home/Services/AddService";
import AllService from "../../Home/Services/AllService";
import SingleServices from "../../Home/Services/SingleServices";
import Main from "../../LayOut/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>
                
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><SingleServices></SingleServices></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
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
                path: '/myreview',
                element:  <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

           
        ]
}
])

export default router;