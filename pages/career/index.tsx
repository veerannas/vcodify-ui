import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import AOS from "aos";
import "aos/dist/aos.css";
 
const Carrier = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
 
  return (
    <div className="carrier-page">
      <Navbar />
     
      <main>
        {/* Hero Section with background image */}
        <div className="career-hero-wrapper">
          <Container>
            <Section1 />
          </Container>
        </div>
 
        {/* Job Openings Section */}
        <div className="section-wrapper white-bg">
          <Container>
            <Section2 />
          </Container>
        </div>
 
        {/* Why Join Us Section */}
        <div className="section-wrapper light-bg">
          <Container>
            <Section3 />
          </Container>
        </div>
 
        {/* Application Form Section */}
        <div className="section-wrapper white-bg">
          <Container>
            <Section4 />
          </Container>
        </div>
      </main>
     
      <Footer />
 
      <style jsx global>{`
        :root {
          --primary-color: #FF6B35;
          --secondary-color: #FF6B35;
          --dark-color: rgb(57, 51, 105);
          --text-light: #6c757d;
        }
       
        .carrier-page {
          background: #f8f9fa;
        }
       
        .career-hero-wrapper {
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(125, 132, 163, 0.85) 0%, rgba(146, 114, 82, 0.85) 100%),
                    url('/images/career-bg.jpg') center/cover no-repeat;
          color: white;
          position: relative;
          overflow: hidden;
          background-attachment: fixed;
          padding: 100px 0;
        }
       
        .career-hero-wrapper::before {
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
       
        .section-wrapper {
          padding: 80px 0;
          position: relative;
        }
       
        .white-bg {
          background: white;
        }
       
        .light-bg {
          background: #f1f3ff;
        }
       
        @media (max-width: 768px) {
          .career-hero-wrapper {
            min-height: 60vh;
            background-attachment: scroll;
            padding: 80px 0;
          }
         
          .section-wrapper {
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
};
 
export default Carrier;