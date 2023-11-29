import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp.js";

const App = () => {
	return (
		<>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/service' element={<Service />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
