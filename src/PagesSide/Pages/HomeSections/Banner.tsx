import scss from "./Banner.module.scss";
import banner1 from "../../../assets/banana.svg";
import banner2 from "../../../assets/homeSection2.svg";

const Banner = () => {
  return (
    <section className={scss.Banner}>
      <div
        className={scss.banner1}
        style={{
          backgroundImage: `url(${banner1})`,
          height: "50vh",
          width: "40%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          borderRadius: "16px",
        }}
      >
        <span>Natural!!</span>

        <h3 className={scss.garden}>Get Garden Fresh Fruits</h3>
      </div>
      <div
        className={scss.banner1}
        style={{
          backgroundImage: `url(${banner2})`,
          height: "50vh",
          width: "40%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          borderRadius: "16px",
        }}
      >
        <span>Offer!!</span>
        <h3 className={scss.vegetables}>Get 10% off on Vegetables</h3>
      </div>
    </section>
  );
};

export default Banner;
