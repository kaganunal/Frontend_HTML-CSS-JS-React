import React from "react";

const Skills = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        {props.skills.map((skill) => (
          <li>
            <h4>{skill.title}</h4>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
