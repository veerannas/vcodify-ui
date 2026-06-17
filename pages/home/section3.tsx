import React, { useState } from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import PlatformArr from "../config/platform.json";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologyCategories = [
    { id: "frontend", name: "Frontend", data: PlatformArr.FrontEnd },
    { id: "backend", name: "Backend", data: PlatformArr.Backend },
    { id: "ai", name: "AI/ML", data: PlatformArr.AI },
    { id: "frameworks", name: "Frameworks", data: PlatformArr.Frameworks },
    { id: "mobile", name: "Mobile", data: PlatformArr.Mobile },
    { id: "bi", name: "Business Intelligence", data: PlatformArr.Platforms },
    { id: "cms", name: "CMS", data: PlatformArr.CMS },
    { id: "cloud", name: "Cloud", data: PlatformArr.CLOUD },
    { id: "devops", name: "DevOps", data: PlatformArr.Devops },
  ];

  return (
    <div className="technologies-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Our <span className="highlight">Technology Stack</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          We work with the most modern and reliable technologies
        </p>

        <div className="tech-tabs-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || "frontend")}>
            <div className="tabs-container">
              <Nav variant="pills" className="tech-category-tabs">
                {technologyCategories.map((category) => (
                  <Nav.Item key={category.id}>
                    <Nav.Link eventKey={category.id} className="tech-tab">
                      {category.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            <Tab.Content className="tech-content">
              {technologyCategories.map((category) => (
                <Tab.Pane key={category.id} eventKey={category.id}>
                  <Row className="justify-content-center">
                    {category.data.map((tech, index) => (
                      <Col key={index} xs={6} sm={4} md={3} lg={2} className="tech-col">
                        <div className="tech-card" data-aos="zoom-in" data-aos-delay={index * 50}>
                          <div className="tech-logo">
                            <img
                              src={tech.img}
                              alt={tech.text}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/tech/default-tech.svg';
                              }}
                            />
                          </div>
                          <p className="tech-name">{tech.text}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>

      <style jsx>{`
       
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: rgb(42, 53, 75);
        }
       
        .highlight {
          color: #FF6B35;
          position: relative;
        }
       
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255, 107, 53, 0.2);
          z-index: -1;
        }
       
        .section-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #718096;
          max-width: 700px;
          margin: 0 auto 50px;
        }
       
        .tech-tabs-wrapper {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(93, 81, 81, 0.05);
          overflow: hidden;
        }

        .tabs-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
       
        .tech-category-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          border-bottom: 1px solid #e2e8f0;
          padding: 0;
          margin: 0 auto;
        }
       
        .tech-tab {
          padding: 15px 25px;
          color: #718096;
          font-weight: 600;
          border: none;
          border-radius: 0;
          position: relative;
          background: transparent;
          transition: all 0.3s ease;
          text-align: center;
        }
       
        .tech-tab:hover {
          color: #FF6B35;
          background: rgba(255, 107, 53, 0.05);
        }

        /* Updated active tab styling */
        .nav-pills .nav-link.active, 
        .nav-pills .show > .nav-link {
          color: #fff;
          background-color: #FF6B35;
        }

        .tech-tab.active {
          color: #fff;
          background-color: #FF6B35;
        }
       
        .tech-tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #FF6B35;
        }
       
        .tech-content {
          padding: 40px;
        }
       
        .tech-col {
          margin-bottom: 25px;
          padding: 0 15px;
        }
       
        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          height: 100%;
          min-height: 180px;
          border: 1px solid #edf2f7;
          justify-content: center;
        }
       
        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border-color: #FF6B35;
        }
       
        .tech-logo {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
       
        .tech-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
       
        .tech-card:hover .tech-logo img {
          filter: grayscale(0%);
          opacity: 1;
        }
       
        .tech-name {
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          color: #4a5568;
          margin: 0;
        }
       
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
         
          .tech-category-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding: 0;
          }
         
          .tech-tab {
            padding: 12px 20px;
            font-size: 0.9rem;
            white-space: nowrap;
          }
         
          .tech-content {
            padding: 25px 15px;
          }

          .tech-card {
            min-height: 160px;
            padding: 25px 15px;
          }

          .tech-logo {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 576px) {
          .tech-col {
            flex: 0 0 50%;
            max-width: 50%;
            padding: 0 10px;
          }

          .tech-card {
            min-height: 140px;
            padding: 20px 10px;
          }

          .tech-logo {
            width: 50px;
            height: 50px;
          }
            
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #FF6B35 !important;
}
        }
      `}</style>
    </div>
  );
};

export default Section3;