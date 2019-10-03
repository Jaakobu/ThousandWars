import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Building from "../../../components/building";
import './buildings.scss';

class BarracksPage extends Component {
    constructor(){
        super();
        //this.barrackObj = new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "troop creation");
    }

    state = {
        barracks: [
            {obj: new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks")},
            /*{ id: 0, name: "Vicente", description: "BDD", score: 2},
            { id: 1, name: "Jara", description: "Master", score: 2},
            { id: 2, name: "leNom", description: "laDescription", score: 2},*/
        ]
    }
    
    render(){
        const lstBarracks = this.state.barracks.map(barracks => (
            <Barracks
                barracks={barracks}
            />
        ))
        //const Barrack = () => { 
        //}
        return(
            <div>
                <h3>Barrack</h3>
                
                <ul>
                    {lstBarracks}
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

export default BarracksPage;

class Barracks extends Component{
    render(){
        const myObject = this.props.barracks.obj;
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