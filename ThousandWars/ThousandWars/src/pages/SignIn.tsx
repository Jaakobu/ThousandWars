import React from 'react';
// import { Main } from '../Main';
import { Container, FormGroup } from 'react-bootstrap';
import { Navigation } from '../Navigation'


const SignIn = () => (


	<Container className="body">
		{/* <Main /> */}
		<div className="banner_title">
      		<img src={ require('../img/banner_TW.png') } alt="Thousand_Wars"/>
    	</div>
		<Navigation />
		<FormGroup className='signIn'>
			<h1>Sign In</h1>
			<p>Welcome to the world of ThousandWars</p>
			<h3>Connexion</h3>
		
			<input type="email" className="form-control" id="email" placeholder="Email"/>
			<input type="password" className="form-control" id="password" placeholder="Password"/>
			<input type="submit" className="btn okButton" value="OK"/>
			<input type="submit" className="btn okButton" value="Forgotten Password?"/>
			<input type="checkbox" value="Remember"/>Remember me
			
		</FormGroup>
	</Container>
	
	
);

export default SignIn;