import React, { useState, createRef } from "react";
import "./ProjectCard.scss";
import ColorThief from "colorthief";
import Button from "./button/Button";

export default function ProjectCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div
      data-aos="zoom-in"
      className={isDark ? "experience-card-dark" : "experience-card"}
    >
      <div
        style={{ background: rgb(colorArrays) }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className={"experience-text-role"}>{cardInfo.role}</h5>
        <h5 className={"experience-text-date"}>{cardInfo.date}</h5>
        <p className={"subTitle experience-text-desc"}>{cardInfo.desc}</p>

        <div className="btn__container">
          <Button text="Demo" link={cardInfo.demolink} />
          <Button text="Code" link={cardInfo.codelink} />
        </div>
      </div>
    </div>
  );
}
