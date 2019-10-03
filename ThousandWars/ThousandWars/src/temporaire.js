import Building from "./components/building";
import Troop from "./components/troop";
import User from './components/user';

let barrack = new Building(9, "Barrack", "Create your troops", 1000, 1, null, null, "troop creation");
/*let lancer = new Troop( 0,  "Lancer",  "Light ground unit",  120, barrack, "melee");
let slinger = new Troop( 1,  "Slinger",  "Ranged unit",  90, barrack, "range");
let champion = new Troop( 2,  "Champion",  "Elite unit",  200, barrack, "melee");
let berserker = new Troop( 3,  "Berserker",  "Light ground unit",  420, barrack, "melee");
let crossbowman = new Troop( 4,  "Crossbowman",  "Ranged unit",  320, barrack, "range");
let knight = new Troop( 5,  "Knight",  "Elite unit",  700, barrack, "melee");
let strikeTeam = new Troop( 6,  "Strike Team",  "Light ground unit",  4780, barrack, "melee");
let antiAerianVehicle = new Troop( 7,  "Anti Aerian Vehicle",  "Ranged unit",  4160, barrack, "range");
let rocketLauncher = new Troop( 8,  "Rocket Launcher",  "Elite unit",  10000, barrack, "melee");


const lstTroop = [];

lstTroop.push(lancer);
lstTroop.push(slinger);
lstTroop.push(champion);
lstTroop.push(berserker);
lstTroop.push(crossbowman);
lstTroop.push(knight);
lstTroop.push(strikeTeam);
lstTroop.push(antiAerianVehicle);
lstTroop.push(rocketLauncher);*/

const theUser=new User(0, "thousand-wars@idle.game", "123", "root", 52, 43, 86);
theUser.takeScore(42);
theUser.takeScore(barrack.getScore());
theUser.takeWoodWallet(174);
theUser.takeStoneWallet(242);
theUser.takeGoldWallet(79);

export default theUser;