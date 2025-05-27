import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

const Section1 = () => {
	const moveFuction = () => {
		window.location.href = "/contact?purpose=Request Demo";
	};
	return (
		<Container>
			<Row>
				<Col xs={12} md={6}>
					<div className="career-text">
						<h2>Our Product</h2>
						This is the platform where Businesses and Customers can join
						according to their needs <br></br>
						<div className="product-alighment product-alighment-section1 ">
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
				<Col xs={12} md={6}>
					<Image
						src="images/product.png"
						fluid
						className="career-section1-image"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Section1;
