import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Chefcategory/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader:()=>fetch('http://localhost:5000/chef'),
        children:[
            {
                path: '/category',
                element: <Category></Category>,
            }
        ]
    }
])
export default router;