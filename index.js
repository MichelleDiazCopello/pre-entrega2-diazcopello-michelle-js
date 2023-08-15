const fecha = new Date()
console.log(fecha)

class Productos {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    verProductosEnConsola () {
        console.log (`El producto ${this.nombre} vale ${this.precio}`)
    }
}

const carritoDeProductos = []

const productosSeleccionados = () => {
    const nombreDelProducto = prompt ("Ingrese el producto que desea agregar al carrito.");
    const preciodelProducto = prompt ("Ingrese el precio del producto.");
    carritoDeProductos.push ( 
        new Productos (
        {nombreDelProducto},
        {preciodelProducto},
        )
    )
}

productosSeleccionados ();
productosSeleccionados ();

console.log (carritoDeProductos)
