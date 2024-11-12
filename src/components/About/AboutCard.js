import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamza </span> also known as <span className="purple">zGamerZz </span>
            from 
            <br />
            <span className="purple"> Mainz, Germany.</span>
            <br />
            I am currently a student.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dirtbike
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to learn something is to make something"{" "}
          </p>
          <footer className="blockquote-footer">zGamerZz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
