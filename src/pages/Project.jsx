import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../util/data.json";
import Header from "../components/Header";
import parse from "html-react-parser";

const Project = () => {
  const { id } = useParams();
  const { projectsData } = data.projectData;
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    const fetchProject = () => {
      const selectedProject = projectsData.find((p) => p.id === id);
      setProject(selectedProject);
    };

    const fetchRelated = () => {
      const relatedProject = projectsData.filter((p) => {
        return p.category === project.category && p.id !== project.id;
      });
      console.log(relatedProject);

      setRelated(relatedProject);
    };
    fetchProject();
    project && fetchRelated();
  }, [id, projectsData, project]);

  return (
    <main className="project-page">
      <Header title="Projects" project={true} projectTitle={project?.title} />
      <div className="project-page-container">
        <div className="top">
          <div className="image">
            <img src={project?.imgLink} alt="" />
          </div>
          <div className="project-details">
            <h2>Project Details</h2>
            <div className="project-details-box">
              <ul>
                <li>
                  <span>Client: </span>
                  {project?.client}
                </li>
                <li>
                  <span>Engineer: </span>
                  {project?.engineer}
                </li>
                <li>
                  <span>Service: </span>
                  {project?.service}
                </li>
                <li>
                  <span>Date: </span> {project?.date}
                </li>
                <li>
                  <span>Category: </span>
                  {project?.category}
                </li>
                <li>
                  <span>Location: </span>
                  {project?.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="center">
          <h2>{project?.title}</h2>
          <p>{project?.content && parse(project.content)}</p>
        </div>
        <div className="bottom">
          <h2>Related Projects</h2>
          <div className="related">
            {related.length > 0 ? (
              related.map((item, index) => (
                <div key={index} className="project">
                  <img src={item.imgLink} alt={item.title} />
                  <div className="content">
                    <h3>{item.title}</h3>
                    <h4>{item.category}</h4>
                    <div className="view-more">
                      <Link to={`/projects/${item.title}/${item.id}`}>
                        <button>View more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Related Project</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
