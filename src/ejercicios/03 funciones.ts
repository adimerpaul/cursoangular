function sumar(a:number,b:number):number{
    return a+b
}

const  sumarflecha=(a:number,b:number):number=>{
    return a+b
}
function multiplicar(numero:number,numero2?:number,base:number=2):number{
    return numero*base
}

// console.log(multiplicar(5))
interface Personajeotro{
    nombre:string
    edad:number
    mostrarHP:()=>void
}

function curar(persona:Personajeotro,curarX:number):void{
    persona.edad=persona.edad+curarX
}

const personajeotro:Personajeotro={
    nombre:'chaplin',
    edad:95,
    mostrarHP(){
        console.log('Mostrar edad: ', this.edad)
    }
}
// console.log(personajeotro)

curar(personajeotro,5)
personajeotro.mostrarHP()
