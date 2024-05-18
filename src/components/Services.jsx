import { Icon } from "@iconify/react";

const Services = ({ servicesData }) => {
  const { serviceTitle, serviceSubTitle, serviceData, serviceDescription } =
    servicesData;
  return (
    <section className="services">
      <div className="services-heading-container">
        <div className="services-heading">
          <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            {serviceTitle}
          </h4>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {serviceSubTitle}
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            {serviceDescription}
          </p>
        </div>
      </div>
      <div className="services-container">
        {serviceData?.map((item, index) => (
          <div
            className="service"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
            key={index}
          >
            <div className="icon">
              <Icon icon={item?.icon} />
            </div>
            <div className="content">
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
