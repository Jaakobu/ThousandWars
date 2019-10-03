import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as constRoutes from "../../../constant/routes";

import Troop from "../../../components/troop";
import Building from "../../../components/building";
import './troops.scss';

class RangePage extends Component {
    constructor(){
        super();
    }

    state = {
        range: [
            {obj: new Troop(1, "Slinger", "Ranged unit", 90, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Range")},
            {obj: new Troop(4, "Crossbowman", "Ranged unit", 320, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Range")},
            {obj: new Troop(7, "Anti Aerian Vehicle", "Ranged unit", 4160, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Range")},
            {obj: new Troop(8, "Rocket Launcher", "Elite unit", 10000, new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "Barracks"), "Range")},
        ]
    }
    
    render(){
        const lstRange = this.state.range.map(range => (
            <Range
            range={range}
            />
        ))
        return(
            <div>
                <h3>Range</h3>
                <ul>
                    {lstRange}
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

export default RangePage;

class Range extends Component{
    render(){
        const myObject = this.props.range.obj;
        return(
            <li>
                <p>
                    <h5>{myObject.getName()}</h5>
                    <h5>{myObject.getDescription()}</h5>
                    <h5>Score : {myObject.getScore()}</h5><br></br>
                </p>
            </li>
        )
    }
}

// const Range = () =>{
//     return(
//         <div>
//             <h3>Range</h3>
//             <ul>
//                 <li>
//                     <Link to={`${constRoutes.GAME}${constRoutes.TROOPS}`} >
//                         Back to troops
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     )
// }