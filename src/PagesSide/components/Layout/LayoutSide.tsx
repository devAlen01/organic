import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import scss from "./LayoutSide.module.scss";
import Footer from "./Footer/Footer";
import { FC } from "react";

const LayoutSide: FC = () => {
  return (
    <div className={scss.LayoutSide}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSide;
