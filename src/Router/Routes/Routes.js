import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import AddService from "../../Home/Services/AddService";
import AllService from "../../Home/Services/AllService";
import Services from "../../Home/Services/Services";
import Main from "../../LayOut/Main";

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
            }

           
        ]
}
])

export default router;