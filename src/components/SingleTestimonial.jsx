const SingleTestimonial = ({ element }) => {
    return (
      <div className="single-testimonial">
        <div className="single-testimonial-container">
          <div className="content-container">
            <div className="content">
              <p>“{element.text}”</p>
              <div className="info">
                <h5>- {element.name}</h5>
                <span>{element.designation}</span>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={element.imgLink} title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleTestimonial;
  