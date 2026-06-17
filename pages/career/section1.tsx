
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
 
const Section1 = () => {
  return (
    <Row className="align-items-center">
      <Col md={8} className="text-center text-md-start" data-aos="fade-right">
        <h1 className="hero-title mb-4">Build Your Career With Us</h1>
        <p className="hero-subtitle mb-5">
          Join our team of innovators and work on cutting-edge projects that make
          a real difference. We empower our employees to grow and excel in their
          careers.
        </p>
      </Col>
      <Col md={4} data-aos="fade-left">
        {/* Optional career illustration can be added here */}
      </Col>
 
      <style jsx>{`
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: white;
        }
       
        .hero-title .highlight {
          color: var(--primary-color);
		  font-weight: 800;
		  position: relative;
		  display: inline-block;
		  
		  }
       
        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255,255,255,0.3);
          z-index: -1;
          border-radius: 4px;
        }
       
        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          opacity: 0.9;
          color: rgb(11, 5, 5);
        }
       
        .btn-light {
          background: white;
          color: var(--dark-color);
          font-weight: 600;
          transition: all 0.3s ease;
        }
       
        .btn-light:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
       
        .btn-outline-light {
          border: 2px solid white;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
          background: transparent;
        }
       
        .btn-outline-light:hover {
          background: white;
          color: var(--dark-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
       
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.8rem;
          }
         
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
       
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
         
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </Row>
  );
};
 
export default Section1;
 