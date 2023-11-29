import React from "react";
import { useState } from "react";

import CardData from "./CardData";
import "./CardStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

const cardData = [
	{
		image: Trip1,
		heading: "Card 1",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 1",
	},
	{
		image: Trip2,
		heading: "Card 2",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 2",
	},
	{
		image: Trip3,
		heading: "Card 3",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 3",
	},
	{
		image: Trip1,
		heading: "Card 4",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 4",
	},
	{
		image: Trip2,
		heading: "Card 5",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 5",
	},
	{
		image: Trip3,
		heading: "Card 6",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 6",
	},
	{
		image: Trip1,
		heading: "Card 7",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 7",
	},
	{
		image: Trip2,
		heading: "Card 8",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Dummy test text for card 8",
	},
];

const Card = () => {
	const [index, setIndex] = useState(0);

	const slideLeft = () => {
		setIndex(index - 1);
	};

	const slideRight = () => {
		setIndex(index + 1);
	};

	return (
		<div className='trip'>
			<h1>Cards Section</h1>
			<p>You can discover all the 8 Cards here</p>
			<div className='cardcontainer'>
				<div className='carousel-container'>
					{cardData.map((item, index) => {
						return (
							<CardData
								key={index}
								image={item.image}
								heading={item.heading}
								text={item.text}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Card;
