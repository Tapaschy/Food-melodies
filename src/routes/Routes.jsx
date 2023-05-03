import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Chefcategory/Category";
import ChefLayout from "../layouts/ChefLayout";
import ChefDetials from "../pages/Chefcategory/ChefDetials";
import Login from "../pages/login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/login/Register";
import Errorpage from "../pages/Error/Errorpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        loader:()=>fetch('https://assignment-10-server-iqs8y24am-tapaschy.vercel.app/chef'),
        children:[
            {
                path: '/category',
                element: <Category></Category>,
            },
        ]
    },
    {
        path: 'chef',
        element: <ChefLayout></ChefLayout>,
        children:[
            {
                path: ':id',
                element:<ChefDetials></ChefDetials>,
                loader:({params})=>fetch(`https://assignment-10-server-iqs8y24am-tapaschy.vercel.app/chef/${params.id}`),
            },
            {
                path: 'login',
                element:<Login></Login>,
            },
            {
                path: 'register',
                element:<Register></Register>,
            },
        ]
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/login',
                element:<Login></Login>,
            }
        ]
    },
    {
        path: 'register',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;