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

const Section2 = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		console.log(`Option selected:`, selectedOption);
	};
	return (
		<Container>
			<h2 className="section-center">
				Our Product is Fast, Flexible and Friendly
			</h2>
			<div className="section-subheader pb-4 pt-2">
				ReserveHubs provides a fast, flexible and friendly interface for both
				businesses and customers in managing different types of reservations
			</div>

			<Row>
				<Col xs={12} md={5}>
					<Image
						src="images/fast.png"
						fluid
						data-aos="fade-in"
						className="image-padding"
					/>
				</Col>
				<Col xs={12} md={7} className="pb-3" data-aos="fade-in">
					<div className="carrier-text productimagetext ">
						<h3 className="pt-3">Fast</h3>
						<p>
							<b>Customers</b>
							<br></br>
							Reserving services of your choice in no time without scrutinizing
							different websites makes the platform faster
						</p>
						<p>
							<b>Businesses</b>
							<br></br>
							Showcase your services on one central platform, getting online
							exposure and recognition from larger customer groups{" "}
						</p>
					</div>
				</Col>
			</Row>
			{/* <div className="distance-between"></div> */}
		</Container>
	);
};

export default Section2;
