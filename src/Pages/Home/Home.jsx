import "../sharedStyles/common.scss";
import "./home.scss";
import { Container, Row, Col } from "reactstrap";
import me from "../../assets/images/me4.png";
import collegeImg from "../../assets/images/college.jpg";
import schoolImg from "../../assets/images/school.jpg";
import skillsImg from "../../assets/videoAnimations/skills.gif";

import nodejs from "../../assets//icons/node_logo.gif";
import expressjs from "../../assets//icons/express_logo.gif";
import git from "../../assets//icons/git_logo.gif";
import reactjs from "../../assets//icons/react_logo.gif";
import javascript from "../../assets//icons/js_logo.gif";
import html from "../../assets//icons/html_logio.gif";
import css from "../../assets//icons/css_logo.gif";
import bootstrap from "../../assets//icons/bootstrap_logo.gif";
import sass from "../../assets//icons/sass.png";
import csharp from "../../assets//icons/csharp_logo.gif";
import mongo from "../../assets//icons/mongo_logo.gif";

import MainHeadings from "../../components/Headings/MainHeadings";
import SubHeadings from "../../components/Headings/SubHeadings";
import InfoText from "../../components/Headings/InfoText";
import ProjectCard from "../../components/experienceCard/ProjectCard";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsIcon__links = [
  csharp,
  mongo,
  nodejs,
  expressjs,
  reactjs,
  javascript,
  sass,
  bootstrap,
  css,
  html,
  git,
];

const workExperiences = {
  display: true,
  experiences: [
    {
      company: "Binary Semantics",
      role: "Software Developer",
      duration: "November 2024 – Present",
      achievements: [
        "Designed and developed 10+ responsive web pages using C#, ASP.NET, Bootstrap, and CSS",
        "Created and optimized 25+ stored procedures in SQL Server, improving query speed by 40%",
        "Built and tested 15+ REST APIs in .NET Core, reducing latency by 25%",
        "Owned end-to-end full-stack development with frontend UI and backend logic",
        "Delivered 5+ full-stack modules, boosting dev speed by 20% via workflow streamlining",
      ],
      icon: "💻",
      color: "#4F46E5",
    },
    {
      company: "Acxiom Consulting",
      role: "Technical Trainee",
      duration: "February 2024 – October 2024",
      achievements: [
        "Completed 20+ SAP ABAP tasks early, achieving 95% client satisfaction",
        "Created 10+ SmartForms and Adobe forms, cutting form errors by 30%",
        "Developed 10 SAP Cloud Reports, boosting report efficiency by 40%",
        "Resolved 25+ technical issues via 40+ hrs/week of ABAP upskilling",
      ],
      icon: "👨‍💻",
      color: "#10B981",
    },
    {
      company: "Cafe Albero",
      role: "Frontend Developer (Internship)",
      duration: "January 2023 – July 2023",
      achievements: [
        "Led frontend development, resulting in 8% increase in user engagement",
        "Improved UI/UX, decreasing bounce rate by 20%",
        "Fixed 30+ bugs and reduced load time by 15% for smoother experience",
      ],
      icon: "☕",
      color: "#F59E0B",
    },
  ],
};

const Projects = {
  display: true, //Set it to true to show Projects Section
  experience: [
    {
      role: "Full Stack Technology",
      name: "Library Management Sytem",
      companylogo: require("../../assets/images/site_lms.png"),
      date: "September 2023 – October 2023",
      desc: "Stay organized and efficient with our powerful LMS, designed to streamline your library workflow.",
      demolink: "https://github.com/LakshyaGrover369/library-management",
      codelink: "https://github.com/LakshyaGrover369/library-management",
    },
    {
      role: "Front-End Technology",
      name: "travel World",
      companylogo: require("../../assets/images/site_tour_web.png"),
      date: "July 2023 – August 2023",
      desc: "Explore the world with us , Experience the beauty of travel with our unforgettable tours.",
      demolink: "https://touroftheworld.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/tour_world_app",
    },
    {
      role: "Front-End Technology",
      name: "Random Quote Generator",
      companylogo: require("../../assets/images/site1img.jpg"),
      date: "September 2021 – September 2021",
      desc: "Get inspired with a click! Our random quote generator delivers wisdom, humor, and motivation instantly.",
      demolink: "https://inspiquote.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/quote-of-the-day.git",
    },
    {
      role: "Front-End Technology",
      name: "Parking Lot",
      companylogo: require("../../assets/images/site2img.png"),
      date: "June 2021 – June 2021",
      desc: "Efficient, user-friendly website for seamless parking lot management, maximizing space utilization and enhancing customer experience",
      demolink: "https://simplewayofparking.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/parking-lot",
    },
    {
      role: "Front-End Technology",
      name: "Word Counter",
      companylogo: require("../../assets/images/site3img.png"),
      date: "May 2021 – May 2021",
      desc: "Quickly count words online with a user-friendly tool for efficient writing and content management",
      demolink: "https://wordscounti.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/word-counter",
    },

    {
      role: "Front-End Technology",
      name: "Quiz Web App",
      companylogo: require("../../assets/images/site4img.png"),
      date: "June 2021 – June 2021",
      desc: "Interactive quiz web app: Engaging, educational, diverse topics, user-friendly, real-time feedback, shareable results, endless fun. Try today!",
      demolink: "https://quizzoi.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/Quiz_website.git",
    },
    {
      role: "Front-End Technology",
      name: "Live Covid Tracker",
      companylogo: require("../../assets/images/site5img.png"),
      date: "March 2023 – March 2023",
      desc: "Real-time COVID-19 data: cases, vaccines, trends. Stay informed, stay safe with our user-friendly tracker.",
      demolink: "https://livecovidcasestracker.netlify.app/",
      codelink: "https://github.com/LakshyaGrover369/live-covid-tracker",
    },
  ],
};

