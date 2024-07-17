import scss from "./AboutUs.module.scss";
import aboutImg from "../../../assets/image.png";
import food from "../../../assets/food.png";
import mail from "../../../assets/mail.png";

const AboutUs = () => {
  return (
    <section className={scss.AboutUs}>
      <div className="container">
        <div className={scss.content}>
          <img src={aboutImg} alt="about" />
          <div className={scss.text}>
            <h2>About Us</h2>
            <h3>We Believe in Working Accredited Farmers</h3>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className={scss.organic}>
              <div className={scss.foods}>
                <img src={food} alt="food" />
                <div className={scss.text}>
                  <h4>Organic Foods Only</h4>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <div className={scss.foods}>
                <img src={mail} alt="mail" />
                <div className={scss.text}>
                  <h4>Quality Standards</h4>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
