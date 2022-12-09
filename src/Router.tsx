import { createBrowserRouter } from "react-router-dom";
import { Path } from "./utils/path";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import RoomListPage from "./pages/rooms/RoomListPage";
import RoomDetailPage from "./pages/rooms/RoomDetailPage";

const router = createBrowserRouter([
  {
    path: Path.home,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          {
            path: Path.signin,
            element: <SigninPage />,
          },
          {
            path: Path.signup,
            element: <SignupPage />,
          },
        ],
      },
      {
        path: Path.rooms,
        element: <RoomListPage />,
        children: [
          {
            path: Path.roomDetail,
            element: <RoomDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
