import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import logo from "../../../../assets/Logo.svg";
import scss from "./Footer.module.scss";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contacts}>
            <div className={scss.adress}>
              <h3>Contact Us</h3>
              <div className={scss.email}>
                <h4>Email</h4>
                <span>needhelp@Organia.com</span>
              </div>
              <div className={scss.email}>
                <h4>Phone</h4>
                <span>666 888 888</span>
              </div>
              <div className={scss.email}>
                <h4>Address</h4>
                <span>88 road, borklyn street, USA</span>
              </div>
            </div>
          </div>
          <div className={scss.organic}>
            <img src={logo} alt="logo" />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className={scss.logo}>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaFacebook />
              </span>{" "}
              <span>
                <BsTwitter />
              </span>{" "}
              <span>
                <FaPinterest />
              </span>
            </div>
          </div>
          <div className={scss.utility_pages}>
            <h3>Utility Pages</h3>
            <h4>Style Guide</h4>
            <h4>404 Not Found</h4>
            <h4>Password Protected</h4>
            <h4>Licences</h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
