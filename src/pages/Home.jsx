import About from "../components/About";
import Contacts from "../components/Contacts";
import Expert from "../components/Expert";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

import data from "../util/data.json";

const Home = () => {
  const {
    sliderData,
    aboutData,
    servicesData,
    testimonialsData,
    projectData,
    contactData,
  } = data;

  return (
    <div>
      <Hero data={sliderData.heroData} />
      <About aboutData={aboutData} />
      <Services servicesData={servicesData} />
      <Testimonial testimonialsData={testimonialsData} />
      <Projects projectData={projectData} />
      <Expert />
      <Contacts contactData={contactData} />
    </div>
  );
};

export default Home;
