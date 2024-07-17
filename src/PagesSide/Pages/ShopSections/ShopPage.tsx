import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import BannerShop from "./BannerShop";
import { getProduct } from "../../../redux/features/productSlice";

const ShopPage = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.productSlice);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading)
    return (
      <div
        id="head"
        style={{
          height: " 70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "66px",
            color: "green",
            textAlign: "center",
            fontFamily: "Yellowtail",
          }}
        >
          Loading...
        </h1>
      </div>
    );

  return (
    <>
      <BannerShop />
    </>
  );
};

export default ShopPage;
