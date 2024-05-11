import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Allfeatures from "./Features/Allfeatures";
import Alldownload from "./Download/Alldownload";
import Allabout from "./About/Allabout";
import Alldelete from "./Delete/Alldelete";
import Allapi from "./Api/Allapi";
import Allapi2 from "./Api2/Allapi2";
import Allapi3 from "./Api3/Allapi3";
import Allshopping from "./Shop/Allshopping";
import Allthecart from "./Thecart/Allthecart";
import { CartProvider } from "react-use-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Features",
    element: <Allfeatures/>,
  },
  {
    path: "Download",
    element: <Alldownload/>,
  },
  {
    path: "About",
    element: <Allabout/>,
  },
  {
    path: "Delete",
    element: <Alldelete/>,
  },
  {
    path: "Api",
    element: <Allapi/>
  },
  {
    path: "Api2",
    element: <Allapi2/>,
  },
  {
    path: "Api3",
    element: <Allapi3/>,
  },
  {
    path: "Shop",
    element: <Allshopping/>,
  },
  {
    path: "Thecart",
    element: <Allthecart/>,
  },
]);

createRoot(document.getElementById("root")).render(
<CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
);




//في حالة صفحة واحدة 
//import React from 'react';
//import ReactDOM from 'react-dom/client';

//import App from './App';


//var mohamed = ReactDOM.createRoot(document.getElementById('root'));
//mohamed.render(<App />);


