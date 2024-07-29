import { Col, Row } from "react-bootstrap";
import resume from '../assets/file/resume.pdf';

export const Newsletter = ({ status, message }) => {


  return (
    <Col lg={12}>
    <div className="newsletter-bx wow slideInUp">
      <Row>
        <Col>
          <h3>Thanks for visiting my website.<br></br>You can access my resume from below.</h3> 

          <button className="resume_btn">
            <a href={resume} download='resume' className="resume_link">Resume</a>
          </button>
          <br></br><br></br>

          <h5>Regards,<br></br>Meera Bhagat</h5>
        </Col>
      </Row>
    </div>
  </Col>
  );
};