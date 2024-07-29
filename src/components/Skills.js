import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/skill1.jpg";
import projImg2 from "../assets/img/skill2.jpg";
import projImg3 from "../assets/img/skill3.jpg";
import projImg4 from "../assets/img/skill4.jpg";
import projImg5 from "../assets/img/skill5.png";
import projImg6 from "../assets/img/skill6.jpg";
import projImg7 from "../assets/img/skill7.jpg";
import projImg8 from "../assets/img/skill8.jpg";
import projImg9 from "../assets/img/skill9.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import 'animate.css/animate.css'
import TrackVisibility from 'react-on-screen';

export const Skills = () => {

  const projects1 = [
    {
      title: "Communication",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Team Work",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Leadership",
      description: "",
      imgUrl: projImg3,
    }
  ];

  const projects2 = [
    {
      title: "Visionary",
      description: "",
      imgUrl: projImg8,
    },
    {
      title: "Managerial Skills",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Fast Learner",
      description: "",
      imgUrl: projImg6,
    }
  ];

  const projects3 = [
    {
      title: "Curious Learner",
      description: "",
      imgUrl: projImg7,
    },
    {
      title: "Problem Solving",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Achiever",
      description: "",
      imgUrl: projImg9,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Skills</h2>
                <p>Over the course of time, I have learned certain essential skills that must be required in the competitive environment of corporate society in order to grow and prosper along the association.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}