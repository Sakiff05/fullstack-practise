import Add from "../pages/add/Add";
import Details from "../pages/details/Details";
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
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "favorites/details/:id",
        element: <Details />,
      },
    ],
  },
];

export default ROUTES;
