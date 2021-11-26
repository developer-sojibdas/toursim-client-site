import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './AboutUs.css'
const About = () => {
  return (
    <div
      className="my-5 py-5"
    >
      <Container className="shadow-lg  p-5">
        <img src="https://i.ibb.co/PhwBsjN/logo.png" alt=""  />
          <h2 className="text-center  mb-4 py-5">
            WELCOME TO  <span style={{color:"hotpink"}}>HOLIDAY</span> WANDERS
          </h2>
       
        <Row Row xs={1}>
          <Col md className="pe-3">
              <h5 className="">Why choose our <span style={{color:"hotpink"}}>travel agency</span></h5>
              <p className="text-muted">
                There are countless online education marketplaces on the
                internet. And there’s us. We are not the biggest. We are not the
                cheapest. But we are the fastest growing. We have the highest
                course completion rate in the industry.
              </p>
              <p className="text-muted">
                And the reason is, we don’t give up. When a student commits to a
                course, we commit to the student. We are not going to sugar coat
                it - we will make you complete, come what may. You may not have
                given much thought to what you are signing up for, but we
                believe you are signing up for knowledge that is useful and
                complete. We are ridiculously committed to our students. Be it
                constant reminders, relentless masters or 24 x 7 online support
                - we will absolutely make sure that you run out of excuses to
                not complete the course.
              </p>
            
          </Col>
          <Col md className="pe-3">
              <h5 className="">Trust & Safety</h5>
              <p className="text-muted">
                To become the largest online learning ecosystem for continuing
                education, in partnership with corporates and academia.
              </p>
              <h5 className="">Packages 10,000+</h5>
              <p className="text-muted">
              All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door
              </p>
              <img src="https://gico.io/ghurbo/images/resource/agency.jpg" alt="" width="100%" />
            
          </Col>
        </Row>

        <Row Row xs={1}>
          <Col md className="d-flex align-items-center">
            
              <Form className="w-100">
                <Form.Label className="">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            
          </Col>
        </Row>
        <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="" />
      </Container>
    </div>
  );
};

export default About;