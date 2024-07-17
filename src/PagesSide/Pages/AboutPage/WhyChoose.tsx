import scss from "./WhyChoose.module.scss";
import choose from "../../../assets/PhotoCh.png";
import point_icon from "../../../assets/point.svg";
import purchase from "../../../assets/ReturnPurchase.png";
import nFood from "../../../assets/NaturalFood.png";

import phone from "../../../assets/PhoneTime.png";
import security from "../../../assets/CardSecurity.png";

const WhyChoose = () => {
  return (
    <section className={scss.WhyChoose}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.salad}>
            <div className={scss.info}>
              <h2>Why Choose us?</h2>
              <h4>We do not buy from the open market & traders.</h4>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className={scss.text}>
                <div className={scss.natural}>
                  <div className={scss.point}>
                    <img src={point_icon} alt="point" />
                    <h5>100% Natural Product</h5>
                  </div>
                  <p>
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
                <div className={scss.natural}>
                  <div className={scss.point}>
                    <img src={point_icon} alt="point" />
                    <h5> Increases resistance</h5>
                  </div>
                  <p>
                    Filling, and temptingly healthy, our Biona Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>
            <div className={scss.image}>
              <img src={choose} alt="img" />
            </div>
          </div>
          <div className={scss.cards}>
            <div className={scss.card}>
              <img src={purchase} alt="img" />
              <h3>Return Policy</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className={scss.card}>
              <img src={nFood} alt="img" />
              <h3>100% Fresh</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>{" "}
            <div className={scss.card}>
              <img src={phone} alt="img" />
              <h3>Support 24/7</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>{" "}
            <div className={scss.card}>
              <img src={security} alt="img" />
              <h3>Secured Payment</h3>
              <p>Simply dummy text of the printintypesetting industry.</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
