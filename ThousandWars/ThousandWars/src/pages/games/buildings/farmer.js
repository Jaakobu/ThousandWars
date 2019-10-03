import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Building from "../../../components/building";

class FarmerPage extends Component {
    constructor(){
        super();
    }

    state = {
        farmer: [
            {obj: new Building(11, "Lumbermill", "Wood production building",22, 1, 10, 1000,"Farmer")},
            {obj: new Building(12, "Gold quarry", "Gold production building",22, 1, 10, 1000,"Farmer")},
            {obj: new Building(13, "Stone quarry", "Stone production building",22, 1, 10, 1000,"Farmer")},
        ]
    }
    
    render(){
        const lstfarmer = this.state.farmer.map(farmer => (
            <Farmer
                farmer={farmer}
            />
        ))
        return(
            <div>
                <h3>Farmer</h3>
                
                <ul>
                    {lstfarmer}
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

export default FarmerPage;

class Farmer extends Component{
    render(){
        const myObject = this.props.farmer.obj;
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

/*const Farmer = () =>{
    return(
        <div>
            <h3>Farmer</h3>
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