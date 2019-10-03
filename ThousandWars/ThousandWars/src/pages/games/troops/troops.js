import React from 'react';
import { Link } from 'react-router-dom';
import { SubRoutes} from './../../../components/subRoutes';
import * as constRoutes from "../../../constant/routes";
import '../game.scss';


const Troops = ({routes, match}) => {

    return(
        <div className='troops'>
            <h1 className="menuButton">troops</h1>
            <ul>
                <li>
                    <Link to={`${match.url}${constRoutes.MELEE}`}>
                        MELEE
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}${constRoutes.RANGE}`}>
                        RANGE
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}${constRoutes.FLY}`}>
                        FLY
                    </Link>
                </li>
            </ul>
		{
			routes.map((route, index) => <SubRoutes key={index} {...route}/>)
		}
        </div>
    )
};

export default Troops;