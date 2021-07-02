import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

const Skills = ({ theme }) => {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="30px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
};
export default Skills;
