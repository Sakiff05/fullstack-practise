import Add from "../pages/add/Add";
import Favorite from "../pages/favorite/Favorite";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";

const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "favorites",
        element: <Favorite />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
