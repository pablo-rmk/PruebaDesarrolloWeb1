/* Agragar Producto */
document.getElementById("btnMas").addEventListener("click", function() {
    var cantidadInput = document.getElementById("cantidadInput");
    cantidadInput.value = parseInt(cantidadInput.value) + 1;
});
/* Restar Producto */
document.getElementById("btnMenos").addEventListener("click", function() {
    var cantidadInput = document.getElementById("cantidadInput");
    cantidadInput.value = Math.max(parseInt(cantidadInput.value) - 1, 1);
});
// /* Mensaje Producto */
// function añadidoCarrito() {
//     var titulo = "Producto añadido al carrito";
//     var mensaje = "¡El producto ha sido añadido con éxito!";
//     alert(titulo + "\n\n" + mensaje);
// }