import Based from "./based";

/*interface User{
}*/

class User{
    protected id: number;
    protected email: String;
    protected pass: String;
    protected pseudo: String;
    protected Armee = new Array();
    protected lstBased: Array<Based>[];
    protected woodWallet: number;
    protected stoneWallet: number;
    protected goldWallet: number;
    protected scoreUser: number;

    constructor(id: number, email: String, pass: String, pseudo: String, woodWallet: number, stoneWallet: number, goldWallet: number){
        this.id = id;
        this.email = email;
        this.pass = pass;
        this.pseudo = pseudo;
        this.woodWallet = woodWallet;
        this.stoneWallet = stoneWallet;
        this.goldWallet = goldWallet;
        this.scoreUser = 0;
        this.lstBased = new Array();
    }

    public setArmee(){
        // Requête SQL pour set dans le tableau le score de l'armée
    }

    public setLstBased(){
        // Requête SQL pour set dans le tableau lstBased la liste des
        // bâtiments par emplacement du joueur
    }

    public getWoodWallet(){
        return this.woodWallet;
    }

    public getStoneWallet(){
        return this.stoneWallet;
    }

    public getGoldWallet(){
        return this.goldWallet;
    }

    public getScore(){
        return this.scoreUser;
    }

    public takeScore(score: number){
        this.scoreUser+=score;
    }

    public takeWoodWallet(nb: number){
        this.woodWallet+=nb;
    }

    public takeStoneWallet(nb: number){
        this.stoneWallet+=nb;
    }

    public takeGoldWallet(nb: number){
        this.goldWallet+=nb;
    }
}

export default User;