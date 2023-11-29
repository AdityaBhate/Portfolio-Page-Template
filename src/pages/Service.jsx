import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Service = () => {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero-mid'
				heroImg={ServiceImg}
				title='Service'
				url='/service'
				btnClass='hide'
			/>
			<Card />
			<Footer />
		</>
	);
};

export default Service;
