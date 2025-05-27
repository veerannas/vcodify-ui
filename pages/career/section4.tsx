import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import JobsArr from "../config/jobs.json";

const Section4 = (props: any) => {
	const moveFuction = () => {
		window.location.href = "/contact?purpose=Job Application";
	};
	// useEffect(() => {
	// 	props.setList(JobsArr);
	// }, []);

	return (
		<Container>
			<Row>
				{props.list &&
					props.list.map((d: any, index: any) => {
						return (
							<Col
								key={"title_" + index}
								xs={12}
								md={12}
								className="card-border-top-space">
								<Card
									className="card-border card1-backgroud-gradient card-size-section5 "
									data-aos="zoom-in">
									<Card.Body>
										<Row>
											<Col xs={12} md={4}>
												<h6 className="card-header-color">{d.title}</h6>
												<Card.Subtitle className="mb-2 career-text-size experience-padding">
													{d.experiance}
												</Card.Subtitle>
											</Col>
											<Col xs={12} md={3} className="text-left">
												<Card.Subtitle className="mb-2  career-text-size  career-section5-space">
													{d.from}
												</Card.Subtitle>
											</Col>

											<Col xs={8} md={3} className="text-left">
												<Card.Subtitle className="mb-2  career-text-size  career-section5-space2">
													{d.technology}
												</Card.Subtitle>
											</Col>
											<Col xs={4} md={2} className=" text-right ">
												<Button
													className="card-subtitle-button section4-button    "
													variant="secondary"
													size="lg"
													onClick={moveFuction}>
													Apply
												</Button>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
			</Row>
			<br></br>
		</Container>
	);
};

export default Section4;
