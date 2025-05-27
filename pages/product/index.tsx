import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Benefit from "./benefit";
import CustomerBenefit from "./customerbenefit";
import BusinessBenefit from "./businessbenefit";

const Product = () => {
	return (
		<div>
			<main className="div-height">
				<Navbar />
				<div className="container-fluid">
					<div className="header-height"></div>
					<div className="white-background-color">
						<Section1 />
					</div>
					<div className="pink-background-color pt-3 ">
						<Benefit />
					</div>
					<div className="white-background-color pt-3">
						<CustomerBenefit />
					</div>
					<div className="pink-background-color pt-3">
						<BusinessBenefit />
					</div>
					<div className="white-background-color pt-4">
						<Section2 />
					</div>
					<div className="pink-background-color flexiblediv1">
						<Section3 />
					</div>
					<div className="white-background-color">
						<Section4 />
					</div>

					{/* <div className="green-background-color">
              <Section5 />
            </div> */}
				</div>
			</main>
			<Footer />
		</div>
	);
};
export default Product;
