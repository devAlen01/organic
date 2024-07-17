import scss from "./HeroAbout.module.scss";
import salad from "../../../assets/salad.png";
import tractor from "../../../assets/Tractor.png";
import plant from "../../../assets/ChemicalPlant.png";

const HeroAbout = () => {
  return (
    <section className={scss.HeroAbout}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <img src={salad} alt="salad" />
          </div>
          <div className={scss.info}>
            <h3>About Us</h3>
            <h2>We do Creative Things for Success</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. <br /> <br />
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className={scss.icons}>
              <div className={scss.tractor_plant}>
                <img src={tractor} alt="tractor" />
                <p>Modern Agriculture Equipment</p>
              </div>
              <div className={scss.tractor_plant}>
                <img src={plant} alt="plant" />
                <p>No growth hormones are used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
