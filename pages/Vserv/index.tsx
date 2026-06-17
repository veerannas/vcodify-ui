import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import AOS from "aos";
import "aos/dist/aos.css";
 
const Vserv = () => {
  useEffect(() => {
    // Initialize AOS with proper settings
    AOS.init({
      duration: 800,
      once: false, // This makes animations happen every time you scroll
      mirror: true, // Elements will animate out while scrolling past them
      easing: 'ease-in-out-quad',
      offset: 100, // Change offset to trigger animations sooner
    });
 
    // Refresh AOS when route changes
    return () => {
      AOS.refresh();
    };
  }, []);
 
  // This effect will refresh AOS when the component mounts
  useEffect(() => {
    AOS.refresh();
  }, []);
 
  return (
    <div className="reserve-hubs-page">
      <Navbar />
     
      <main>
        {/* Hero Section */}
        <div className="hero-wrapper">
          <Section1 />
        </div>
 
        {/* Stats Section */}
        <div className="section-wrapper stats-section">
          <Container>
            <Section2 />
          </Container>
        </div>
 
        {/* Highlights Section */}
        <div className="section-wrapper highlights-section">
          <Container>
            <Section3 />
          </Container>
        </div>
 
        {/* Benefits Section */}
        <div className="section-wrapper benefits-section">
          <Container>
            <Section4 />
          </Container>
        </div>
 
        {/* Demo Section */}
        <div className="section-wrapper demo-section">
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
          --dark-color: rgb(59, 52, 105);
          --light-color: #FF6B35;
        }
       
        .reserve-hubs-page {
          background: #f8f9fa;
        }
       
        .section-wrapper {
          padding: 80px 0;
          position: relative;
        }
       
        .hero-wrapper {
          min-height: 70vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--dark-color) 0%, var(--primary-color) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
       
        .hero-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: url('/images/hero-pattern.png') center/cover;
          opacity: 0.1;
        }
       
        .stats-section {
          background: white;
        }
       
        .highlights-section {
          background: #f1f3ff;
        }
       
        .benefits-section {
          background: white;
        }
       
        .demo-section {
          background:rgb(234, 236, 241);
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
       
        @media (max-width: 768px) {
          .section-wrapper {
            padding: 50px 0;
          }
        }
      `}</style>
    </div>
  );
};
 
export default Vserv;    