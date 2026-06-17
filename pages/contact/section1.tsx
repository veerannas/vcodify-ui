import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ReactPlayer from "react-player";

const Section1 = () => {
	return (
		<Container>
			<Row>
				<Col xs={12} md={6}>
					<div className="career-text">
						<h2>Contact Us</h2>
						Please get in touch with our expert support team and we will answer
						all your queries
					</div>
				</Col>
				<Col xs={12} md={6}>
					<Image
						src="images/contact.png"
						fluid
						className="career-section1-image"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Section1;
