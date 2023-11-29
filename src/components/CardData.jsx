import "./CardStyles.css";
import { motion } from "framer-motion";
import React from "react";

const CardData = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className={`t-card ${props.cardStyle}`}>
			<div className='t-image'>
				<img src={props.image} alt='image' />
			</div>
			<h4>{props.heading}</h4>
			<p>{props.text}</p>
			<button style={{ marginTop: "10px" }}>
				Get Started{" "}
				<i className='fas fa-arrow-right' style={{ marginLeft: "5px" }}></i>
			</button>
		</motion.div>
	);
};

export default CardData;
