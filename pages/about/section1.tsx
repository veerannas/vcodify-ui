import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";
 
const Section1 = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
 
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
 
  const aboutCards = [
    {
      title: "Who We Are",
      content: "VCodify is a full-service IT company offering web development, software solutions, and digital marketing services. We're committed to delivering high-quality products tailored to our clients' needs.",
      image: "images/aboutUs1.webp",
      delay: 0.1
    },
    {
      title: "Our Approach",
      content: "We take a customer-centric approach, working closely with clients to understand their goals and develop customized solutions that exceed expectations and drive business growth.",
      image: "images/aboutUs2.webp",
      reverse: true,
      delay: 0.2
    },
    {
      title: "Our Expertise",
      content: "Our team of passionate professionals specializes in cutting-edge technologies, delivering innovative solutions that transform businesses and create lasting digital impact.",
      image: "images/aboutUs3.webp",
      delay: 0.3
    }
  ];
 
  return (
    <section className="about-hero">
      {/* Hero Section with Background Image */}
      <div className="hero-with-bg">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="hero-content"
          >
            <h1 className="hero-title">
                   ABOUT US            </h1>
            <h2 className="hero-subtitle">
              VCodify Software Development Solutions
            </h2>
            <p className="hero-description">
            </p>
            
          </motion.div>
        </Container>
      </div>

      {/* Rest of the content */}
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            Our Solutions
          </h2>
          <p className="section-subtitle">
VCodify builds bespoke digital solutions—AI, cloud, and beyond to future-proof. We bridge innovation with execution for transformative results          </p>
          <div className="divider mx-auto"></div>
        </motion.div>

        {/* About Cards */}
        {aboutCards.map((card, index) => (
          <Row 
            key={index} 
            className={`align-items-center mb-5 ${card.reverse ? 'flex-row-reverse' : ''}`}
          >
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: card.delay }}
              >
                <div className="about-card">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.content}</p>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
                transition={{ delay: card.delay + 0.1 }}
              >
                <div className="image-wrapper">
                  <Image
                    src={card.image}
                    fluid
                    className="about-image"
                    alt={card.title}
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        ))}
      </Container>
 
      <style jsx>{`
        /* Hero with Background Image */
        .hero-with-bg {
          background-image: url('/images/about-Bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 120px 0;
          position: relative;
          margin-bottom: 60px;
        }
        
        .hero-with-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 0;
          z-index: 0;
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          color: white;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
         .hero-title {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: #FF6B35; /* Updated to orange */
  }

        
        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }
        
        .hero-button {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        /* Rest of the styles */
        .about-hero {
          padding: 60px 0;
          background: white;
        }
        
        .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #FF6B35; /* Updated to orange */
    margin-bottom: 1rem;
  }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto 1.5rem;
        }
        
        .divider {
          width: 80px;
          height: 4px;
          background: var(--primary-color);
          margin: 25px auto;
        }
        
        .about-card {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          height: 100%;
          transition: all 0.3s ease;
        }
        
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-color);
          margin-bottom: 1.5rem;
        }
        
        .card-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-light);
        }
        
        .image-wrapper {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .about-image {
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover {
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        
        .image-wrapper:hover .about-image {
          transform: scale(1.05);
        }
        
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .about-card {
            padding: 30px;
          }
          .card-title {
            font-size: 1.6rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-with-bg {
            padding: 80px 0;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.3rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .card-text {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .about-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};
 
export default Section1;