const OpenContactMe = () => {
  window.open("https://wa.link/y3lbdr", "_blank");
};
const OpenMyResume = () => {
  window.open(
    "https://drive.google.com/file/d/1J5dNExvCEd_B3hXX-DWes67r4VuBoQ2S/view?usp=sharing",
    "_blank"
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
    });
  }, []);

  return (
    <>
      {/* /////////////////////////Hero section start////////////////////////////// */}

      <section id="heroSection">
        <Container>
          <Row className="heroResponsive">
            <Col
              lg="6"
              className=" d-flex align-items-between justify-content-center"
            >
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <SubHeadings text="Hi All," />
                </div>
                <div>
                  <MainHeadings text="My Name is Lakshya Grover" />
                  {/* <img style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;" alt="👋" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" /> */}
                </div>
                <InfoText
                  text="
                A passionate Full Stack Developer 🚀 
                having an experience of building Web applications 
                with JavaScript / Reactjs / Nodejs and some
                 other cool libraries and frameworks.
                "
                />
                <div className="buttons">
                  <div className="button-container-1">
                    <span className="mas" onClick={OpenContactMe}>
                      Contact Me
                    </span>
                    <button
                      id="work"
                      type="button"
                      name="Hover"
                      onClick={OpenContactMe}
                    >
                      Contact Me
                    </button>
                  </div>
                  <div className="button-container-1">
                    <span className="mas" onClick={OpenMyResume}>
                      Resume
                    </span>
                    <button
                      id="work"
                      type="button"
                      name="Hover"
                      onClick={OpenMyResume}
                    >
                      Resume
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div data-aos="flip-right" className="hero__img">
                <img src={me} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* /////////////////////////Skills section start////////////////////////////// */}
      <section id="skillSection">
        <Container>
          <div id="skill__Heading2">
            <MainHeadings text="SKILLS" />
          </div>
          <Row>
            <Col lg="6" className="skillSection__img">
              <div>
                <img src={skillsImg} alt="" />
              </div>
            </Col>
            <Col lg="6" className="">
              <Row>
                {/* <div id='skill__Heading1' ><MainHeadings  text="SKILLS" /></div> */}
                <SubHeadings text="What I Do " />
                <div className="skill__subHeading ">
                  {" "}
                  CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH
                  STACK{" "}
                </div>
                <div className="lang">
                  <div className="skills__list">
                    <ul className="menu d-flex align-items-center ">
                      {skillsIcon__links.map((item, index) => (
                        <li className="skillsIcon__links" key={index}>
                          <img
                            height="50px"
                            src={item}
                            className="skillsIcon__links"
                            alt=""
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <InfoText text="⚡ Develop highly interactive Front end / User Interfaces for your web." />
                <InfoText text="⚡ Develop optimised Back end for your web." />
                <InfoText text="⚡ Translate design concepts into live websites abd web applications." />
                <InfoText text="⚡ optimizes interfaces for speed, responsiveness and cross-browser compatibility." />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* /////////////////////////Work Ex section start////////////////////////////// */}
      <section id="workExperience" className="py-5">
        <Container>
          <MainHeadings text="WORK EXPERIENCE" />
          <div className="timeline">
            {workExperiences.experiences.map((exp, index) => (
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="timeline-badge"
                  style={{ backgroundColor: exp.color }}
                >
                  <span className="timeline-icon">{exp.icon}</span>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {exp.company}
                      <span className="timeline-role"> - {exp.role}</span>
                    </h3>
                    <p className="timeline-duration">
                      <i className="far fa-calendar-alt"></i> {exp.duration}
                    </p>
                  </div>
                  <div className="timeline-body">
                    <ul className="timeline-list">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* /////////////////////////project section start////////////////////////// */}

      <section id="projectSection">
        <Container>
          <MainHeadings text="PROJECTS" />
          {/* <Row> */}
          <div className="experience-cards-div">
            {Projects.experience.map((card, i) => {
              return (
                <Col className="project__Container " lg="4" key={i}>
                  <div className="projectss" key={i}>
                    <ProjectCard
                      key={i}
                      cardInfo={{
                        company: card.name,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        demolink: card.demolink,
                        codelink: card.codelink,
                      }}
                    />
                  </div>
                </Col>
              );
            })}
          </div>
          {/* </Row> */}
        </Container>
      </section>

      {/* /////////////////////////education section start////////////////////////// */}

      <section id="educationSection">
        <Container className="educationWith">
          <MainHeadings text=" EDUCATION" />
          <Row className="d-flex justify-content-center align-items-center">
            <Row className="my-3 educations">
              <Col lg="2">
                <div data-aos="zoom-out" className="college__Img">
                  <img src={collegeImg} alt="" />
                </div>
              </Col>
              <Col lg="10">
                <MainHeadings text=" Dr. Akhilesh Das Gupta Institute of Technology and Management" />
                <SubHeadings text="Information Technology" />
                <h4>2020-2024 Batch</h4>
                <h5>Aggregate CGPA -: 9.26</h5>
              </Col>
            </Row>
            <Row className="my-3 educations">
              <Col lg="2">
                <div data-aos="zoom-out" className="school__Img">
                  <img src={schoolImg} alt="" />
                </div>
              </Col>
              <Col lg="10">
                <MainHeadings text=" Happy Home Public School" />
                <SubHeadings text="Class 12" />
                <h4>2019-2020 Batch</h4>
                <h5>Percentage -: 90%</h5>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
