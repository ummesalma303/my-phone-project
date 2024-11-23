import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../components/Main";
import Phones from "../components/Phones";
import Phone from "../components/Phone";


  
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/phones',
            element:<Phones></Phones>,
            loader: ()=> fetch("http://localhost:5000/phones/")
        },
        {
            path:'/phones/:id',
            element:<Phone></Phone>,
            loader: ({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
        }
      ]
    },
  ]);

  export default router