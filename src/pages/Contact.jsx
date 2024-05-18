import ContactBox from "../components/ContactBox";
import Header from "../components/Header";
import data from "../util/data.json";

const Contact = () => {
  const { contactTitle, contactSubTitle, contactDescription, contactsData } =
    data.contactData;
  return (
    <main className="contact-page">
      <Header title={"Contact"} project={false} />

      <div className="contact-page-container">
        <div className="contact-page-heading">
          <h4>{contactTitle}</h4>
          <h2>{contactSubTitle}</h2>
          <p>{contactDescription}</p>
        </div>
        <div className="contact-form">
          <div className="form-container">
            <form className="form">
              <div className="form-wrapper">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="10"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="btn">Send Message</button>
            </form>
            <div className="image">
              <img src="/images/girly.jpg" alt="" />
            </div>
          </div>
        </div>
        <ContactBox data={contactsData} />
      </div>
    </main>
  );
};

export default Contact;
