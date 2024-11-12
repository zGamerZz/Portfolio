import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by zGamerZz</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} zGamerZz </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Credits: Soumyajit Behera</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
