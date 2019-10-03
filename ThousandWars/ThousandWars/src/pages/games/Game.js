import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Menu from '../menu';
import './game.scss';


import { SubRoutes } from './../../components/subRoutes';
import theUser from '../../temporaire.js';

// import 'bootstrap/scss/bootstrap.scss';

const Game = ({routes, match}) => (
	<Container className="bodyBg">
		<Row>
            <Col xs={3} className="Menu" >
				<Menu className="menu" />
				{
					routes.map((route, index) => <SubRoutes key={index} {...route}/>)
				}
          	</Col>


			<Col xs={9}>
				<Row className="top-bar">
					<Col xs={3}>
						<p>Paramètres</p>
					</Col>

					<Col xs={2}>
						<p>Guilde</p> 
					</Col>

					<Col xs={2}>
						<p>Score</p>
						<div className="scoreBar">
							<div id="userScore"></div>
							{theUser.getScore()}
						</div>
					</Col>

					<Col xs={5}>

						<p>Ressources</p>

						<Row className="ressources">
							<Col xs={4}>
								<img src={ require("../../img/goldlogo.png")} alt="gold" className="ressource_icon"></img>
								<p className="ressource_quantity">{theUser.getGoldWallet()}</p>								 
							</Col>

							<Col xs={4} className="wood">
							<img src={ require("../../img/woodlogo.png")} alt="wood" className="ressource_icon"></img>
							<p className="ressource_quantity">{theUser.getWoodWallet()}</p>							
							</Col>

							<Col xs={4} className="stone">
							<img src={ require("../../img/stonelogo.png")} alt="stone"className="ressource_icon"></img>
							<p className="ressource_quantity">{theUser.getStoneWallet()}</p>
							</Col>
							
						</Row>               
					</Col>
				</Row>

				<div className="plateau">
					<h1>Game</h1>
					<p>Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					.Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					Ipsum dolor dolorem consectetur est velit fugiat.
					</p>
				</div>
          </Col>
		</Row>
			
	</Container>
)


export default Game;