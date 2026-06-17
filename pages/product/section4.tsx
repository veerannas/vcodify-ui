import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import Select from "react-select";
const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const arr = [
	{
		start: 0,
		end: 18000,
		duration: 10,
	},
	{
		start: 0,
		end: 95,
		duration: 10,
	},
	{
		start: 0,
		end: 103,
		duration: 10,
	},
];

const Section4 = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		console.log(`Option selected:`, selectedOption);
	};
	return (
		<Container>
			<Row>
				<Col xs={12} md={5}>
					<Image
						src="images/friendly.png"
						fluid
						data-aos="fade-in"
						className="image-padding"
					/>
				</Col>
				<Col xs={12} md={7} className="pb-3" data-aos="fade-in">
					<div className="product-top carrier-text productimagetext">
						<h3 className="pt-3">Friendly</h3>
						<p>
							<b>Customers</b>
							<br></br>A user-friendly platform available 24/7 , allowing
							exploration of services easier, simpler and recognizable than
							before
						</p>
						<p>
							<b>Businesses</b>
							<br></br>A friendly interface to publish services provided by you
							and manage reservations along with email/SMS notification
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Section4;
