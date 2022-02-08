import {Producto,calcularIVA} from "./ejercicios/06 desestructuracion fun ";
const carritoCompras:Producto[]=[
    {desc:'Telefono 1',precio:100},
    {desc:'Telefono 2',precio:150},
]
const [total,iva]=calcularIVA(carritoCompras)
console.log('Total:',total)
console.log('Iva:',iva)
