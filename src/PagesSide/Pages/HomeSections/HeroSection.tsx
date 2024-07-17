import scss from "./HeroSection.module.scss";
import banner from "../../../assets/Banner.png";

const HeroSection = () => {
  return (
    <section
      className={scss.HeroSection}
      style={{
        backgroundImage: `url(${banner})`,
        height: "85vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="container">
        <div className={scss.info}>
          <h2>100% Natural Food</h2>
          <h1>Choose the best healthier way of life</h1>
          <button>Explore new </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
