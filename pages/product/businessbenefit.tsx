import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import JobsArr from "../config/jobs.json";

const arr = [
	{
		img: "images/business1.png",
		text: "Create Business Account",
	},
	{
		img: "images/business2.png",
		text: "Manage Business",
	},
	{
		img: "images/business3.png",
		text: " Business Grow ",
	},
];

const BusinessBenefit = (props: any) => {
	return (
		<Container>
			<h2 className="section-center">Business</h2>

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
		</Container>
	);
};

export default BusinessBenefit;
