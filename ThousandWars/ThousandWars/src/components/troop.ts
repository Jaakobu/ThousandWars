import Building from "./building";


class Troop{
    protected id: number;
    protected name: String;
    protected description: String;
    protected score: number;
    protected barracks: Building;
    protected prices = new Array();
    protected type: String;

    constructor(id: number, name: String, description: String, score: number, barracks: Building, type: String){
        this.id = id;
        this.name = name;
        this.description = description;
        this.score = score;
        this.barracks = barracks;
        this.type = type;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getScore(){
        return this.score;
    }

    getBarracks(){
        return this.barracks;
    }
}

export default Troop;