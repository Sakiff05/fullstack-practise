import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./routes/routes";

const routes = createBrowserRouter(ROUTES);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
