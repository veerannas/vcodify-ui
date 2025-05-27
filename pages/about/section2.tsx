import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import partner from "../config/partner.json";

const Section3 = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const moveFunction = () => {
    window.location.href = "/contact?purpose=Become Investor";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <Container>
        {/* New Heading Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            Become an <span className="highlight">Investor</span>
          </h2>
          <p className="section-subtitle">
            Join us in revolutionizing the reservation management industry
          </p>
        </motion.div>

        <Row className="align-items-stretch">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="partner-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="partner-card-text">
                    With a big vision, our goal is to take reservation management to
                    a new level. Be a part of our journey!
                  </Card.Text>
                  <div className="mt-auto text-center">
                    <Button
                      onClick={moveFunction}
                      className="partner-button"
                      variant="primary"
                      size="lg"
                    >
                      Become an Investor
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} md={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Slider {...settings} className="partner-slider">
                {partner.map((d, index) => (
                  <div key={index} className="px-2">
                    <Card className="partner-slide-card h-100">
                      <div className="partner-slide-content">
                        <Image
                          src={d.img}
                          fluid
                          className="partner-image"
                        />
                        <h5 className="partner-slide-title">{d.title}</h5>
                        <p className="partner-slide-text">{d.text}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .partners-section {
          padding: 4rem 0;
          background-color: #f8f9fa;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color:rgb(35, 47, 95);
          margin-bottom: 1rem;
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
          background: rgba(232, 62, 140, 0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
        }

        .partner-card {
          border: none;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .partner-card-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #495057;
          margin-bottom: 2rem;
        }

        .partner-button {
          background-color: #e83e8c;
          border: none;
          border-radius: 50px;
          padding: 0.75rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .partner-button:hover {
          background-color: #d62a7a;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(232, 62, 140, 0.3);
        }

        .partner-slider {
          position: relative;
        }

        .partner-slider :global(.slick-slide) {
          padding: 0 5px;
        }

        .partner-slider :global(.slick-dots) {
          bottom: -30px;
        }

        .partner-slider :global(.slick-dots li button:before) {
          color: #FF6B35;
          opacity: 0.5;
          font-size: 10px;
        }

        .partner-slider :global(.slick-dots li.slick-active button:before) {
          opacity: 1;
          color: #FF6B35;
        }

        .partner-slide-card {
          border: none;
          border-radius: 0.75rem;
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .partner-slide-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .partner-slide-content {
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .partner-image {
          max-height: 100px;
          width: auto;
          margin: 0 auto 1.5rem;
          object-fit: contain;
        }

        .partner-slide-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #343a40;
          margin-bottom: 1rem;
          text-align: center;
        }

        .partner-slide-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #6c757d;
          margin-bottom: 0;
        }

        @media (max-width: 992px) {
          .partners-section {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .partner-card-text {
            font-size: 1rem;
          }

          .partner-button {
            padding: 0.6rem 1.5rem;
            font-size: 1rem;
          }

          .partner-slide-title {
            font-size: 1.1rem;
          }

          .partner-slide-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .partners-section {
            padding: 2rem 0;
          }
          
          .section-title {
            font-size: 1.6rem;
          }

          .partner-image {
            max-height: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Section3;