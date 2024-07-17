import scss from "./Team.module.scss";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png";
import team3 from "../../../assets/team3.png";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Team = () => {
  return (
    <section className={scss.Team}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Team</h2>
            <h3>Our Organic Experts</h3>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's <br /> standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={scss.team_cards}>
            <div className={scss.card}>
              <div className={scss.image}>
                <img src={team1} alt="team" />
              </div>
              <h5>Giovani Bacardo</h5>
              <div className={scss.job}>
                <h6>Farmer</h6>
                <div className={scss.media}>
                  <FaFacebook />
                  <BsTwitter />
                </div>
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.image}>
                <img src={team2} alt="team" />
              </div>
              <h5>Marianne Loreno</h5>
              <div className={scss.job}>
                <h6>Designer</h6>
                <div className={scss.media}>
                  <BsInstagram />
                  <FaFacebook />
                  <BsTwitter />
                </div>
              </div>
            </div>
            <div className={scss.card}>
              <div className={scss.image}>
                <img src={team3} alt="team" />
              </div>
              <h5>Riga Pelore</h5>
              <div className={scss.job}>
                <h6>Farmer</h6>
                <div className={scss.media}>
                  <BsInstagram />
                  <FaFacebook />
                  <BsTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
