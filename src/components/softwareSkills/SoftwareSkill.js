import React, {createRef} from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
    const imgRef = createRef();
    return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                  <div className="education-card-left">
                      <img
                          crossOrigin={"anonymous"}
                          ref={imgRef}
                          className="education-roundedimg"
                          src={skills.logo}
                          alt={skills.skillName}
                      />
                  </div>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
