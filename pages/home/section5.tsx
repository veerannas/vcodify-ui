import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
const ReactPlayerNoSSR = dynamic(() => import('react-player'), {
    ssr: false,  // Disable SSR for this component
  });
const Section5 = () => {
    const moveFuction = () => {
        window.location.href = "/contact?purpose=Request Demo";
    };
    return (
        <Container>
            <h2 className="section-center">One Platform For All</h2>
 
            <Row>
                <Col xs={12} md={6}>
                    <div className="player-wrapper">
                        <ReactPlayerNoSSR
                            className="react-player image-padding"
                            url="videos/rhub.mp4"
                            width="100%"
                            height="100%"
                            controls={true}
                        />
                    </div>
                </Col>
 
                <Col xs={12} md={6}>
                    <div className="career-text">
                        We focus on giving all businesses an online exposure and larger
                        customer base through our platform
                        <div className="product-alighment pb-3">
                            <br></br>
                            <Button
                                className="product-subtitle-button"
                                variant="secondary"
                                size="lg"
                                onClick={moveFuction}>
                                Request Demo
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
 
export default Section5;
 