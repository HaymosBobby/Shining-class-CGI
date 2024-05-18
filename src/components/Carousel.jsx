import Slider from "react-slick";
import HeroComp from "./HeroComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import SingleTestimonial from "./SingleTestimonial";
import Brand from "./Brand";
import TeamMember from "./TeamMember";


// Define the refreshAOS function

const Carousel = ({ data }) => {
  const { useFor, info, settings } = data;

  if (useFor === "hero") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <HeroComp element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <SingleTestimonial element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "brand") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <Brand key={index} brandLogo={element.imgLink} />
        ))}
      </Slider>
    );
  } else if (useFor === "team") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <TeamMember key={index} element={element} />
        ))}
      </Slider>
    );
  }
};

export default Carousel;
