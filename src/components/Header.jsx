import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = ({ title, project, projectTitle }) => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>{title}</h1>
        <div className="navigator">
          <span>
            <Link to="/">
              <Icon icon="bxs:home" />
              Home
            </Link>
          </span>
          |<span>{title}</span>
          {project ? (
            <>
              | <span>{projectTitle}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
