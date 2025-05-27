import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./services.module.css";
 
const services = [
  {
    id: "staffing",
    title: "Staffing Services",
    description:
      "With over a decade of staffing and recruiting experience, we've built an internal network of top talent, expert recruiters, and tools integrated with top job portals to efficiently provide top-tier contingent workforce talent.",
    image: "/images/services2.webp",
  },
  {
    id: "sap",
    title: "SAP Consulting",
    description:
      "SAP is in our DNA. We are an SAP Gold Partner and Denken was founded on our SAP practice and talent. Our team has worked with several Fortune 500 companies and delivered challenging SAP integration projects.",
    image: "/images/services1.webp",
  },
  {
    id: "digital",
    title: "Digital Transformation",
    description:
      "Denken helps you stay ahead of the competition by harnessing disruptive technologies. With our guidance, accelerate your digital journey, establish an agile roadmap, and modernize your IT ecosystem.",
    image: "/images/services3.webp",
  },
  {
    id: "product",
    title: "Product Engineering",
    description:
      "Denken and its associates offer custom-built software for businesses, institutions, and students. These products improve operations, offer cost benefits, and support learning and workforce development.",
    image: "/images/services4.webp",
  },
];
 
const Section1 = () => {
  return (
    <Container className={`py-5 ${styles.servicesContainer}`}>
      <Row className="g-4" xs={1} md={2}>
        {services.map((service, index) => (
          <Col key={index} id={service.id} className="scroll-section">
            <Card
              className={styles.serviceCard}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100 + 100}
            >
              <div className={styles.imageContainer}>
                <Card.Img
                  variant="top"
                  src={service.image}
                  className={styles.cardImage}
                  alt={service.title}
                />
              </div>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{service.title}</Card.Title>
                <Card.Text className={styles.cardText}>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
 
export default Section1;