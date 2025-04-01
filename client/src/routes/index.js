import LayoutDefault from "../layout/LayoutDefault/index";
import ComboUuDai from "../pages/ComboUuDai";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Order from "../pages/Order";
import ProductDetail from "../pages/Products/ProductDetail";
import Products from "../pages/Products";
import Register from "../pages/Register";
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutAdmin from "../layout/LayoutAdmin/LayoutAdmin";
import Dashboard from "../pages/Dashboard";
import LienHe from "../pages/LienHe";
import GioiThieu from "../pages/GioiThieu";
import PhongNgu from "../pages/NoiThatPN";
import PhongKhach from "../pages/NoiThatPK";
import ChiTietSP from "../pages/ChitietSP";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "combouudai",
        element: <ComboUuDai />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "phongngu",
        element: <PhongNgu />
      },
      {
        path: "phongkhach",
        element: <PhongKhach />
      },

      {
        path: "gioithieu",
        element: <GioiThieu />
      },
      {
        path: "lienhe",
        element: <LienHe />
      },
      {
        path: "chitiet/:id",
        element: <ChiTietSP />
      },
    ],
  },
  // private
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: "admin",
            element: <Dashboard />,
          },


        ],
      },
    ],
  },
];
