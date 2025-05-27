import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ReactPlayer from "react-player";

const Terms = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}
	return (
		<Container className="terms-of-use">
			<Row>
				<Col xs={12} md={12}>
					<div className=" text-center">
						<h3 className="headingterms">Terms of Use</h3>
						<div className="text-left">
							<h5>Mission</h5>
							Our mission is to help both Customers and Businesses to get the
							best deals. The path is going forward to tap into the unused, more
							efficient mode of business engagement. Both parties will use the
							platform for nominal costs. ReserveHub provides a marketplace for
							Businesses to publish their services to a wider customer group and
							also allows customers to explore all businesses and make
							reservations with the luxury of staying at home/office.{" "}
							<div className="distance-between"></div>
							<b>You are exempted to-</b>
							<ul>
								<li>User Account </li>
								<li> Browse Different Services</li>
								<li>Payment</li>
								<li>Reschedule/Cancelling</li>
								<li>Network Access</li>
							</ul>
							<div className="distance-between"></div>
							<b>Under the conditions of-</b>
							<ul>
								<li>
									<b className="lightweight">Responsibility – </b>You take
									responsibility for your edits (since we only host your
									content).
								</li>
								<li>
									<b className="lightweight">Civility –</b> You support a civil
									environment and do not harass other users.{" "}
								</li>
								<li>
									<b className="lightweight">Lawful Behavior – </b>You do not
									violate copyright or other laws.
								</li>
								<li>
									<b className="lightweight">No Harm –</b> You do not harm our
									technology infrastructure.
								</li>
								<li>
									<b className="lightweight">Terms of Use and Policies –</b> You
									adhere to the below Terms of Use and to the applicable
									community policies when you visit our sites or participate in
									our communities.
								</li>
							</ul>
							<div className="distance-between"></div>
							<b>Responsibilities-</b>
							You oblige to the terms and condition of business, and business
							has all right to take your service out in case of any violation of
							the rules. No damage to property, article etc..,and need to pay
							for the damage if any.
						</div>
						<div className="distance-between"></div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Terms;
