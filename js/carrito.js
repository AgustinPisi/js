
let listaFiguras=JSON.parse(localStorage.getItem("listaFiguras"));

let idsCarrito = localStorage.getItem("idCarrito");
let idsCarritoLista = []
if (idsCarrito) {
    idsCarritoLista=idsCarrito.split(",");
    crearTabla();

}
else {
 alert("No hay elementos en tu carrito.")
}
console.log(listaFiguras);

function crearTabla(){
    let principioTabla = `<table class="table table-striped table-dark">
<thead>
  <tr class="colorTituloTablas" >
    <th scope="col">Id</th>
    <th scope="col">Figura</th>
    <th scope="col">Fabricante</th>
    <th scope="col">Precio</th>
  </tr>
</thead>
<tbody>
  `;

  let finalTabla = `
</tbody>
</table>`;

    let filas = "";
    console.log(idsCarritoLista);
    for (elemento of idsCarritoLista){
        let figuraCarrito = listaFiguras.filter(objeto => objeto.id == elemento);
        console.log(figuraCarrito);
        let fila = `
    <tr>
        <td>${figuraCarrito[0].id}</td>
        <td>${figuraCarrito[0].nombre}</td>
        <td>${figuraCarrito[0].fabricante}</td>
        <td>$${figuraCarrito[0].precio}</td>
    </tr>`;
    filas += fila;
    }
    let tabla = principioTabla + filas + finalTabla;
    let contenedorTabla = document.getElementById("main-carrito");
    contenedorTabla.innerHTML = tabla;
}
