import { FaStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import scss from "./Detail.module.scss";
import {
  addToCart,
  getProductCart,
} from "../../../redux/features/productSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import singleShop from "../../../assets/shopSingle.png";

const DetailPage = () => {
  const dispatch = useAppDispatch();
  const [checkIn, setCheckIn] = useState(false);
  useEffect(() => {
    dispatch(getProductCart());
  }, [dispatch]);
  const { detail, cart } = useAppSelector((state) => state.productSlice);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  // const cartFind = cart?.find((el) => el?.id_product === detail._id);

  function addToBasket() {
    let basket = {
      id_product: detail._id,
      type: detail.type,
      image: detail.image,
      title: detail.title,
      price: detail.price,
      desc: detail.desc,
      rating: detail.rating,
      count,
    };
    dispatch(addToCart(basket));
  }

  function checkProductInCart(_id: number) {
    if (cart) {
      let obj = cart.find((el) => el.id_product === _id);
      return obj ? true : false;
    }
  }
  return (
    <div className={scss.DetailPage}>
      <div
        style={{
          backgroundImage: `url(${singleShop})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className={scss.banner}
      >
        <h1>Shop single</h1>
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <span className={scss.type}>{detail.type}</span>
            <img src={detail.image} alt="image" />
          </div>
          <div className={scss.info}>
            <h1>{detail.title}</h1>
            <div className={scss.rating}>
              <span>
                <FaStar
                  style={{ color: detail.rating! >= 1 ? "gold" : "gray" }}
                />
              </span>
              <span>
                <FaStar
                  style={{ color: detail.rating! >= 2 ? "gold" : "gray" }}
                />
              </span>
              <span>
                <FaStar
                  style={{ color: detail.rating! >= 3 ? "gold" : "gray" }}
                />
              </span>
              <span>
                <FaStar
                  style={{ color: detail.rating! >= 4 ? "gold" : "gray" }}
                />
              </span>
              <span>
                <FaStar
                  style={{ color: detail.rating! >= 5 ? "gold" : "gray" }}
                />
              </span>
            </div>
            <h4>${detail.price}</h4>

            <p>{detail.desc}</p>
            <div className={scss.btn_add}>
              <h4>Quantity:</h4>
              <input
                onChange={(e) => setCount(+e.target.value)}
                type="number"
                defaultValue={count}
              />
              {checkProductInCart(detail._id!) ? (
                <>
                  <button onClick={() => navigate("/cart")}>
                    Go to basket
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    addToBasket();
                    setCheckIn(!checkIn);
                  }}
                >
                  Add to basket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
