import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import './Navigation';
import * as routes from "./constant/routes"
import Game from './pages/games/Game';
import { Switch, Route } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App: React.FC = () => {

  return(
    <Switch>
    <Route exact path={routes.SIGN_IN} component={SignIn}></Route>
    <Route exact path={routes.SIGN_UP} component={SignUp}></Route>
    <Route exact path={routes.GAME} component={Game}></Route>
    <Route exact path={routes.RESET_PASSWORD} component={ResetPassword}></Route>
    </Switch>
  )
}

export default App;
