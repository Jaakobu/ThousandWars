import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Building from "../../../components/building";
import './buildings.scss'

class DefPage extends Component {
    constructor(){
        super();
    }

    state = {
        def: [
            {obj: new Building(14, "Wood tower", "A simple wood tower. Simple but effective.", 200, 1, 0, null, "Def")},
        ]
    }
    
    render(){
        const lstdef = this.state.def.map(def => (
            <Def
                def={def}
            />
        ))
        return(
            <div>
                <h3>Defense buildings</h3>
                
                <ul>
                    {lstdef}
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

export default DefPage;

class Def extends Component{
    render(){
        const myObject = this.props.def.obj;
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

/*const Def = () =>{
    return(
        <div>
            <h3>Def</h3>
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