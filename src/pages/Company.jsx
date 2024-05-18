import { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import data from "../util/data.json";

const Company = () => {
  const [selected, setSelected] = useState("history");
  const { teamData } = data;
  return (
    <main className="about-page">
      <Header title={"Company"} project={false} />

      <div className="about-page-container">
        <div className="about-page-heading">
          <h4>About </h4>
          <h2>Our Company</h2>
          <p>
            We are passionate about extracting valuable resources from the earth
            while prioritizing sustainability and environmental responsibility.
            With years of experience and a dedicated team, we strive to innovate
            and implement safe mining practices. Our commitment to ethical
            mining and community engagement sets us apart. Join us on this
            journey as we contribute to the growth and development of the mining
            industry!
          </p>
        </div>
        <section className="content-container">
          <div className="image">
            <img src="/images/engineers.jpg" alt="about" />
          </div>
          <div className="content-wrapper">
            <div className="navigations">
              <ul>
                <li
                  className={`${selected === "history" ? "current" : ""}`}
                  onClick={() => setSelected("history")}
                >
                  History
                </li>
                <li
                  className={`${selected === "mission" ? "current" : ""}`}
                  onClick={() => setSelected("mission")}
                >
                  Mission
                </li>
                <li
                  className={`${selected === "vision" ? "current" : ""}`}
                  onClick={() => setSelected("vision")}
                >
                  Vision
                </li>
              </ul>
            </div>
            <div className="content">
              {selected === "history" ? (
                <p>
                  SCCGIL is a private limited liability company (LLC) registered
                  under the laws of the federal republic of Nigeria as a mining
                  and exploration company. We are also working towards being
                  able to process the minerals explored and export them. The
                  company is well grounded with professional staffs and
                  efficiently managed by experienced and competent individuals
                  with good character and impressive knowledge in mining
                  industry. We are actively involved in the mining of lithium,
                  gold, tourmaline, tantalite and colombite
                </p>
              ) : selected === "mission" ? (
                <div>
                  <p>
                    - To contribute to global technological advancement through
                    mining of lithium in the drive to achieve a pollution free
                    atmosphere.
                  </p>
                  <p>
                    - To contribute to the global economy by impacting lives
                    through the provision of jobs, sharing developmental
                    benefits with the people living in and around the mines.
                  </p>
                  <p>
                    - To ensure sustainable growth of the company by following
                    best practices of corporate governance and promoting
                    ecological balance and mineral conservation.
                  </p>
                  <p>
                    - To contribute to the global climate drive by practising
                    green mining
                  </p>
                </div>
              ) : selected === "vision" ? (
                <p>
                  In SCCGIL, we aim to be a leading force in the global mining
                  industry, providing a world class approach to mining, not
                  neglecting our social responsibility, practising safe mining
                  and maximizing the potentials of all involved.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
        <section className="team-container">
          <div className="team-heading">
            <h4>Our </h4>
            <h2>Team members</h2>
            <p>
              Meet our exclusive members. Connect with fellow mining industry
              professionals, access valuable resources, and unlock networking
              opportunities.
            </p>
          </div>
          <div className="team-wrapper">
            <Carousel data={teamData} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Company;
