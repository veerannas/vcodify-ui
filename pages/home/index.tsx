import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <img src="./"/>
 
      <main>
        {/* Hero Section */}
        <div className="hero-wrapper">
          <Section1 />
        </div>

        {/* Solutions Section */}
        <div className="section-wrapper solutions-section">
          <Container>
            <Section2 />
          </Container>
        </div>

        {/* Technologies Section */}
        <div className="section-wrapper technologies-section">
          <Container>
            <Section3 />
          </Container>
        </div>

        {/* Key Benefits Section */}
        <div className="section-wrapper benefits-section">
          <Container>
            <Section4 />
          </Container>
        </div>

        {/* Demo Section */}
        <div className="section-wrapper">
          <Container>
            <Section5 />
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
        }
        
        body {
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }
        
        .home-page {
          background: #f8f9fa;
        }
        
        .section-wrapper {
          padding: 80px 0;
          position: relative;
        }
        
        .hero-wrapper {
          min-height: 75vh;
          display: flex;
          align-items: center;
          background: 
            linear-gradient(135deg, rgba(93, 99, 126, 0.85) 0%, rgba(143, 127, 111, 0.85) 100%),
            url('/images/home-bg.jpg') center/cover no-repeat;
          color: white;
          position: relative;
          overflow: hidden;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .hero-wrapper::before {
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
        
        .solutions-section {
          background: white;
        }
        
        .technologies-section {
          background: #f1f3ff;
        }
        
        .benefits-section {
          background: white;
        }
        
        .section-center {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          font-weight: 700;
          color: var(--dark-color);
        }
        
        .section-center::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 2px;
        }
        
        .color-red {
          color: var(--secondary-color);
        }
        
        .distance-between {
          height: 30px;
        }
        
        .section-image-center {
          text-align: center;
          padding: 30px 20px;
          margin-bottom: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        
        .section-image-center:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        .section-image-center svg {
          font-size: 40px;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .section-image-text {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .image-width {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 15px;
        }
        
        .platform-margin {
          margin-top: 60px;
        }
        
        .zoom-animation {
          transition: transform 0.3s ease;
        }
        
        .zoom-animation:hover {
          transform: scale(1.05);
        }
        
        .player-wrapper {
          position: relative;
          padding-top: 56.25%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .btn-primary {
          background: var(--primary-color);
          border: none;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          .hero-wrapper {
            min-height: 80vh;
            background-attachment: scroll; /* Disable parallax on mobile */
            background-size: cover;
            background-position: center center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;