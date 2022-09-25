import React from "react";
import { Fade } from "react-reveal";

import "./Skills.css";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg({ fileName, theme }) {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  else if (fileName === "FullStackImg") return <FullStackImg theme={theme} />;
  else if (fileName === "CloudInfraImg") return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
}

const SkillSection = ({ theme }) => {
  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div className="skills-main-div">
            <Fade left duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
