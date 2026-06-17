import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import PlatformArr from "../config/platform.json";
 
const Section3 = () => {
    return (
        <Container>
            <h2 className="section-center" data-aos="zoom-in">
                Key Highlights
            </h2>
            <p className="section-subtitle" data-aos="fade-up">
                Discover what makes our platform stand out from the competition
            </p>
 
            <Row className="mt-5 justify-content-center">
                {PlatformArr.Highlights.map((d: any, index: any) => (
                    <Col
                        key={"img_" + index}
                        xs={12}
                        md={6}
                        lg={4}
                        className="mb-4 d-flex justify-content-center"
                    >
                        <div
                            className="highlight-card"
                            data-aos="fade-up"
                            data-aos-delay={index % 3 * 100}
                        >
                            <div className="highlight-icon">
                                <Image src={d.img} fluid />
                            </div>
                            <h3>{d.text}</h3>
                            <p>{d.description}</p>
                        </div>
                    </Col>
                ))}
            </Row>
 
            <style jsx>{`
                .section-subtitle {
                    text-align: center;
                    font-size: 1.1rem;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto 30px;
                }
 
                .highlight-card {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    text-align: center;
                    width: 100%;
                    max-width: 350px;
                }
 
                .highlight-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
 
                .highlight-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
 
                .highlight-icon img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
 
                .highlight-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 15px;
                    color: var(--dark-color);
                }
 
                .highlight-card p {
                    color: #666;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
 
                @media (max-width: 768px) {
                    .highlight-card {
                        padding: 20px;
                    }
 
                    .highlight-icon {
                        width: 60px;
                        height: 60px;
                    }
                }
            `}</style>
        </Container>
    );
};
 
export default Section3;