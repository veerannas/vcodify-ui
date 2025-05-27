import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import JobsArr from "../config/jobs.json";

const arr = [
	{
		img: "images/benefit1.png",
		text: "Product targets maximum number of services a business can offer",
	},
	{
		img: "images/benefit2.png",
		text: "Businesses  can register themselves and provide information regarding their services",
	},
	{
		img: "images/benefit3.png",
		text: "Customers can reserve appointments according to their need of service",
	},
];

const Benefit = (props: any) => {
	return (
		<Container>
			<h2 className="section-center">Benefits</h2>
			<Row>
				{arr.map((d: any, index: any) => {
					return (
						<Col key={"img_" + index} xs={12} md={4}>
							<div className="text-center">
								<Image src={d.img} fluid className="box carrier-images" />
								<div className="productsection-image-text ">{d.text}</div>
							</div>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
export default Benefit;
