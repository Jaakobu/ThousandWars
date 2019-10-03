class Building{
    protected id: number;
    protected name: String;
    protected description: String;
    protected score: number;
    protected level: number;
    protected farmingSpeed: number;
    protected farmingRecolt: String;
    protected prices = new Array();
    protected type: String;
    
    constructor(id:number, name:String, description:String, score:number, level:number, farmingSpeed: number, farmingRecolt: String, type: String){
        this.id=id;
        this.name=name;
        this.description=description;
        this.score=score;
        this.level=level;
        this.farmingSpeed=farmingSpeed;
        this.farmingRecolt=farmingRecolt;
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
   
}

export default Building;