import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Troop from "../../../components/troop";
import Building from "../../../components/building";
import './troops.scss';

class FlyPage extends Component {
    constructor(){
        super();
    }

    state = {
        fly: [
            {obj: new Troop(15, "War raven", "Yes, it hurts.", 110, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Fly")},
        ]
    }
    
    render(){
        const lstFly = this.state.fly.map(fly => (
            <Fly
            fly={fly}
            />
        ))
        return(
            <div>
                <h3>Fly</h3>
                <ul>
                    {lstFly}
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

export default FlyPage;

class Fly extends Component{
    render(){
        const myObject = this.props.fly.obj;
        return(
            <li>
                <p>
                    <h5>{myObject.getName()}</h5>
                    <h5 className="descTroop">{myObject.getDescription()}</h5>
                    <h5>Score : {myObject.getScore()}</h5><br/>
                </p>
            </li>
        )
    }
}

/*const Fly = () =>{
    return(
        <div>
            <h3>Fly</h3>
            <ul>
                <li>
                    <Link to={`${constRoutes.GAME}${constRoutes.TROOPS}`} >
                        Back to troops
                    </Link>
                </li>
            </ul>
        </div>
    )
}*/