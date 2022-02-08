interface Detalles {
    autor:string
    anio:number
}

interface Productor {
    volumen: number
    segundo: number
    cancion: string
    detalles:Detalles
}

const reproductor:Productor={
    volumen:96,
    segundo:36,
    cancion:'botella',
    detalles:{
        autor:'cristian nogales',
        anio:2022
    }
}

const {volumen,segundo,cancion,detalles} =reproductor
const {autor} = detalles
console.log(autor)
