import '../sharedStyles/common.scss';
import './home.scss';
import {Container , Row , Col } from 'reactstrap';
import me from'../../assets/images/me4.png';
import collegeImg from '../../assets/images/college.jpg'
import schoolImg from '../../assets/images/school.jpg'
import skillsImg from '../../assets/videoAnimations/skills.gif'

import reactjs from '../../assets//icons/reactjs.gif'
import javascript from '../../assets//icons/javascript.gif'
import html from '../../assets//icons/html.png'
import css from '../../assets//icons/css.png'
import bootstrap from '../../assets//icons/bootstrap.png'
import sass from '../../assets//icons/sass.png'

import MainHeadings from '../../components/Headings/MainHeadings';
import SubHeadings from '../../components/Headings/SubHeadings';
import InfoText from '../../components/Headings/InfoText';
import Projects from '../../components/experienceCard/ExperienceCard'

import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsIcon__links=[reactjs,javascript,sass,bootstrap,css,html]

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Technology",
      name: "Live Covid Tracker",
      companylogo: require("../../assets/images/site5img.png"),
      date: "March 2023 – March 2023",
      desc: "A React Js based website that Shows the live cases of the corona virus cases in our country INDIA ",
      demolink:"https://livecovidcasestracker.netlify.app/",
      codelink:"https://github.com/LakshyaGrover369/live-covid-tracker",
      
    },
    {
      role: "Front-End Technology",
      name: "Quiz Web App",
      companylogo: require("../../assets/images/site4img.png"),
      date: "June 2021 – June 2021",
      desc: "A website that take quizez for different technologies and shows your result and overall performance ",
      demolink:"https://quizzoi.netlify.app/",
      codelink:"https://github.com/LakshyaGrover369/Quiz_website.git"
      
    },
    {
      role: "Front-End Technology",
      name: "Random Quote Generator",
      companylogo: require("../../assets/images/site1img.jpg"),
      date: "September 2021 – September 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demolink:"https://inspiquote.netlify.app/",
      codelink:"https://github.com/LakshyaGrover369/quote-of-the-day.git"
    },
    {
      role: "Front-End Technology",
      name: "Parking Lot",
      companylogo: require("../../assets/images/site2img.png"),
      date: "June 2021 – June 2021",
      desc: "An admin accesssed Parking Lot System that can track the numbers cars and their details",
      demolink:"https://inspiquote.netlify.app/",
      codelink:"https://github.com/LakshyaGrover369/quote-of-the-day.git"
    
    },
    {
      role: "Front-End Technology",
      name: "Word Counter",
      companylogo: require("../../assets/images/site3img.png"),
      date: "May 2021 – May 2021",
      desc: "A website that can tell you about your articles that can help you to optimize your article",
      demolink:"https://inspiquote.netlify.app/",
      codelink:"https://github.com/LakshyaGrover369/quote-of-the-day.git"
    },
  ]
};

const OpenContactMe = () => {
  window.open('https://wa.link/y3lbdr','_blank');
}
const OpenMyResume = () => {
  window.open('https://drive.google.com/file/d/17IDt-yxfmf3TYD50-O1h_FGhunAEuBxd/view?usp=sharing','_blank');
}

const Home = () => {

  useEffect(() => {
    AOS.init({
      offset:200,
      duration:1500,
    });
    
  }, [])

  return (
    <>

    {/* /////////////////////////Hero section start////////////////////////////// */}

      <section id='heroSection'>
        <Container>
          <Row className='heroResponsive'>
            <Col lg='6'  className=" d-flex align-items-between justify-content-center" >
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                    <SubHeadings text="Hi All," />
                </div>
                <div>
                  <MainHeadings text="My Name is Lakshya Grover"  /> 
                  {/* <img style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;" alt="👋" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png" /> */}
                </div>
                <InfoText text="
                A passionate Front End Developer 🚀 
                having an experience of building Web and Mobile applications 
                with JavaScript / Reactjs / Nodejs / React Native and some
                 other cool libraries and frameworks.
                " />
                <div className="buttons">
                  <div class="button-container-1">
                    <span class="mas" onClick={OpenContactMe}>Contact Me</span>
                    <button id='work' type="button" name="Hover" onClick={OpenContactMe}>Contact Me</button>
                  </div>
                  <div class="button-container-1">
                    <span class="mas" onClick={OpenMyResume}>Resume</span>
                    <button id='work' type="button" name="Hover" onClick={OpenMyResume} >Resume</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div  data-aos="flip-right" className="hero__img">
                <img src={me} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* /////////////////////////Skills section start////////////////////////////// */}
      <section id='skillSection'>
        <Container>
          <div id='skill__Heading2' ><MainHeadings  text="SKILLS" /></div>
          <Row>
            <Col lg='6' className='skillSection__img'>
              <div>
                <img src={skillsImg} alt="" />
              </div>
            </Col>
            <Col lg='6' className=''>
              <Row>
              {/* <div id='skill__Heading1' ><MainHeadings  text="SKILLS" /></div> */}
                <SubHeadings text="What I Do " />
                <div className='skill__subHeading '> CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK </div>
                <div className="lang">
                <div className="skills__list">
                  <ul className="menu d-flex align-items-center ">
                    {skillsIcon__links.map((item, index)=> (
                      <li className="skillsIcon__links" key={index}>
                        <img 
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
                <InfoText text="⚡ Translate design concepts into live websites abd web applications." />
                <InfoText text="⚡ optimizes interfaces for speed, responsiveness and cross-browser compatibility." />
                
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* /////////////////////////education section start////////////////////////// */}

      <section id='educationSection'>
        <Container>
        <MainHeadings text=" EDUCATION" />
          <Row>
              <Row className='my-3 educations'>
                <Col lg='2'>
                  <div className='college__Img'>
                    <img src={collegeImg} alt="" />
                  </div>
                </Col>
                <Col lg='10'>
                  <MainHeadings text=" Dr. Akhilesh Das Gupta Institute of Technology and Management" />
                  <SubHeadings text="Information Technology" />
                  <h4>2020-2024 Batch</h4>
                  <h5>Aggregate CGPA -: 9.26</h5>
                </Col>
              </Row>
              <Row className='my-3 educations'>
                <Col lg='2'>
                <div className='school__Img'>
                    <img src={schoolImg} alt="" />
                  </div>
                </Col>
                <Col lg='10'>
                  <MainHeadings text=" Happy Home Public School" />
                  <SubHeadings text="Class 12" />
                  <h4>2019-2020 Batch</h4>
                  <h5>Percentage -: 90%</h5>
                </Col>
              </Row>
          </Row>
          
        </Container>
      </section>

      {/* /////////////////////////project section start////////////////////////// */}

      <section id='projectSection'>
      <Container>
        <MainHeadings text="PROJECTS" />
        {/* <Row> */}
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    
                    <Col className="project__Container " lg='4'>
                      <div className="projectss">
                        <Projects
                          key={i}
                          cardInfo={{
                            company: card.name,
                            desc: card.desc,
                            date: card.date,
                            companylogo: card.companylogo,
                            role: card.role,
                            descBullets: card.descBullets,
                            demolink: card.demolink,
                            codelink: card.codelink
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
      
    </>
  )
}

export default Home