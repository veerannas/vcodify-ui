import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import KeyBenefitArr from "../config/keybenefit.json";
import {
    FaChartLine,
    FaShieldAlt,
    FaRocket,
    FaHandshake,
    FaCogs,
    FaLightbulb,
    FaMobileAlt,
    FaGlobe,
    FaUsers
} from "react-icons/fa";
 
// Array of icon components with their colors
const iconComponents = [
    { Icon: FaChartLine, color: "#4CAF50" },    // Green
    { Icon: FaShieldAlt, color: "#2196F3" },   // Blue
    { Icon: FaRocket, color: "#FF5722" },      // Orange
    { Icon: FaHandshake, color: "#9C27B0" },   // Purple
    { Icon: FaCogs, color: "#607D8B" },        // Gray-blue
    { Icon: FaLightbulb, color: "#FFC107" },   // Amber
    { Icon: FaMobileAlt, color: "#3F51B5" },   // Indigo
    { Icon: FaGlobe, color: "#00BCD4" },       // Cyan
    { Icon: FaUsers, color: "#E91E63" }        // Pink
];
 
const Section4 = () => {
    return (
        <Container>
            <h2 className="section-center" data-aos="zoom-in">
                Key Benefits
            </h2>
            <p className="section-subtitle" data-aos="fade-up">
                Why businesses and customers choose our platform
            </p>
 
            <Row className="mt-5">
                {KeyBenefitArr.map((d: any, index: any) => {
                    const IconData = iconComponents[index % iconComponents.length];
                    const Icon = IconData.Icon;
                    const iconColor = IconData.color;
                   
                    return (
                        <Col key={"img_" + index} xs={12} md={6} lg={4} className="mb-4">
                            <div
                                className="benefit-card"
                                data-aos="fade-up"
                                data-aos-delay={index % 3 * 100}
                            >
                                <div className="benefit-icon" style={{ color: iconColor }}>
                                    <Icon />
                                </div>
                                <h3>{d.text}</h3>
                                <p>{d.description}</p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
 
            <style jsx>{`
                .section-subtitle {
                    text-align: center;
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto 30px;
                }
 
                .benefit-card {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    text-align: center;
                }
 
                .benefit-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
 
                .benefit-card:hover .benefit-icon {
                    transform: scale(1.1);
                }
 
                .benefit-icon {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
 
                .benefit-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 15px;
                    color: var(--dark-color);
                }
 
                .benefit-card p {
                    color: #666;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
 
                @media (max-width: 768px) {
                    .benefit-card {
                        padding: 20px;
                    }
                   
                    .benefit-icon {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </Container>
    );
};
 
export default Section4;