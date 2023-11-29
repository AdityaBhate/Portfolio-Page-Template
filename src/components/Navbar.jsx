import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
	const [state, setState] = useState(false);
	return (
		<motion.nav
			className='navbar-items'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}>
			<h1 className='navbar-logo'>Fictium</h1>
			<div
				className='menu-icons'
				onClick={() => {
					setState(!state);
				}}>
				{state ? (
					<i className='fas fa-times'></i>
				) : (
					<i className='fas fa-bars'></i>
				)}
			</div>

			<ul className={state ? "nav-menu active" : "nav-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link to={item.url} className={item.cName}>
								<i className={item.icon}></i>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</motion.nav>
	);
};

export default Navbar;
