import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Section5 = () => {
	const [mapValue, setMapValue] = useState("USA");
	return (
		<Container>
			<Row>
				<Col xs={12} md={4}>
					<Card
						className="card-border contactus"
						onClick={() => setMapValue("USA")}>
						<Card.Body className="cardcolor">
							<Card.Title>
								<p className="sortable">
									<b>USA</b>
								</p>{" "}
							</Card.Title>
							<Card.Text>
								W Devon Avenue<br></br> Chicago, IL - 60659
								{/* 5829  North Jersey Ave<br></br>Chicago, IL - 60659 */}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card
						className=" card-border contactus spacecontactindia"
						onClick={() => setMapValue("INDIA")}>
						<Card.Body className="cardcolor">
							<Card.Title>
								<p className="sortable">
									<b> India</b>
								</p>
							</Card.Title>
							<Card.Text>
								Shivani Heritage Near Amity University <br></br> Panvel, PIN -
								410206
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={2} className="card-border-top-space "></Col>
				<Col xs={12} md={6} className="pb-4">
					{mapValue == "USA" && (
						<iframe
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=W%20Devon%20Avenue,%20Chicago,%20IL%2060659+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
							width="100%"
							height="300"
							loading="lazy"
							id="map"></iframe>
					)}
					{mapValue == "INDIA" && (
						<iframe
							src="https://maps.google.com/maps?q=shivani%20heritage%20panvel&t=&z=11&ie=UTF8&iwloc=&output=embed"
							height="300"
							width="100%"
							loading="lazy"
							id="map"></iframe>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Section5;
