import Carousel from "./Carousel";

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <Carousel data={data} />
    </section>
  );
};

export default Hero;
