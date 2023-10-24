import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register />
            },      
            {
                path:'/login',
                element: <Login></Login>
            }
        ]

    },
]);

export default router;