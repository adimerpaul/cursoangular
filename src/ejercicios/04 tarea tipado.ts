interface SuperHeroe {
    nombre:string
    edad:number
    direccion: Direccion
}
interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}

const superHeroe:SuperHeroe={
    nombre:'Spiderman',
    edad:18,
    direccion:{
        calle:'calle x',
        pais:'ney you',
        ciudad:'neoi',
    }
}
console.log(superHeroe)
