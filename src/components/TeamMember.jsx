import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TeamMember = ({ element }) => {
  return (
    <div className="team-member">
      <div className="image">
        <img src={element.imgLink} alt={element.name} />
        <div className="member-socials">
          <ul>
            <Link to={element.fb}>
              <li>
                <Icon icon={"ri:facebook-fill"} />
              </li>
            </Link>
            <Link to={element.in}>
              <li>
                <Icon icon={"bi:linkedin"} />
              </li>
            </Link>
            <Link to={element.tw}>
              <li>
                <Icon icon={"bi:twitter-x"} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="information">
        <h4>{element.name}</h4>
        <h5>{element.position}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
