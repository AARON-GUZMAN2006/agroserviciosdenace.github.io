
document.addEventListener("DOMContentLoaded", function() {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    const listaProductos = document.getElementById("lista-productos");
    const totalSpan = document.getElementById("total");

    let carrito = [];
    let total = 0;

    botonesAgregar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            const producto = boton.parentElement;
            const nombre = producto.querySelector("p:nth-child(2)").textContent;
            const precio = parseFloat(producto.querySelector("p:nth-child(3)").textContent.slice(1));

            carrito.push({ nombre, precio });
            total += precio;

            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        listaProductos.innerHTML = "";

        carrito.forEach(function(item) {
            const nuevoProducto = document.createElement("li");
            nuevoProducto.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)}`;
            listaProductos.appendChild(nuevoProducto);
        });

        totalSpan.textContent = `$${total.toFixed(2)}`;
    }
});
// JavaScript Document