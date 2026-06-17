import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
 
const Section1 = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6} className="order-md-1 order-2" data-aos="fade-right">
                    <h1 className="hero-title">
                        A Powerful Platform Connecting Businesses and Customers
                    </h1>
                    <p className="hero-description">
                        ReserveHubs provides a unique platform where businesses and customers
                        can connect according to their specific needs and preferences.
                    </p>
                </Col>
                <Col md={6} className="order-md-2 order-1" data-aos="fade-left">
                    <div className="image-container">
                        <Image src="images/homescreen1.png" fluid className="main-image" />
                        <Image src="images/homescreen.png" fluid className="floating-image" />
                    </div>
                </Col>
            </Row>
 
            <style jsx>{`
                .hero-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    color: white;
                }
               
                .hero-description {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 30px;
                    color: rgba(255,255,255,0.9);
                    max-width: 90%;
                }
 
                .image-container {
                    position: relative;
                    padding: 0px;
                }
 
                .main-image {
                    width: 100%;
                    border-radius: 15px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    z-index: 1;
                    position: relative;
                }
 
                .floating-image {
                    position: absolute;
                    width: 50%;
                    right: 0;
                    bottom: -20px;
                    border-radius: 10px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
                    z-index: 2;
                    transform: translateY(20px);
                }
 
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2rem;
                        margin-top: 30px;
                    }
                   
                    .hero-description {
                        font-size: 1rem;
                    }
 
                    .floating-image {
                        width: 40%;
                    }
                }
            `}</style>
        </Container>
    );
};
 
export default Section1;