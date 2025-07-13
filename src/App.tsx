import "./assets/scss/style.scss";
import Homepage from "./pages/Homepage";
import Server from "./pages/Server";
import Domain from "./pages/Domain";
import Billing from "./pages/Billing";
import Support from "./pages/Support";
import Referrals from "./pages/Referrals";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserParams from "./pages/UserParams";
import SSL from "./pages/SSL";
import Error from "./pages/Error";
import { formData } from "./mock-data/data";

// import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/server",
      element: <Server />,
    },
    {
      path: "/domain",
      element: <Domain />,
    },
    {
      path: "/ssl",
      element: <SSL />,
    },
    {
      path: "/billing",
      element: <Billing />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/referrals",
      element: <Referrals />,
    },
    {
      path: "/*",
      element: <Error />,
    },
    {
      path: "/server/:id",
      element: <UserParams />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
