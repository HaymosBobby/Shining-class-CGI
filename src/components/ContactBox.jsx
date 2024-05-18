import { Icon } from "@iconify/react";
import parse from "html-react-parser";

const ContactBox = ({ data }) => {
  return (
    <div className="contacts-container">
      {data.map((item, index) => (
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay={item.delay}
          className="contact"
          key={index}
        >
          <div className="icon">
            <Icon icon={item.icon} />
          </div>
          <h3>{item.email}</h3>
          <div className="info">
            <p>{parse(item.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactBox;
