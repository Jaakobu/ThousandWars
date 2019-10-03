import React from 'react';
import './../App.css';
import * as constRoutes from "../constant/routes";
import Game from '../pages/games/Game';
import { Switch } from 'react-router';
// import { Switch, Route } from 'react-router';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import { SubRoutes } from './subRoutes';
// import subRoutes from './subRoutes';
// import { Navigation } from '../Navigation';
// import Navigation from '../Navigation';
import Buildings from '../pages/games/buildings/buildings';
import Barrack from '../pages/games/buildings/barrack';
import CityHall from '../pages/games/buildings/cityHall';
import Def from '../pages/games/buildings/def';
import Farmer from '../pages/games/buildings/farmer';
import Troops from '../pages/games/troops/troops';
import Fly from '../pages/games/troops/fly';
import Melee from '../pages/games/troops/melee';
import Range from '../pages/games/troops/range';

/*
const routes = [
    {
        path: "/signIn",
        component: SignIn,
    },
    {
        path: "/signUp",
        component: SignUp,
    },
    {
        path: "/game",
        component: Game,
    },
    {
        path: "/resetPassword",
        component: ResetPassword,
    }
];
*/

const routes = [
    {
        path: constRoutes.SIGN_IN,
        component: SignIn,
    },
    {
        path: constRoutes.SIGN_UP,
        component: SignUp,
    },
    {
        path: constRoutes.GAME,
        component: Game,
        routes: [
            {
                path: `${constRoutes.GAME}${constRoutes.BUILDINGS}`,
                component: Buildings,
                routes: [
                    {
                        path: `${constRoutes.GAME}${constRoutes.BUILDINGS}${constRoutes.BARRACK}`,
                        component: Barrack,
                    },
                    {
                        path: `${constRoutes.GAME}${constRoutes.BUILDINGS}${constRoutes.CITYHALL}`,
                        component: CityHall,
                    },
                    {
                        path: `${constRoutes.GAME}${constRoutes.BUILDINGS}${constRoutes.DEF}`,
                        component: Def,
                    },
                    {
                        path: `${constRoutes.GAME}${constRoutes.BUILDINGS}${constRoutes.FARMER}`,
                        component: Farmer,
                    },
                ]
            },
            {
                path: `${constRoutes.GAME}${constRoutes.TROOPS}`,
                component: Troops,
                routes: [
                    {
                        path: `${constRoutes.GAME}${constRoutes.TROOPS}${constRoutes.FLY}`,
                        component: Fly,
                    },
                    {
                        path: `${constRoutes.GAME}${constRoutes.TROOPS}${constRoutes.MELEE}`,
                        component: Melee,
                    },
                    {
                        path: `${constRoutes.GAME}${constRoutes.TROOPS}${constRoutes.RANGE}`,
                        component: Range,
                    },
                ]
            },
        ]
    },
    {
        path: constRoutes.RESET_PASSWORD,
        component: ResetPassword,
    }

];

export const Routes = (props) => {
    return (
        <div>
            {/* <Navigation /> */}
            <Switch>
                {
                    routes.map(
                        (route, index) => <SubRoutes key={index} {...route}/>
                    )
                }
            </Switch>
        </div>
    )
}

