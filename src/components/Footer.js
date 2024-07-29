import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <h2>ASTHREETA SCHAFT</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/meerabhagat_21/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024 All Rights Reserved.<br/>Developed and Maintained By<br/><b>ASTHREETA SCHAFT</b></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}