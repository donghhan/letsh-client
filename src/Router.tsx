import { createBrowserRouter } from "react-router-dom";
import { Path } from "./utils/path";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: Path.home,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "",
      },
    ],
  },
]);

export default router;
