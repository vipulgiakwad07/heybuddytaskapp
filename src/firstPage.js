import React from 'react';
import './App.css'; 
import image1 from "./images/twetter.png"
import { Button } from '@mui/material';
import twlogo from './images/twitterlogo.png'
import ggl from './images/icons8-google-48.png';
import appl from './images/icons8-apple-48.png'
import { useNavigate } from "react-router-dom";
// import GoogleIcon from '@mui/icons-material/Google';


export default function FirstPage() {
    const navigate = useNavigate();
  
    const handleSignUp=()=>{
    } 
    return (
        <div className="grid-container">
          <div className="grid-item">
              <img src={image1} alt="Your Image" className="full-width" />
          </div>

          <div className="grid-item">
          {/* <button>Sign up with Google</button>
          {/* <Button variant="outlined" startIcon={<GoogleIcon />}>
          Sign up with Google
</Button> */} 
         <img className='tw-logo' src={twlogo}></img>
         <h1>Happening now</h1>
        <h2>Join twetter today</h2>
         <div className='grid-container1' > 
      <button className="sign-up-button" >
      <span className='btnlogo'><img src={ggl}></img></span>  Sign up with Google
      </button>
      <button className="sign-up-button" onClick={() => handleSignUp('Apple')}>
      <span className='btnlogo'><img src={appl}></img></span> Sign up with Apple
      </button>
      <button className="sign-up-button" onClick={() => navigate("/signIn")}>
        Sign up with phone or email
      </button>
      <p>By singing up you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including Cookie <span>Use</span>.</p>
          </div>
      </div> 
     
        </div>
      );
    }
