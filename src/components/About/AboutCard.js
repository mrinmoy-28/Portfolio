import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mrinmoy Maji </span>
            from <span className="purple"> Asansol , West Bengal.</span>
            <br />
            Passionate about building innovative solutions and constantly exploring new technologies.
            <br />
            I am currently persuing my B.Tech in Computer Science & Engineering in National Institute of Technology Meghalaya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing Artist
            </li>
            <li className="about-activity">
              <ImPointRight /> Football Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mrinmoy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
