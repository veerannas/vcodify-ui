import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGlobeAmericas, FaExchangeAlt, FaHandshake, FaChartLine, FaMobileAlt, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    title: "One-Stop Marketplace",
    description: "Product acts as a one-stop marketplace for Businesses",
    icon: <FaGlobeAmericas />,
    color: "#2a5bd7",
    delay: 0.1
  },
  {
    title: "Adaptable Platform",
    description: "Product would be adaptable to any services and any market",
    icon: <FaExchangeAlt />,
    color: "#ff6b35",
    delay: 0.2
  },
  {
    title: "IRPA Integration",
    description: "Use IRPA to book reservations seamlessly",
    icon: <FaHandshake />,
    color: "#00c4cc",
    delay: 0.3
  },
  {
    title: "Global Vision",
    description: "Vision to cover the USA, Germany, and Indian markets",
    icon: <FaChartLine />,
    color: "#6c5ce7",
    delay: 0.4
  },
  {
    title: "Industry Benchmark",
    description: "Our platform shall set a benchmark for healthy competition",
    icon: <FaTrophy />,
    color: "#00b894",
    delay: 0.5
  },
  {
    title: "Accessible Everywhere",
    description: "Fast, flexible, and friendly product accessible from different devices",
    icon: <FaMobileAlt />,
    color: "#e84393",
    delay: 0.6
  }
];

const Section2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="vision-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-5"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our <span className="highlight">Vision</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Building the future of business marketplaces with innovative solutions
          </motion.p>
        </motion.div>
        
        <Row className="g-4">
          {visionPoints.map((point, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <motion.div
                className="vision-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: point.delay }}
                whileHover={{ y: -10 }}
              >
                <div className="vision-icon-wrapper">
                  <div 
                    className="vision-icon" 
                    style={{ 
                      backgroundColor: `${point.color}20`, 
                      color: point.color 
                    }}
                  >
                    {point.icon}
                  </div>
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx global>{`
        .vision-section {
          padding: 100px 0;
          background-color: #f8f9fa;
          position: relative;
          overflow: hidden;
        }
        
        .vision-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 70%;
          background: radial-gradient(circle at 30% 70%, rgba(42, 91, 215, 0.05) 0%, transparent 40%);
          z-index: 0;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #2a2a2a;
          font-weight: 700;
        }
        
        .highlight {
          position: relative;
          color: #FF6B35;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(42, 91, 215, 0.3);
          z-index: -1;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .section-title:hover .highlight::after {
          height: 12px;
          background: rgba(42, 91, 215, 0.4);
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .vision-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .vision-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          z-index: -1;
        }
        
        .vision-card:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .vision-card:hover::before {
          transform: translateX(100%);
        }
        
        .vision-icon-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 25px;
        }
        
        .vision-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          font-size: 36px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .vision-card:hover .vision-icon {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .vision-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #343a40;
          font-weight: 600;
        }
        
        .vision-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        @media (max-width: 992px) {
          .vision-section {
            padding: 80px 0;
          }
        }
        
        @media (max-width: 768px) {
          .vision-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .vision-card {
            padding: 30px 20px;
          }
          
          .vision-icon {
            width: 70px;
            height: 70px;
            font-size: 30px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Section2;