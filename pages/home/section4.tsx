// Section4.js (Key Benefits Section)
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import KeyBenefitArr from "../config/keybenefit.json";
import { FiCheckCircle, FiClock, FiDollarSign, FiUsers, FiGlobe, FiLayers } from "react-icons/fi";

const icons = [
  <FiCheckCircle size={24} />,
  <FiClock size={24} />,
  <FiDollarSign size={24} />,
  <FiUsers size={24} />,
  <FiGlobe size={24} />,
  <FiLayers size={24} />
];

const Section4 = () => {
  return (
    <div className="benefits-container">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
  <h2 className="section-title">
    <strong style={{ color: '#FF6B35' }}>Why Choose Us</strong>
  </h2>
          <p className="section-subtitle">
            We deliver exceptional value through our expertise and commitment
          </p>
        </div>
        
        <Row className="g-4">
          {KeyBenefitArr.map((benefit, index) => (
            <Col key={index} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  {icons[index % icons.length]}
                </div>
                <h3>{benefit.text}</h3>
                <p>{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        
         .benefit-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(103, 95, 92, 0.1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .benefit-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(42,91,215,0.03) 0%, rgba(0,196,204,0.03) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .benefit-card:hover::after {
          opacity: 1;
        }
        
        .benefit-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(42,91,215,0.1);
          color: var(--primary-color);
          border-radius: 50%;
          margin-bottom: 25px;
          font-size: 24px;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover .benefit-icon {
          background: var(--primary-color);
          color: white;
          transform: rotate(15deg) scale(1.1);
        }
        
        .benefit-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: var(--dark-color);
        }
        
        .benefit-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .benefits-container {
            padding: 60px 0;
          }
          
          .benefit-card {
            padding: 30px 20px;
          }
          
          .benefit-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Section4;