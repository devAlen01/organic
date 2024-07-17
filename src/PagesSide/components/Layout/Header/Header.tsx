import scss from "./Header.module.scss";
import logo from "../../../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProductCart } from "../../../../redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";

const link = [
  {
    to: "/",
    page: "Home",
  },
  {
    to: "/about",
    page: "About",
  },
  {
    to: "#",
    page: "Pages",
  },
  {
    to: "/shop",
    page: "Shop",
  },
  {
    to: "#",
    page: "Projects",
  },
  {
    to: "/admin",
    page: "Admin",
  },
];

const Header = () => {
  const { cart } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductCart());
  }, [useAppSelector]);
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <div className={scss.logo}>
              <img src={logo} alt="logo" />
            </div>
            <nav className={scss.navigate}>
              {link.map((el, index) => (
                <NavLink key={index} to={el.to}>
                  {el.page}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className={scss.icons}>
            <div className={scss.search}>
              <input type="text" />

              <div className={scss.search_icon}>
                <IoSearchOutline className={scss.icon} />
              </div>
            </div>
            <Link to="/cart" className={scss.cart}>
              <div className={scss.cart_icon}>
                <FiShoppingCart />
              </div>
              <span>Cart {cart?.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
