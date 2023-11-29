import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImg from "../assets/10.jpg";
import Footer from "../components/Footer";
import SignUpData from "../components/SignUpData";

const SignUp = () => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-signup"
                heroImg={HeroImg}
                title="Sign Up"
                text="Register for best experience"
                url="/"
                btnClass="hide"
            />
            <SignUpData />
            <Footer />
        </>
    )
}

export default SignUp;