import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
 
const Section1 = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={9}>
          <h1 className="hero-title" data-aos="fade-right">
            Bespoke Enterprise Software Development Solutions
          </h1>
          <h2 className="hero-subtitle" data-aos="fade-right" data-aos-delay="100">
            AI-Powered Solutions, Built for the Future Ahead
          </h2>
          <p className="hero-description" data-aos="fade-right" data-aos-delay="200">
            The future is tech, and we help you lead the way with custom software solutions
            leveraging AI, Cloud, DevOps, Blockchain, Cybersecurity, and more!
          </p>
          <div data-aos="fade-right" data-aos-delay="300">
            <Button variant="primary" size="lg" className="mr-3">
              Get Started
            </Button>
            
          </div>
        </Col>
        <Col md={5} data-aos="fade-left">
         
        </Col>
      </Row>
 
      <style jsx>{`
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }
       
        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 25px;
          color: rgba(255,255,255,0.9);
        }
       
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: rgba(255,255,255,0.8);
          max-width: 90%;
        }
       
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
         
          .hero-subtitle {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </Container>
  );
};
 
export default Section1;