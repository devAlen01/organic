import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../PagesSide/components/Layout/LayoutSide";
import HomePage from "../PagesSide/Pages/HomeSections/HomePage";
import Admin from "../PagesSide/components/Admin/Admin";
import ShopPage from "../PagesSide/Pages/ShopSections/ShopPage";
import DetailPage from "../PagesSide/Pages/DetailPage/DetailPage";
import Cart from "../PagesSide/Pages/CartPage/Cart";
import Edit from "../PagesSide/components/Edit/Edit";
import AboutPage from "../PagesSide/Pages/AboutPage/AboutPage";

export const router: any = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/edit/:_id",
    element: <Edit />,
  },
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
