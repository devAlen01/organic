import scss from "./BannerAbout.module.scss";
import aboutUs from "../../../assets/aboutUs.png";
const BannerAbout = () => {
  return (
    <section className={scss.BannerAbout}>
      <div
        style={{
          backgroundImage: `url(${aboutUs})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className={scss.banner}
      >
        <h1>About Us</h1>
      </div>
    </section>
  );
};

export default BannerAbout;
