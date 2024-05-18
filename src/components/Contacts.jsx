import ContactBox from "./ContactBox";

const Contacts = ({ contactData }) => {
  const { conTitle, conSubTitle, conDescription, contactsData } = contactData;
  return (
    <section className="contacts">
      <div className="contacts-heading">
        <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {conTitle}
        </h4>
        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {conSubTitle}
        </h2>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          {conDescription}
        </p>
      </div>
      <ContactBox data={contactsData} />
    </section>
  );
};

export default Contacts;
