import React from 'react';
import HeroStyles from "./HeroStyles.css";
import SignUpStyles from "./SignUpStyles.css";

const SignUpData = () => {
    return(
        <div className='hero-signup'>
            {/* <h1>Register Here!</h1> */}
            <form>
                <input placeholder='Enter your name' type='text'/>
                <input placeholder='Enter your email'type='email'/>
                <input placeholder='Enter Password' type='password'/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpData;
