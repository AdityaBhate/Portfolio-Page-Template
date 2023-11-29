import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./FeatureSection.css";
import FeatureData from "./FeatureData";

const FeatureSections = (props) => {
	return (
		<>
			<div className='destination'>
				<h1>Popular Features</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					voluptatum.
				</p>
			</div>

			<FeatureData
				cName='first-des'
				heading='Feature One'
				text='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				img1={Mountain1}
				img2={Mountain2}
			/>

			<FeatureData
				cName='first-des-reverse'
				heading='Second Feature'
				text='    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				img1={Mountain3}
				img2={Mountain4}
			/>
		</>
	);
};

export default FeatureSections;
