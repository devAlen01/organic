import scss from "./BannerShop.module.scss";
import shop from "../../../assets/shop.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IProduct } from "../../../types";
import { useAppSelector } from "../../../redux/store";

const BannerShop = () => {
  const { product } = useAppSelector((state) => state.productSlice);

  return (
    <section className={scss.HeroSection}>
      <div
        style={{
          backgroundImage: `url(${shop})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className={scss.banner}
      >
        <h1>Shop</h1>
      </div>
      <div className="container">
        <div className={scss.product}>
          {product?.map((el: IProduct) => (
            <ProductCard key={el._id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerShop;
