import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Troop from "../../../components/troop";
import Building from "../../../components/building";
import './troops.scss';

class MeleePage extends Component {
    constructor(){
        super();
    }

    state = {
        melee: [
            {obj: new Troop(0, "Lancer", "Light ground unit", 120, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Melee")},
            {obj: new Troop(2, "Champion", "Elite unit", 200, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Melee")},
            {obj: new Troop(3, "Berserker", "Light ground unit", 420, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Melee")},
            {obj: new Troop(5, "Knight", "Elite unit", 700, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Melee")},
            {obj: new Troop(6, "Strike Team", "Light ground unit", 4780, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Melee")},
        ]
    }
    
    render(){
        const lstMelee = this.state.melee.map(melee => (
            <Melee
            melee={melee}
            />
        ))
        return(
            <div>
                <h3>Melee</h3>
                <ul>
                    {lstMelee}
                    <li>
                        <Link to={`${constRoutes.GAME}${constRoutes.TROOPS}`} >
                            Back to troops
                        </Link>
                    </li>
                </ul>
            </div>
        )

    }    
}

export default MeleePage;

class Melee extends Component{
    render(){
        const myObject = this.props.melee.obj;
        console.log("**************************************"+myObject.getName());
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

/*const Melee = () =>{
    return(
        <div>
            <h3>Melee</h3>
            <ul>
                {lstBarracks}
                <li>
                    <Link to={`${constRoutes.GAME}${constRoutes.TROOPS}`} >
                        Back to troops
                    </Link>
                </li>
            </ul>
        </div>
    )
}*/