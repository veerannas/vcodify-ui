import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Terms from "./terms";
import AOS from "aos";

const Contact = () => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
		AOS.init(); // Initialize AOS on mount
	}, []);
	return (
		<div className={hasMounted ? "div-height aos-init aos-animate" : "div-height"} data-aos="fade-in">
			<main>
				<Navbar />
				<div className="container-fluid">
					<div className="header-height"></div>
					<br></br>
					<div>
						<Terms />
					</div>
					<div className="distance-between"></div>
					<div className="blue-background-color"></div>
					<div className="distance-between"></div>
					<div className="pink-background-color"></div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
