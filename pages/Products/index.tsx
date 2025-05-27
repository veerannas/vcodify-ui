import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "./Section1";
import styles from "./services.module.css";
 
const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad',
      offset: 120
    });
 
    // Handle scroll to section if hash exists in URL
    const handleHashScroll = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navbarHeight = document.querySelector('.navbar-bg-color')?.clientHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;
           
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 300);
      }
    };
 
    handleHashScroll();
 
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashScroll, false);
 
    return () => {
      window.removeEventListener('hashchange', handleHashScroll, false);
    };
  }, []);
 
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
     
      <header className={styles.heroSection} data-aos="fade-down">
        <div className={styles.heroContent}>
          <h1>Our Products & Services</h1>
          <p data-aos="fade-down" data-aos-delay="100">
            Empowering businesses through innovative solutions and expert services
          </p>
        </div>
      </header>
 
      <main className={styles.mainContent}>
        <Section1 />
      </main>
 
      <Footer />
    </div>
  );
};
 
export default Products;