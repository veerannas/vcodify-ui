import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section1 from "./section1";
import Section4 from "./section2";
import Vision from "./vision";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
      easing: 'ease-in-out',
    });
    
    // Refresh AOS on window resize for responsive animations
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Transition variants for motion elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen flex flex-col ${hasMounted ? "opacity-100 transition-opacity duration-500" : "opacity-0"}`}>
      <motion.main 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="flex-grow"
      >
        <Navbar />
        
        <div className="overflow-hidden">
          {/* Hero Section */}
          <div className="bg-white pt-24 lg:pt-32">
            <div data-aos="fade-up" data-aos-delay="100">
              <Section1 />
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="bg-pink-50 py-16 lg:py-24">
            <div className="relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full translate-x-1/4 translate-y-1/4 opacity-10"></div>
              
              <div data-aos="fade-up" data-aos-delay="100">
                <Vision />
              </div>
            </div>
          </div>

          {/* About Section 4 */}
          <div className="bg-pink-50 py-16 lg:py-24">
            <div className="relative">
              <div className="absolute top-0 right-0 w-56 h-56 bg-pink-200 rounded-full translate-x-1/3 -translate-y-1/3 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full -translate-x-1/3 translate-y-1/3 opacity-10"></div>
              
              <div data-aos="zoom-in" data-aos-delay="100">
                <Section4 />
              </div>
            </div>
          </div>
          
          {/* Scroll to top button */}
          <ScrollToTopButton />
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default About;