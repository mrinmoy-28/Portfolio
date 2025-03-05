import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import uberclone from "../../Assets/Projects/uberclone.png";
import hms from "../../Assets/Projects/hms.png";
import currconverter from "../../Assets/Projects/currconverter.png";
import todo from "../../Assets/Projects/todo.png";

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
              imgPath={uberclone}
              isBlog={false}
              title="Uber Clone"
              description="🚖 Uber Clone: A ride-hailing app replicating Uber’s core features, including real-time ride booking, GPS tracking, fare estimation, and seamless payment integration. 🚀."
              ghLink="https://github.com/mrinmoy-28/UberClone"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hospital Mangement System"
              description="🏥 Hospital Management System (HMS) using PHP – A comprehensive system built with PHP, featuring patient records management, appointment scheduling, and doctor-patient interactions. It includes a responsive UI with CSS, SCSS, and JavaScript for a seamless user experience. 🚀"
              ghLink="https://github.com/mrinmoy-28/Hospital-Management-Sysstem"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="A user-friendly task management application designed to help you organize, prioritize, and track your daily tasks efficiently. Featuring task creation, due dates, categories, and reminders, it ensures you stay productive and never miss a deadline. 🚀"
              ghLink="https://github.com/mrinmoy-28/Todo_App"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currconverter}
              isBlog={false}
              title="Currency Converter"
              description="💱 Currency Converter using JavaScript & APIs – A real-time currency exchange tool built with JavaScript, fetching live exchange rates via APIs to convert between different currencies instantly. Features a user-friendly interface for seamless conversions. 🚀"
              ghLink="https://github.com/mrinmoy-28/CurrencyConverter"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>




          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
