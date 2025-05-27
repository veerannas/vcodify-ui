import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { Cookies } from "react-cookie";
import { useRouter } from "next/router";

const Section2 = () => {
	const cookies = new Cookies();
	const [value, setValue] = useState("");
	const router = useRouter();

	// useEffect(() => {
	// 	fetchContact();
	// }, [router.query.purpose]);

	const fetchContact = () => {
		formik.values.purpose = String(router.query.purpose).replace(/['"]+/g, "");
		setValue(JSON.stringify(router.query.purpose));
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			companyname: "",
			purpose: "",
			email: "",
			number: "",
			message: "",
		},
		//it is used for validation
		validationSchema: yup.object({
			name: yup.string().required("First name is required"),
			number: yup.string().required("Mobile Number is required"),
			email: yup.string().required("Email is required").email("Invalid Email"),
		}),
		//form submit call
		onSubmit: (values, actions) => {
			var templateParams = {
				name: values.name,
				companyname: values.companyname,
				purpose: values.purpose,
				email: values.email,
				number: values.number,
				message: values.message,
			};
			emailjs
				.send(
					"service_1zwoyis",
					"template_09p3twi",
					templateParams,
					"user_w32WfjXnSKxD83Ysl00IC"
				)
				.then(
					(response) => {
						console.log("SUCCESS!", response.status, response.text);
						Swal.fire(
							"Successuly Sent!",
							"Thank You Contacting Us!",
							"success"
						);
						actions.resetForm();
					},
					(err) => {
						console.log("FAILED...", err);
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Something went wrong!",
							timer: 2000,
							// footer: '<a href="">Why do I have this issue?</a>'
						});
					}
				);
		},
	});
	return (
		<Container>
			<Row>
				<Col xs={12} md="4" className="contactcall">
					<Card
						className=" card-border text-center shadow "
						data-aos="zoom-in-up">
						<Card.Body className="cardcolor">
							<Card.Title className="text-center ">Call</Card.Title>
							<Card.Text>USA</Card.Text>
							<Card.Text>
								<a
									target="_blank"
									href="tel:+1 484 473 6933"
									className="color-email">
									+1 484-473-6933
								</a>
							</Card.Text>
							<Card.Text>INDIA</Card.Text>
							<Card.Text>
								<a
									target="_blank"
									href="tel:+91 9768220009"
									className="color-email">
									+91 9768220009
								</a>
							</Card.Text>
							<hr></hr>
							<Card.Title className="text-center ">Email</Card.Title>
							<Card.Text>
								<a
									target="_blank"
									href="https://www.gmail.com"
									className="color-email">
									reserve.hubs.info@gmail.com
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md="8" className="card-padding-top" data-aos="fade-in">
					<Card className=" card-border shadow">
						<Card.Body className="cardcolor">
							<Card.Title className="text-center">Get In Touch</Card.Title>
							<div className="distance-between"></div>
							<Form noValidate onSubmit={formik.handleSubmit}>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											type="text"
											placeholder="Name"
											aria-describedby="inputGroupPrepend"
											name="name"
											value={formik.values.name}
											onChange={formik.handleChange}
											isInvalid={!!formik.errors.name}
										/>
										<Form.Control.Feedback type="invalid">
											{formik.errors.name}
										</Form.Control.Feedback>{" "}
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											type="text"
											placeholder="Company Name"
											aria-describedby="inputGroupPrepend"
											name="companyname"
											value={formik.values.companyname}
											onChange={formik.handleChange}
										/>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											as="select"
											placeholder="Being purpose"
											aria-describedby="inputGroupPrepend"
											name="purpose"
											value={formik.values.purpose}
											onChange={formik.handleChange}>
											{" "}
											<option value="General Query">General Query</option>
											<option value="Business Query">Business Query</option>
											<option value="Job Application">Job Application</option>
											<option value="Request Demo">Request Demo</option>
											<option value="Become Investor">Become Investor</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											type="text"
											placeholder="Email Address"
											aria-describedby="inputGroupPrepend"
											name="email"
											value={formik.values.email}
											onChange={formik.handleChange}
											isInvalid={!!formik.errors.email}
										/>
										<Form.Control.Feedback type="invalid">
											{formik.errors.email}
										</Form.Control.Feedback>{" "}
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											type="text"
											placeholder="Contact Number"
											aria-describedby="inputGroupPrepend"
											name="number"
											value={formik.values.number}
											onChange={formik.handleChange}
											isInvalid={!!formik.errors.number}
										/>
										<Form.Control.Feedback type="invalid">
											{formik.errors.number}
										</Form.Control.Feedback>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationFormik01">
										<Form.Control
											as="textarea"
											placeholder="Message"
											aria-describedby="inputGroupPrepend"
											name="message"
											value={formik.values.message}
											onChange={formik.handleChange}
										/>
									</Form.Group>
								</Form.Row>
								<div className="text-center">
									<Button
										type="submit"
										className="product-subtitle-button"
										variant="secondary"
										size="lg">
										Submit
									</Button>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<br></br>
		</Container>
	);
};

export default Section2;
