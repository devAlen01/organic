import scss from "./Cart.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getProductCart,
  removeProductCart,
} from "../../../redux/features/productSlice";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, isLoading } = useAppSelector((state) => state.productSlice);
  const totalPrice = cart?.reduce((acc, el) => acc + +el?.price * el.count!, 0);
  useEffect(() => {
    dispatch(getProductCart());
  }, []);

  if (isLoading)
    return (
      <h1
        style={{
          fontSize: "90px",
          color: "aqua",
          textAlign: "center",
          fontFamily: "Yellowtail",
        }}
      >
        Loading...
      </h1>
    );
  return (
    <div className={scss.Cart}>
      <div className="container">
        {cart && cart?.length ? (
          <div className={scss.content}>
            <table>
              <thead>
                <tr>
                  <th>image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart?.map((el, index) => (
                    <tr key={index}>
                      <td className={scss.image}>
                        <img src={el?.image} width={70} alt="prod" />
                      </td>
                      <td>{el?.title}</td>
                      <td>${+el?.price * el.count!}</td>
                      <td className={scss.quantity}>
                        {/* <button>-</button> */}
                        <span>{el.count}</span>
                        {/* <button>+</button> */}
                      </td>
                      <td className={scss.action_btn}>
                        <button className={scss.buy}>Buy</button>
                        <button
                          onClick={() => dispatch(removeProductCart(el._id))}
                          className={scss.remove}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                <div className={scss.total_price}>
                  <h2>Total price: ${totalPrice}</h2>
                </div>
              </tbody>
            </table>
          </div>
        ) : (
          <h1
            style={{
              fontSize: "90px",
              color: "green",
              textAlign: "center",
              fontFamily: "Yellowtail",
            }}
          >
            Empty cart
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
