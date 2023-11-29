import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImg from "../assets/12.jpg";
import FeatureSections from "../components/FeatureSections";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero'
				heroImg={HeroImg}
				title='Your Journey Your Story'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
				buttonText='Get Started'
				url='/'
				btnClass='show'
			/>
			<FeatureSections />
			<Card />
			<Footer />
		</>
	);
};

export default Home;
