import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import UserLayout from "../layout/UserLayout";
import Login from "../pages/userPase/Login";
import Rejister from "../pages/userPase/Rejister";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Categories></Categories>,
            loader: ()=> fetch('http://localhost:5000/news')

        },
        {
          path: 'categories/:id',
          element: <Categories></Categories>,
          loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivetRoute><News></News></PrivetRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
          
        }
      ]
    },
    {
      path: "user",
      element:<UserLayout></UserLayout>,
      children: [
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'rejister',
          element: <Rejister></Rejister>
        }
      ]
    
    }
  ]);

  export default router