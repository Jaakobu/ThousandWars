import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Building from "../../../components/building";

class CityHallPage extends Component {
    constructor(){
        super();
    }

    state = {
        cityHall: [
            {obj: new Building(10, "Town House", "Main city building",10000, 1, 0, 0,"City Hall")},
        ]
    }
    
    render(){
        const lstCityHall = this.state.cityHall.map(cityHall => (
            <CityHall
                cityHall={cityHall}
            />
        ))
        return(
            <div>
                <h3>City Hall</h3>
                
                <ul>
                    {lstCityHall}
                    <li>
                        <Link to={`${constRoutes.GAME}${constRoutes.BUILDINGS}`} >
                            <h5>Back to buildings</h5>
                        </Link>
                    </li>
                </ul>
            </div>
        )

    }    
}

export default CityHallPage;

class CityHall extends Component{
    render(){
        const myObject = this.props.cityHall.obj;
        return(
            <li>
                <p>
                    <h5>{myObject.getName()}</h5>
                    <h5>{myObject.getDescription()}</h5>
                    <h5>Score : {myObject.getScore()}</h5><br/>
                </p>
            </li>
        )
    }
}

/*const CityHall = () =>{
    return(
        <div>
            <h3>CityHall</h3>
            <ul>
                <li>
                    <Link to={`${constRoutes.GAME}${constRoutes.BUILDINGS}`} >
                        Back to buildings
                    </Link>
                </li>
            </ul>
        </div>
    )
}*/