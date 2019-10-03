import React from 'react';
import { Link } from 'react-router-dom';
import { SubRoutes} from './../../../components/subRoutes';
import * as constRoutes from "../../../constant/routes";
import '../game.scss';

const Buildings = ({routes, match}) => {
    console.log("routes de buildings", routes);
    console.log("match de buildings", match);
    return(
        <div className='buildings'>
            <h1 className="menuButton">Buildings</h1>
            <ul>
                <li>
                    <Link to={`${match.url}${constRoutes.CITYHALL}`}>
                        CITYHALL
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}${constRoutes.FARMER}`}>
                        FARMER
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}${constRoutes.BARRACK}`}>
                        BARRACK
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}${constRoutes.DEF}`}>
                        DEF
                    </Link>
                </li>
            </ul>
		{
			routes.map((route, index) => <SubRoutes key={index} {...route}/>)
		}
        </div>
    )
};

export default Buildings;