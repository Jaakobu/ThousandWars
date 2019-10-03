import React from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../constant/routes";
import './games/game.scss'

const Menu = () =>{

    return(
        <nav>
            <h1 className="menuButton">Menu</h1>
            <ul>
                <li>
                    <Link to={`${constRoutes.GAME}${constRoutes.BUILDINGS}`}>
                        Buildings
                    </Link>
                </li>
                <li>
                    <Link to={`${constRoutes.GAME}${constRoutes.TROOPS}`}>
                        Troops
                    </Link>
                </li>
                {/* inventory */}
                {/* parameters */}
            </ul>
		{/* {
			routes.map((route, index) => <SubRoutes key={index} {...route}/>)
		} */}
        </nav>
    )
};

export default Menu;