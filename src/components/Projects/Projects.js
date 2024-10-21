import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import starzplay from "../../Assets/starzplay.png";
import wokrbench from "../../Assets/wokrbench.png";
import hiredroid from "../../Assets/hiredroid.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starzplay}
              title="STARZPLAY"
              description="STARZPLAY offers its consumers a non-stop, never-ending list of Movies and TV shows to choose from and stream. The main selling point of STARZPLAY is the LIVE streaming channels that can be bought within the application and viewed from anywhere, on any device."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://starzplay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wokrbench}
              title="xiQ Workbench"
              description="xiQ Workbench is a product that utilizes AI to help sales representatives and marketers get one step ahead in the game by studying their targeted audience before approaching them with the respective products or services to be offered."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://xiqworkbench.xiqonline.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hiredroid}
              title="Hiredroid"
              description="A complete system to cater to the emerging market of job requirements and hiring needs. It is a whole ecosystem in itself which is to bring skillful professionals and employers to one platform and make the hiring process more streamlined."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://hiredroid.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
