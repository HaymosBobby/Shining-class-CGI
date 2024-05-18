import { Icon } from "@iconify/react";
import Header from "../components/Header";
import CountUp from "react-countup";
import { useMemo } from "react";
import data from "../util/data.json";

const Service = () => {
  const enableScrollSpy = useMemo(() => true, []);
  const scrollSpyOnce = useMemo(() => true, []);
  const {
    spTitle,
    spSubTitle,
    spDescription,
    spboxData,
    chooseData,
    countData,
  } = data.SPData;
  const { chTitle, chSubTitle, chDescription, chData } = chooseData;
  return (
    <main className="services-page">
      <Header title={"Services"} project={false} />

      <div className="services-page-container">
        <div className="services-page-heading">
          <h4>{spTitle}</h4>
          <h2>{spSubTitle}</h2>
          <p>{spDescription}</p>
        </div>

        <div className="main-services">
          {spboxData.map((item, index) => (
            <div className="service-box" key={index}>
              <div className="image">
                <img src={item.imgLink} alt="" />
              </div>
              <div className="description">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="choose">
        <div className="choose-container">
          {chData.map((item, index) => (
            <div className="choose-box" key={index}>
              <div className="icon">
                <Icon icon={item.icon} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}

          <div className="choose-box-header">
            <div className="choose-heading">
              <h4>{chTitle}</h4>
              <h2>{chSubTitle}</h2>
              <p>{chDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-container">
        <div className="counter-wrapper">
          {countData.map((item, index) => (
            <div className="counter-box">
              <div className="icon">
                <Icon icon={item.icon} />
              </div>
              <div className="counter">
                <CountUp
                  end={item.number}
                  enableScrollSpy={enableScrollSpy}
                  scrollSpyOnce={scrollSpyOnce}
                />
                +
              </div>
              <h3>{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Service;
