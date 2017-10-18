interface INombrable 
{
    nombre: string;
    saludar() : void;
}

class Persona implements INombrable 
{
    public nombre: string;

    saludar () :string 
    {
        return 'hola,soy' +this.nombre;
    }
} 

interface IRaza {
    raza: string;
}
 let obj = { raza: 'Beagle'};