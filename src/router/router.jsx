import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import CheekOut from "../page/CheekOut/CheekOut";
import CheekCard from "../page/CheekCard/CheekCard";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: 'login',
            element: <Login/>
          },
          {
            path: 'signup',
            element: <SignUp/>
          },
          {
            path: 'cheekout/:id',
            element: <CheekOut/>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: '/cheekcard',
            element: <PrivateRouter><CheekCard/></PrivateRouter>
          }

      ]
    },
  ]);
  export default router;