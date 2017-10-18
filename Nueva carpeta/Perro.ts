export abstract class Perro 
{   
    public  patas: number = 4;
    constructor( public nombre: string)
    {

    }
    public ladrar () : string 
    {
        return 'WOW';
    }
}