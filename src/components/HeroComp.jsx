import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HeroComp = ({ element }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="hero-container">
      <img
        data-aos="zoom-out-down"
        data-aos-duration="1000"
        data-aos-delay="100"
        src={element.imgLink}
        alt={element.title}
      />

      <div className="content-container">
        {inView && (
          <>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="10"
            >
              {element.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              {element.description}
            </p>
            <div
              className="buttons"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <Link to="/services">
                <button className="btn btn-pry">Exlpore</button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-sec">Contact</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroComp;
