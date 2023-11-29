import React from "react";
import { motion } from "framer-motion";
import "./FooterStyles.css";

const Footer = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			className='footer'>
			<div className='top'>
				<div>
					<h1>Fictium</h1>
					<p>Lorem ipsum dolor</p>
				</div>
				<div>
					<a href='/'>
						<i className='fa fa-brands fa-facebook-square'></i>
					</a>
					<a href='/'>
						<i className='fa fa-brands fa-instagram-square'></i>
					</a>
					<a href='/'>
						<i className='fa fa-brands fa-behance-square'></i>
					</a>
					<a href='/'>
						<i className='fa fa-brands fa-twitter-square'></i>
					</a>
				</div>
			</div>
			<div className='bottom'>
				<div>
					<h4>Projects</h4>
					<a href='/'>ChangeLog</a>
					<a href='/'>Status</a>
					<a href='/'>License</a>
					<a href='/'>All Version</a>
				</div>
				<div>
					<h4>Community</h4>
					<a href='/'>GitHub</a>
					<a href='/'>Project</a>
					<a href='/'>Twitter</a>
				</div>
				<div>
					<h4>Help</h4>
					<a href='/'>Support</a>
					<a href='/'>Troubleshooting</a>
					<a href='/'>Contact Us</a>
				</div>
				<div>
					<h4>Others</h4>
					<a href='/'>Terms of Service</a>
					<a href='/'>Privacy Policy</a>
					<a href='/'>License</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Footer;
