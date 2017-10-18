class Gato
{
    constructor(raza)
    {
        this.raza = raza;
    }
    maullar ()
    {
     return 'miau';
    }

}

class Chipmunk extends Gato
{
   constructor(nombre)
   {
       super('Gato')
       {
           this.nombre = nombre;
            
       }

   }
   maullar()
   {
       return 'miau2';
   }
}
let mish = new Chipmunk ('mishs') ;
console.log(mish.maullar());