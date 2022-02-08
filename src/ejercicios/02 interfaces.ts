let habilidades:string[]=['bailar','cantar','leer']
// console.table(habilidades)
interface Personaje{
    nombre:string
    edad:number
    habilidades:string[]
    pueblo?:string
}

let personaje:Personaje={
    nombre:'chaplin',
    edad:1,
    habilidades
}
console.log(personaje)
