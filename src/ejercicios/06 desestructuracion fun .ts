export interface Producto{
    desc:string;
    precio:number
}


const telefono:Producto={
    desc:'Nokia',
    precio:150
}
const tablet:Producto={
    desc:'ipad',
    precio:1500
}
export function calcularIVA(productos:Producto[]):[number,number]{
    let total=0
    productos.forEach(d=>{
        total+=d.precio
    })
    return [total,total*0.13]
}

const articulos=[telefono,tablet]

const [total,iva]=calcularIVA(articulos)

// console.log(iva)
