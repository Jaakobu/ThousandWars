class Based{
    protected idUser: number;
    protected idBuilding: number;
    protected x: number;
    protected y: number;

    constructor(idUser: number, idBuilding: number, x: number, y: number){
        this.idUser = idUser;
        this.idBuilding = idBuilding;
        this.x = x;
        this.y = y;
    }
}
export default Based;