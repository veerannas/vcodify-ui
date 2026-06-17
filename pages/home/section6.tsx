import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import JobsArr from "../config/services.json";

const Section3 = () => {
  const moveFuction = () => {
    window.location.href = "/services";
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    swipeToSlide: false,
    autoplay: false,
    focusOnChange: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 200,
        settings: "unslick", // destroys slick
      },
    ],
  };

  return (
    <Container className="careerdiv">
      <Row
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <Col xs={12} md="12">
          <h2 className="career-text text-center">Services</h2>
        </Col>
        <Col xs={12} md="12">
          <Slider {...settings}>
            {JobsArr.map((d: any, index: any) => {
              return (
                <Col
                  key={"title_" + index}
                  xs={24}
                  md={12}
                  className="card-border-top-space">
                  <Card className="card-border card1-backgroud-gradient job-slider">
                    <Card.Body>
                      <h4 className="title-size learn-more-btn">{d.title}</h4>
                      <Card.Subtitle className="mb-2  job-muted-size">
                        <Image src={d.img} className="services-image-width" />
                      </Card.Subtitle>
                      {/* <div className="text-muted-height"></div>
                      <div className="job-muted-height"></div> */}
                    </Card.Body>
                    <Row>
                      <Col xs={24} md={12}>
                        <Card.Subtitle className="mb-2 learn-more-btn">
                          <Button
                            className="card-subtitle-button"
                            variant="secondary"
                            size="lg"
                            onClick={moveFuction}>
                            Learn More
                          </Button>
                        </Card.Subtitle>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Slider>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default Section3;
