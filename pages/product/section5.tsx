import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Section5 = () => {
	const moveFuction = () => {
		window.location.href = "/contact?purpose=Request Demo";
	};
	return (
		<Container className="product-section5">
			<Row>
				<Col xs={12} md={12} className="product-alighment">
					<Button
						className="product-subtitle-button"
						variant="secondary"
						size="lg"
						onClick={moveFuction}>
						Request Demo
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Section5;
