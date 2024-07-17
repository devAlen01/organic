import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import ProductCard from "../../components/ProductCard/ProductCard";
import scss from "./Categories.module.scss";
import { getProduct } from "../../../redux/features/productSlice";
import { IProduct } from "../../../types";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { product, isLoading } = useAppSelector((state) => state.productSlice);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <h1
        style={{
          fontSize: "33px",
          color: "green",
          textAlign: "center",
          fontFamily: "Yellowtail",
        }}
      >
        Loading...
      </h1>
    );

  return (
    <section className={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <h3>Categories </h3>
            <h4>Our Products</h4>
          </div>
          <div className={scss.product}>
            {product.slice(0, 4)?.map((el: IProduct) => (
              <ProductCard key={el._id} {...el} />
            ))}
          </div>

          <div className={scss.more_btn}>
            <a href="#head">
              <button onClick={() => navigate("/shop")}>Load More</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
