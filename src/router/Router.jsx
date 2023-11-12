import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../pages/AddProduct";
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
            },
            {
                path: '/brand/:name/details',
                element: <BrandDetails></BrandDetails>
            },
            {
                path:'/addproduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            }
        ]

    },
]);

export default router;