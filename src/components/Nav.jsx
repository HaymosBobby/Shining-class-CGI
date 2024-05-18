import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 180 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <nav
      className={`${scroll ? "sticky" : ""} ${path !== "/" ? "bgd-dark" : ""}`}
    >
      <div className="nav-container ">
        <div className="bg-logo">
          <Link to="/">
            <img
              src={
                path !== "/"
                  ? "/images/sc-long-0.png"
                  : "/images/sc-long-wht.png"
              }
              alt="Shining Class"
            />
          </Link>
        </div>
        <div className="top">
          <div className="con-soc">
            <div className="nav-contact">
              <ul>
                <Link to="tel: +2348055666633">
                  <li>
                    <Icon icon="bi:telephone-fill" hFlip={true} /> +234 805 5666
                    633
                  </li>
                </Link>
                <Link to="tel: +2348055666633">
                  <li>
                    <Icon icon="bi:phone-fill" hFlip={true} /> +234 805 5666 633
                  </li>
                </Link>
                <Link to="mailto: info@shiningclass.com">
                  <li>
                    <Icon icon="bi:envelope" hFlip={true} />
                    info@shiningclass.com
                  </li>
                </Link>
              </ul>
            </div>
            <div className="nav-socials">
              <ul>
                <Link to="https://www.facebook.com">
                  <li>
                    <Icon icon={"bi:facebook"} />
                  </li>
                </Link>
                <Link to="https://www.instagram.com">
                  <li>
                    <Icon icon={"bi:instagram"} />
                  </li>
                </Link>
                <Link to="https://www.linkedin.com">
                  <li>
                    <Icon icon={"bi:linkedin"} />
                  </li>
                </Link>
                <Link to="https://www.twitter.com">
                  <li>
                    <Icon icon={"bi:twitter-x"} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="md-logo">
            <Link to="/">
              <img
                src={
                  scroll || path !== "/"
                    ? "/images/sc-long-0.png"
                    : "/images/sc-long-wht.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <Link to="">
                <li className={`${path === "/" ? "current" : ""}`}>Home</li>
              </Link>
              <Link to="/company">
                <li className={`${path === "/company" ? "current" : ""}`}>
                  Company
                </li>
              </Link>
              <Link to="/services">
                <li className={`${path === "/services" ? "current" : ""}`}>
                  Services
                </li>
              </Link>
              <Link to="/contact">
                <li className={`${path === "/contact" ? "current" : ""}`}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className={`mobile-toggler ${
              mobileNavOpen ? "mobile-nav-active" : ""
            }`}
          >
            <div className="toggle-container">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-navigations ${
          mobileNavOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div className="mobile-navigation-container">
          <div onClick={() => setMobileNavOpen(false)} className="cancel">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="mobile-nav-links">
            <ul>
              <Link to="/" onClick={() => setMobileNavOpen(false)}>
                <li>Home</li>
              </Link>
              <Link to="/company" onClick={() => setMobileNavOpen(false)}>
                <li>Company</li>
              </Link>
              <Link to="/services" onClick={() => setMobileNavOpen(false)}>
                <li>Services</li>
              </Link>
              <Link to="/contact" onClick={() => setMobileNavOpen(false)}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="mobile-socials">
            <ul>
              <Link to="https://www.facebook.com">
                <li>
                  <Icon icon={"ri:facebook-fill"} />
                </li>
              </Link>
              <Link to="https://www.instagram.com">
                <li>
                  <Icon icon={"bi:instagram"} />
                </li>
              </Link>
              <Link to="https://www.linkedin.com">
                <li>
                  <Icon icon={"akar-icons:linkedin-fill"} />
                </li>
              </Link>
              <Link to="https://www.twitter.com">
                <li>
                  <Icon icon={"pajamas:twitter"} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
