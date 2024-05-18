import Carousel from "./Carousel";

const Testimonial = ({ testimonialsData }) => {
  const { testimonialData, brandData } = testimonialsData;
  return (
    <section className="testimonial">
      <div className="testimonial-heading">
        <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Testimonial
        </h4>
        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          What our clients have to say
        </h2>
      </div>
      <div className="testimonial-container">
        <div className="testimonials">
          <Carousel data={testimonialData} />
        </div>
        <div className="testimonials-brand">
          <Carousel data={brandData} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
