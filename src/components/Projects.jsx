import { Link } from "react-router-dom";

const Projects = ({ projectData }) => {
  const { projectTitle, projectSubTitle, projectDescription, projectsData } =
    projectData;

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="project-heading">
          <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            {projectTitle}
          </h4>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {projectSubTitle}
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            {projectDescription}
          </p>
        </div>

        <div className="project-container">
          {projectsData?.map((item, index) => (
            <div
              key={index}
              className="project"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <img src={item?.imgLink} alt={item?.title} />
              <div className="content">
                <h3>{item?.title}</h3>
                <h4>{item?.category}</h4>
                <div className="view-more">
                  <Link to={`/projects/${item?.title}/${item?.id}`}>
                    <button>View more</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

