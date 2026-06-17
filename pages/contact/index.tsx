import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
 
const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
 
  return (
    <div className="contact-page">
      <Navbar />
     
      <main>
        {/* Hero Section */}
        <div className="contact-hero-wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h1 className="hero-title" data-aos="fade-right">
                  Let's Build Something <span className="highlight">Amazing</span> Together
                </h1>
                <p className="hero-description mt-3" data-aos="fade-right" data-aos-delay="100">
                  Have a project in mind or want to learn more about our services? Get in touch with our team and we'll get back to you within 24 hours.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
       
 
        {/* Contact Form Section */}
        <div className="contact-form-section">
          <Container>
            <Row>
              <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
                <div className="contact-form-card">
                  <h2 className="section-title">Send Us a Message</h2>
                  <p className="section-subtitle mb-4">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                 
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                      </Col>
                    </Row>
                   
                    <Form.Group className="mb-4">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="What's this about?" />
                    </Form.Group>
                   
                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Tell us about your project..." />
                    </Form.Group>
                   
                    <Button variant="primary" size="lg" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </div>
              </Col>
             
              <Col lg={6} data-aos="fade-left">
                <div className="contact-info-card">
                  <h2 className="section-title">Contact Information</h2>
                  <p className="section-subtitle mb-4">
                    Reach out to us through any of these channels
                  </p>
                 
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-text">
                      <h4>Our Location</h4>
                      <p>539 W Commerce St #3233, <br /> Dallas, TX 75208, USA</p>
                    </div>
                  </div>
                 
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-text">
                      <h4>Phone Number</h4>
                      <p>+1 (760) 991-9903</p>
                    </div>
                  </div>
                 
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h4>Email Address</h4>
                     <p>contact: contact.vcodify@gmail.com</p>
                     <p>Support: support@vcodify.com</p>
                    </div>
                  </div>
                 
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div className="contact-text">
                      <h4>Working Hours</h4>
                      <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 3pm</p>
                    </div>
                  </div>
                 
                  <div className="contact-map mt-4">
                    <iframe
                      src= "/images/contact-bg.jpg"
                      width="100%"
                      height="350"
                      style={{border:0}}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                    ></iframe>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
     
      <Footer />
     
      <style jsx global>{`
        :root {
          --primary-color: #FF6B35;
          --secondary-color: #FF6B35;
          --accent-color: #FF6B35;
          --dark-color: rgb(57, 51, 105);
          --light-color: #FF6B35;
          --text-light: #6c757d;
        }
       
        .contact-page {
          background: #f8f9fa;
        }
       
        .contact-hero-wrapper {
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(67, 77, 110, 0.85) 0%, rgba(129, 109, 90, 0.85) 100%),
                    url('https://images.unsplash.com/photo-1587560699334-bea93391dcef') center/cover no-repeat;
          color: white;
          position: relative;
          overflow: hidden;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 0;
        }
       
        .contact-hero-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/images/hero-pattern.png') center/cover;
          opacity: 0.15;
          mix-blend-mode: overlay;
        }
       
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }
       
        .hero-title .highlight {
          color: var(--primary-color);
          position: relative;
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
       
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: rgba(255,255,255,0.9);
          max-width: 80%;
        }
       
        .contact-form-section {
          padding: 100px 0;
          position: relative;
        }
       
        .contact-form-card, .contact-info-card {
          background: white;
          border-radius: 15px;
          padding: 40px;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
        }
       
        .contact-form-card:hover, .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
       
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--dark-color);
        }
       
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 30px;
        }
       
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 25px;
        }
       
        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(255,107,53,0.1);
          color: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin-right: 20px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
       
        .contact-info-item:hover .contact-icon {
          background: var(--primary-color);
          color: white;
          transform: rotate(15deg);
        }
       
        .contact-text h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--dark-color);
        }
       
        .contact-text p {
          color: var(--text-light);
          margin-bottom: 0;
          line-height: 1.6;
        }
       
        .form-control {
          height: 50px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
       
        .form-control:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.25rem rgba(255,107,53,0.25);
        }
       
        textarea.form-control {
          height: auto;
          resize: none;
        }
       
        .btn-primary {
          background: var(--primary-color);
          border: none;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
       
        .btn-primary:hover {
          background: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
       
        .contact-map {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
       
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
         
          .contact-form-card, .contact-info-card {
            padding: 30px;
          }
        }
       
        @media (max-width: 768px) {
          .contact-hero-wrapper {
            min-height: 60vh;
            background-attachment: scroll;
            padding: 80px 0;
          }
         
          .hero-title {
            font-size: 2rem;
          }
         
          .hero-description {
            font-size: 1rem;
            max-width: 100%;
          }
         
          .contact-form-section {
            padding: 60px 0;
          }
         
          .section-title {
            font-size: 1.8rem;
          }
        }
       
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.8rem;
          }
         
          .contact-form-card, .contact-info-card {
            padding: 25px;
          }
         
          .contact-info-item {
            flex-direction: column;
          }
         
          .contact-icon {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
};
 
export default ContactPage;  