import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  const [hoverStates, setHoverStates] = useState({
    phone: false,
    email: false,
    terms: false,
    facebook: false,
    instagram: false,
    tiktok: false,
    linkedin: false
  });

  const handleHover = (key: string, value: boolean) => {
    setHoverStates(prev => ({ ...prev, [key]: value }));
  };

  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      name: "Facebook", 
      url: "https://www.facebook.com/profile.php?id=100069035831990",
      color: "#3b5998",
      key: "facebook"
    },
    { 
      icon: <FaInstagram />, 
      name: "Instagram", 
      url: "https://www.instagram.com/reserve_hubs/",
      color: "#E1306C",
      key: "instagram"
    },
    { 
      icon: <FaTiktok />, 
      name: "TikTok", 
      url: "https://www.tiktok.com/@reserve_hubs",
      color: "#010101",
      key: "tiktok"
    },
    { 
      icon: <FaLinkedinIn />, 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/reserve-hubs/",
      color: "#0077B5",
      key: "linkedin"
    }
  ];

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="justify-content-between">
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">VCodify</h5>
            <p className="footer-text">
              Empowering businesses with cutting-edge software solutions and AI-powered technologies.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-3 footer-icon" />
                <span className="footer-text">San Francisco, CA</span>
              </div>
              <div className="d-flex align-items-center">
                <FaClock className="me-3 footer-icon" />
                <span className="footer-text">Mon-Fri: 9AM - 6PM</span>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={3} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="/about" 
                  className="footer-link"
                  onMouseEnter={() => handleHover('terms', true)}
                  onMouseLeave={() => handleHover('terms', false)}
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="footer-link">Services</a>
              </li>
              <li className="mb-2">
                <a href="/portfolio" className="footer-link">Portfolio</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="footer-link">Blog</a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="footer-link"
                  onMouseEnter={() => handleHover('terms', true)}
                  onMouseLeave={() => handleHover('terms', false)}
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <div 
                  className={`footer-icon-wrapper ${hoverStates.phone ? 'hover' : ''}`}
                  onMouseEnter={() => handleHover('phone', true)}
                  onMouseLeave={() => handleHover('phone', false)}
                >
                  <FaPhoneAlt className="footer-icon" />
                </div>
                <div className="ms-3">
                  <a 
                    href="tel:+16692889629" 
                    className={`footer-link ${hoverStates.phone ? 'hover' : ''}`}
                  >
                    +1 669-288-9629
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div 
                  className={`footer-icon-wrapper ${hoverStates.email ? 'hover' : ''}`}
                  onMouseEnter={() => handleHover('email', true)}
                  onMouseLeave={() => handleHover('email', false)}
                >
                  <FaEnvelope className="footer-icon" />
                </div>
                <div className="ms-3">
                  <a 
                    href="mailto:contact@vcodify.com" 
                    className={`footer-link ${hoverStates.email ? 'hover' : ''}`}
                  >
                    contact@vcodify.com
                  </a>
                </div>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col lg={2} md={3} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  onMouseEnter={() => handleHover(social.key, true)}
                  onMouseLeave={() => handleHover(social.key, false)}
                >
                  <div 
                    className={`social-icon ${hoverStates[social.key as keyof typeof hoverStates] ? 'hover' : ''}`}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Copyright */}
        <Row>
          <Col md={12} className="text-center">
            <p className="mb-0 footer-text">
              © {new Date().getFullYear()} VCodify Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg,rgb(54, 85, 143) 0%,rgb(100, 116, 144) 100%);
        }
        
        .footer-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-link:hover,
        .footer-link.hover {
          color: white;
          text-decoration: none;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after,
        .footer-link.hover::after {
          width: 100%;
        }
        
        .footer-icon {
          font-size: 1rem;
          color: rgba(200, 165, 165, 0.8);
          transition: all 0.3s ease;
        }
        
        .footer-icon-wrapper {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .footer-icon-wrapper.hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .footer-icon-wrapper.hover .footer-icon {
          color: white;
          transform: scale(1.1);
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .social-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .social-icon.hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        
        .social-name {
          margin-left: 10px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover .social-name {
          color: white;
        }
        
        hr {
          border-color: rgba(214, 203, 203, 0.1);
        }
        
        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }
          
          .footer-icon-wrapper,
          .social-link {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;