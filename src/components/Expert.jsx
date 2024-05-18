import { Link } from "react-router-dom";

const Expert = () => {
  return (
    <section className="expert">
      <div className="expert-container">
        <div className="content">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Hire our team of experts
          </h1>
          <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            Don't hesitate to hire our exceptional team and unlock the full
            potential of your mining operations. Together, we can achieve
            greatness.
          </p>
          <Link to="/contact">
            <button
              className="btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Expert;
