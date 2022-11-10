import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import AddService from "../../Home/Services/AddService";
import AllService from "../../Home/Services/AllService";
import SingleServices from "../../Home/Services/SingleServices";
import Main from "../../LayOut/Main";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import Signup from "../../Pages/Signup/Signup";


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
                element:<AddService></AddService>
            },
            {
                path: '/checkout/:id',
                element: <SingleServices></SingleServices>,
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
                element: <MyReview></MyReview>
            }

           
        ]
}
])

export default router;