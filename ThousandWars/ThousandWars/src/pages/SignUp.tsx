import React from 'react';
// import { Main } from '../Main';
import { Container, FormGroup } from 'react-bootstrap';
import { Navigation } from '../Navigation'; 

const SignUp = () => (
	<Container className="body">
		{/* <Main /> */}
		<div className="banner_title">
      		<img src={ require('../img/banner_TW.png') } alt="Thousand_Wars"/>
    	</div>
		<Navigation />		
		<FormGroup className='signup'>
		<h1>Sign Up</h1>
		<p>You can reach me via email</p>
		<h3>Connexion</h3>
				
		<input type="text" className="form-control" id="username" placeholder="Username"/>
		<input type="email" className="form-control" id="email" placeholder="Email"/>
		<input type="password" className="form-control" id="password" placeholder="Password"/>
		<input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
		<input type="submit" className="btn okButton" value="OK"/>

		</FormGroup>
	</Container>
	
)

export default SignUp;