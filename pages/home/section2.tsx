import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCode, FaUsers, FaRobot, FaChartLine, FaCloud, FaMobile } from "react-icons/fa";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and drive growth.",
    icon: <FaCode />,
    color: "#2a5bd7"
  },
  {
    title: "Dedicated Development Teams",
    description: "Hire skilled developers to work exclusively on your projects with our flexible engagement models.",
    icon: <FaUsers />,
    color: "#ff6b35"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions that automate processes, enhance decision-making and improve efficiency.",
    icon: <FaRobot />,
    color: "#00c4cc"
  },
  {
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    icon: <FaChartLine />,
    color: "#6c5ce7"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable, secure and reliable cloud services to power your digital transformation.",
    icon: <FaCloud />,
    color: "#00b894"
  },
  {
    title: "Mobile App Development",
    description: "Engaging mobile experiences across iOS and Android platforms for your customers.",
    icon: <FaMobile />,
    color: "#e84393"
  }
];

const Section2 = () => {
  return (
    <div className="solutions-container">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">
            Our <span className="highlight">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions to transform your business
          </p>
        </div>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="solution-card">
                <div className="solution-icon-wrapper">
                  <div className="solution-icon" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #FF6B35;
        }
        
        .highlight {
          font-weight: 700;
          position: relative;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(42,91,215,0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .solution-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .solution-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .solution-icon-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 25px;
        }
        
        .solution-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          font-size: 36px;
          transition: all 0.3s ease;
        }
        
        .solution-card:hover .solution-icon {
          transform: scale(1.1) rotate(15deg);
        }
        
        .solution-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #343a40;
          font-weight: 600;
        }
        
        .solution-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .solutions-container {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .solution-card {
            padding: 30px 20px;
          }
          
          .solution-icon {
            width: 70px;
            height: 70px;
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Section2;