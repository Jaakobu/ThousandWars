import React from 'react';
import { Container, FormGroup } from 'react-bootstrap';
// import { Main } from '../Main';
import { Navigation } from '../Navigation'

const ResetPassword = () => (
	<Container className="body">
		{/* <Main />  */}
		<div className="banner_title">
      		<img src={ require('../img/banner_TW.png') } alt="Thousand_Wars"/>
    	</div>
		<Navigation />
		<FormGroup className='resetPassword'>
			<h1>Reset Password</h1>
			<p>You will recieve a link to reset your password by Email.</p>

			<input type="email" className="form-control" id="email" placeholder="Please, Enter your Email"/>
			<input type="submit" className="btn okButton" value="OK"/>
		</FormGroup>
	</Container>
);

export default ResetPassword;