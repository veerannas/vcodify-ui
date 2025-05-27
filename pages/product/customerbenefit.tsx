import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import JobsArr from "../config/jobs.json";

const arr = [
	{
		img: "images/customerbenefit1.png",
		text: "Variety of Business",
	},
	{
		img: "images/customerbenefit2.png",
		text: "Appointment Management",
	},
	{
		img: "images/customerbenefit3.png",
		text: "Good offers",
	},
];

const CustomerBenefit = (props: any) => {
	return (
		<Container>
			<h2 className="section-center">Customer</h2>

			<Row>
				{arr.map((d: any, index: any) => {
					return (
						<Col key={"img_" + index} xs={24} md={4}>
							<div className="section-image-center ">
								<Image src={d.img} fluid className="product-images box" />
								<div className="productsection-image-text ">{d.text}</div>
							</div>
						</Col>
					);
				})}
			</Row>
			{/* <br></br> */}
		</Container>
	);
};

export default CustomerBenefit;
