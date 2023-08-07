import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
  element:<App/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);


export const Routes = routes;