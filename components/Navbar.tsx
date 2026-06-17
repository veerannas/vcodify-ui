import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import TabTitle from "./TabTitle";
import Image from "next/image";
 
const Header = () => {
  const router = useRouter();
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
 
  const handleProductsClick = (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      setShowProductsDropdown(!showProductsDropdown);
    }
  };
 
  const scrollToSection = (sectionId) => {
    if (router.pathname === "/Products") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setShowProductsDropdown(false);
    } else {
      router.push(`/Products#${sectionId}`);
    }
  };
 
  return (
    <>
      <TabTitle />
      <Navbar expand="lg" fixed="top" className="navbar-bg-color">
        <Navbar.Brand href="/">
          <Image
            src="/images/vcodify.png"
            width={160}
            height={40}
            alt="Vcodify Logo"
            className="navbar-img-responsive"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              href="/home"
              className={
                router.pathname == "/" || router.pathname == "/home" ? `active` : ``
              }>
              Home
            </Nav.Link>
           
            <Nav.Link> </Nav.Link>
           
            <Nav.Link
              href="/about"
              className={router.pathname == "/about" ? `active` : ``}>
              About Us
            </Nav.Link>
           
            <Nav.Link> </Nav.Link>
           
            <Nav.Link
              href="/Vserv"
              className={router.pathname == "/Vserv" ? `active` : ``}>
              Vserv
            </Nav.Link>
           
            <Nav.Link> </Nav.Link>
           
           
            <Nav.Link
              href="/Products"
              className={router.pathname == "/Products" ? `active` : ``}>
              Products
            </Nav.Link>
           
            <Nav.Link> </Nav.Link>
           
            <Nav.Link
              href="/career"
              className={router.pathname == "/career" ? `active` : ``}>
              Career
            </Nav.Link>
           
            <Nav.Link> </Nav.Link>
           
            <Nav.Link
              href="/contact"
              className="schedule-call-btn-wrapper"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="schedule-call-btn">
                <div className="call-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="call-text">Schedule a Call</div>
                <div className={`pulse-ring ${isHovering ? 'expanding' : ''}`}></div>
                <div className="button-glow"></div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 
      <style jsx>{`
        .navbar-bg-color {
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 15px 0;
        }
       
        /* Schedule a Call Button Styles */
        .schedule-call-btn-wrapper {
          margin-left: 10px;
          padding: 0 !important;
        }
       
        .schedule-call-btn {
          position: relative;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #FF6B35 0%, #FF6B35 100%);
          color: white !important;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 4px 6px rgba(227, 30, 37, 0.2);
        }
       
        .schedule-call-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(227, 30, 37, 0.4);
        }
       
        .call-icon {
          margin-right: 12px;
          transition: transform 0.3s ease;
          font-size: 16px;
        }
       
        .schedule-call-btn:hover .call-icon {
          transform: rotate(45deg);
        }
       
        .call-text {
          transition: transform 0.3s ease;
        }
       
        .schedule-call-btn:hover .call-text {
          transform: translateX(5px);
        }
       
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          opacity: 0;
          z-index: -1;
        }
       
        .pulse-ring.expanding {
          animation: pulse 1.5s infinite;
        }
       
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.7;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
        }
       
        .button-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%);
          transition: transform 0.7s ease;
          z-index: -1;
        }
       
        .schedule-call-btn:hover .button-glow {
          transform: translateX(100%);
        }
       
        /* General Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
       
        /* Responsive Styles */
        @media (max-width: 991px) {
          .dropdown-menu {
            position: static;
            box-shadow: none;
            animation: none;
          }
         
          .schedule-call-btn-wrapper {
            margin: 10px 0;
            display: block;
          }
         
          .schedule-call-btn {
            justify-content: center;
            width: 100%;
          }
         
          .pulse-ring {
            display: none;
          }
         
          .nav-item.dropdown {
            padding: 8px 0;
          }
         
          .dropdown-menu {
            padding-left: 15px;
            background-color: #f8f9fa;
          }
         
          .dropdown-item {
            padding: 8px 15px;
          }
        }
       
        @media (min-width: 992px) {
          .dropdown-caret {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
 
export default Header;