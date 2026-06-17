import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { motion } from 'framer-motion';
 
const Section2 = () => {
    const stats = [
        { label: 'Businesses', value: 18000, suffix: '+', color: 'var(--primary-color)' },
        { label: 'Market Coverage', value: 75, suffix: '%', color: 'var(--dark-color)' },
        { label: 'Customers', value: 350000, suffix: '+', color: 'var(--primary-color)' }
    ];
 
    return (
        <Container>
            <h2 className="section-center" data-aos="zoom-in">
                Our Impact
            </h2>
 
            <Row className="justify-content-center">
                {stats.map((item, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4 mb-md-0">
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="stat-value" style={{ color: item.color }}>
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    separator=","
                                    suffix={item.suffix}
                                />
                            </div>
                            <div className="stat-label">{item.label}</div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
 
            <style jsx>{`
                .stat-card {
                    background: white;
                    border-radius: 15px;
                    padding: 40px 20px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                }
 
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                }
 
                .stat-value {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    line-height: 1;
                }
 
                .stat-label {
                    font-size: 1.2rem;
                    color: #666;
                    font-weight: 500;
                }
 
                @media (max-width: 768px) {
                    .stat-value {
                        font-size: 2.5rem;
                    }
 
                    .stat-label {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </Container>
    );
};
 
export default Section2;