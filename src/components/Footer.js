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
        <Col></Col>
        <Col md="4" className="footer-copywright">
          <h3>Thanks for beeing here! </h3>
        </Col>
        <Col> </Col>
      </Row>
    </Container>
  );
}

export default Footer;
