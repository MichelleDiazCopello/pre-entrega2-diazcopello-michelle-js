class Productos {
    constructor (nombre, precio, cantidad, categoria,) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

const carritoDeProductos = []

const productosSeleccionados = () => {
    let nombreDelProducto = prompt ("Ingrese el producto que desea agregar al carrito.");
    let preciodelProducto = prompt ("Ingrese el precio del producto.");
    let cantidadDisponible = prompt ("Ingrese la cantidad disponibles de este producto.");
    let categoriaDelProducto = prompt ("Ingrese la categoria a la que corresponde el producto.");
    carritoDeProductos.push (new Productos (productosSeleccionados.nombreDelProducto, productosSeleccionados.preciodelProducto, productosSeleccionados.cantidadDisponible, productosSeleccionados.categoriaDelProducto));
}

productosSeleccionados ();

console.log (carritoDeProductos)