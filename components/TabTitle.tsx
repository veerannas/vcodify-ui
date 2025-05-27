import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

const useDocTitle = () => {
	const router = useRouter();
	return (
		<Row>
			<Col>
				{router.pathname == "/" && (
					<Helmet>
						<title>Vcodify </title>
						<meta
							name="description"
							content="Vcodify,reserve, hubs, Vcodify, product, reservation, reservation Hubs "
						/>
					</Helmet>
				)}
				{router.pathname == "/home" && (
					<Helmet>
						<title>Vcodify - Home</title>
						<meta
							name="description"
							content="Vcodify home page, Vcodify home, Vcodify ,Vcodify-home page, Vcodify, Vcodifys home page,landing page "
						/>
					</Helmet>
				)}
				{router.pathname == "/product" && (
					<Helmet>
						<title>Vcodify - Product</title>
						<meta
							name="description"
							content="Vcodify product page, Vcodify product, Vcodify ,product-Vcodify product ,Vcodify product,product page,"
						/>
					</Helmet>
				)}
				{router.pathname == "/career" && (
					<Helmet>
						<title>Vcodify - Career</title>
						<meta
							name="description"
							content="Vcodify Career page, Vcodify Career, Vcodify ,career-jobs in Vcodifys, Vcodifys jobs,apply for jobs,career in Vcodifys, reservehubs career, ReserveHubss career page"
						/>
					</Helmet>
				)}
				{router.pathname == "/about" && (
					<Helmet>
						<title>Vcodify - About Us</title>
						<meta
							name="description"
							content="Vcodify About Us page, Vcodify About Us, Vcodify,about us- about Vcodifys,about us page,Vcodify members,invest in Vcodify , Vcodify investor"
						/>
					</Helmet>
				)}
				{router.pathname == "/contact" && (
					<Helmet>
						<title>Vcodify - Contact Us</title>
						<meta
							name="description"
							content="Vcodify Contact Us page, Vcodify Contact Us, Vcodify,Contact Us number,contact us- contact Vcodify,contact Vcodifys, contact Vcodify, Vcodify email, Vcodify book demo, Vcodify book demo, Vcodifys book demo, Vcodify ask query,Vcodifys ask query,Vcodify ask query, Vcodify send feedback, Vcodifys send feedback"
						/>
					</Helmet>
				)}
				{router.pathname == "/terms" && (
					<Helmet>
						<title>Vcodify - Terms</title>
						<meta
							name="description"
							content="Vcodify Terms page, Vcodify Terms, Vcodify,Terms number,Terms - Terms Vcodify, Terms Vcodify, Terms Vcodify, Vcodify email, Vcodify book demo, Vcodify book demo, Vcodify book demo, Vcodify ask query,Vcodify ask query,Vcodify ask query, Vcodify send feedback, Vcodifys send feedback"
						/>
					</Helmet>
				)}
			</Col>
		</Row>
	);
};
export default useDocTitle;
