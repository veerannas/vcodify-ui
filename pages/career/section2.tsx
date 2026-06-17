import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Select from "react-select";
import JobsArr from "../config/jobs.json";
import VacancyArr from "../config/vacancy.json";
import CategoryArr from "../config/category.json";
import LocationArr from "../config/location.json";
const arr = [
	{
		img: "images/efforts.png",
		text: "Effort",
	},
	{
		img: "images/consistency.png",
		text: "Consistency",
	},
	{
		img: "images/loyalty.png",
		text: "Loyalty",
	},
];
const Section2 = (props: any) => {
	const [selectedJob, setSelectedJob] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const handleChangeJob = (selectedOption) => {
		setSelectedJob(selectedOption);
	};
	const handleChangeLocation = (selectedOption) => {
		setSelectedLocation(selectedOption);
	};
	const handleChangeCategory = (selectedOption) => {
		setSelectedCategory(selectedOption);
	};
	const serchResult = (
		selectedJob: any,
		selectedLocation: any,
		selectedCategory: any
	) => {
		let filterData;
		if ((selectedJob.value || "") !== "") {
			filterData = JobsArr.filter((obj: any) => obj.job == selectedJob.value);
			props.setList(filterData);
		} else {
			props.setList(JobsArr);
		}
	};
	const clearResult = () => {
		setSelectedJob("");
		setSelectedLocation("");
		setSelectedCategory("");
		props.setList(JobsArr);
	};
	return (
		<Container
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-delay="300"
			data-aos-offset="0">
			<Row>
				{arr.map((d: any, index: any) => {
					return (
						<Col key={"img_" + index} xs={24} md={4}>
							<div className="section-image-center box">
								<Image src={d.img} fluid className="carrier-images" />
								<div className="section-image-text ">
									<b>{d.text}</b>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
			<br></br>
			<div className="careerbox2">
				<Row>
					<Col xs={12} md={3} className="careerjob ">
						<Select
							value={selectedJob}
							onChange={handleChangeJob}
							options={VacancyArr}
							placeholder="Job"
						/>
					</Col>
					<Col xs={12} md={3} className="careerlocation">
						<Select
							value={selectedLocation}
							onChange={handleChangeLocation}
							options={LocationArr}
							placeholder="Location"
						/>
					</Col>
					<Col xs={12} md={3} className="careercategory">
						<Select
							value={selectedCategory}
							onChange={handleChangeCategory}
							options={CategoryArr}
							placeholder="Category"
						/>
					</Col>
					<Col xs={12} md={3} className="search-clear-buton">
						<Button
							variant="secondary"
							className="career-button-backgroud"
							onClick={() =>
								serchResult(selectedJob, selectedLocation, selectedCategory)
							}>
							<i className="fa fa-search ,fa"></i> Search
						</Button>
						<Button
							variant="secondary"
							className="career-button-backgroud2"
							onClick={clearResult}>
							Clear
						</Button>
					</Col>
				</Row>
			</div>
			<br></br>
		</Container>
	);
};
export default Section2;
