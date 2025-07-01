import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    children: [
      {
        index: true,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <RegisterPage />,
    children: [
      {
        index: true,
      },
    ],
  },
  {
    path: "/test",
    element: <App />,
    children: [
      {
        index: true,
      },
    ],
  },
]);
