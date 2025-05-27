import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
const Section3 = () => {
	return (
		<Container>
			<div className="flexible1">
				<Row>
					<Col xs={12} md={7} className="pb-3 " data-aos="fade-in">
						<div className=" product-top  carrier-text productimagetext ">
							<h3 className="pt-3 ">Flexible</h3>
							<p>
								<b>Customers</b>
								<br></br>
								Application provides flexibility of rescheduling, tracking, and
								managing your reservations
							</p>
							<p>
								<b>Businesses</b>
								<br></br>
								Integrate your existing systems with our application and provide
								services round the clock
							</p>
						</div>
					</Col>
					<Col xs={12} md={5}>
						<Image
							src="images/flexible.png"
							fluid
							data-aos="fade-in"
							className="image-padding"
						/>
					</Col>
				</Row>
			</div>
			<div className="flexible2">
				<Row>
					<Col xs={12} md={5}>
						<Image
							src="images/flexible.png"
							fluid
							data-aos="fade-in"
							className="image-padding"
						/>
					</Col>
					<Col xs={12} md={7} className="pb-3" data-aos="fade-in">
						<div className="carrier-text">
							<h3 className="pt-3">Flexible</h3>
							<p>
								<b>Customers</b>
								<br></br>
								Application provides flexibility of rescheduling, tracking, and
								managing your reservations
							</p>
							<p>
								<b>Businesses</b>
								<br></br>
								Integrate your existing systems with our application and provide
								services round the clock
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};
export default Section3;
