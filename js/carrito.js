
function actualizarIconoCarrito() {
  let linkCarrito = document.getElementById("carritoIcon");
  let elementosCarrito = localStorage.getItem("idCarrito");
  if (elementosCarrito) {
      let lista = elementosCarrito.split(",");
      linkCarrito.innerHTML = linkCarrito.innerHTML + `<span id="badge" class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
  ${lista.length}
  <span class="visually-hidden">unread messages</span>
</span>`;
  }
  else {
    let indicador = document.getElementById("badge");
    if (indicador != null) {
      indicador.remove();
    }
  }
}

actualizarIconoCarrito();


let listaFiguras=JSON.parse(localStorage.getItem("listaFiguras"));

let contenedorTabla = document.getElementById("main-carrito");

let idsCarrito = localStorage.getItem("idCarrito");
let idsCarritoLista = []
if (idsCarrito) {
    idsCarritoLista=idsCarrito.split(",");
    crearTabla();

}
else {
  Swal.fire({
    icon: "warning",
    iconColor: "#ffc900",
    title: "No tiene productos en su carrito",
    text: "Agregue productos para seguir comprando!",
    color: "#ffd900",
    background: "#1f2124",
    confirmButtonColor: "black",
    confirmButtonText: "OK",
    backdrop: "rgba(0,0,0,0.8)",
  });
}
console.log(listaFiguras);

function crearTabla(){
    let principioTabla = `<table class="table table-striped table-dark" id="tablaCarrito">
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
    contenedorTabla.innerHTML = tabla;
}

let botonVaciarCarrito = document.createElement("button");
botonVaciarCarrito.classList="btn btn-warning botonCarritoStyle";
botonVaciarCarrito.innerHTML="Vaciar carrito";
botonVaciarCarrito.addEventListener("click", function(){
    localStorage.clear();
    let tabla = document.getElementById("tablaCarrito");
    if (tabla != null) {
      tabla.remove();
    }
   
    actualizarIconoCarrito(); 
})
contenedorTabla.appendChild(botonVaciarCarrito);