import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const About = ({ aboutData }) => {
  const { aboutTitle, aboutSubTitle, aboutDescription, accordionData } =
    aboutData;
  return (
    <section className="about">
      <div className="about-container">
        <div className="top">
          <div className="about-heading">
            <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              {aboutTitle}
            </h4>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {aboutSubTitle}
            </h2>
          </div>
          <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
            {aboutDescription}
          </p>
        </div>
        <div className="bottom">
          <div
            className="accordion-container"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <Accordion allowZeroExpanded={true}>
              {accordionData.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <p>{item.title}</p>
                      <div className="toggler">
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div
            className="image"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <img src="../images/tunnel.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
