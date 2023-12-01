//Funciones

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
};

function crearTabla() {
  let principioTabla = `<table class="table table-striped table-dark" id="tablaCarrito">
<thead>
  <tr class="colorTituloTablas" >
    <th scope="col">Id</th>
    <th scope="col">Figura</th>
    <th scope="col">Fabricante</th>
    <th scope="col">Cantidad</th>
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
  for (elemento of figurasCarrito) {
    let fila = `
    <tr>
        <td>${elemento.id}</td>
        <td>${elemento.nombre}</td>
        <td>${elemento.fabricante}</td>
        <td>${elemento.cantidad}</td>
        <td>$${elemento.precio * elemento.cantidad}</td>
    </tr>`;
    filas += fila;
  }
  let tabla = principioTabla + filas + finalTabla;
  contenedorTabla.innerHTML = tabla;
}

//Programa

actualizarIconoCarrito();
let listaFiguras = JSON.parse(localStorage.getItem("listaFiguras"));
let contenedorTabla = document.getElementById("main-carrito");
let idsCarrito = localStorage.getItem("idCarrito");
let idsCarritoLista = [];
let figurasCarrito = [];
if (idsCarrito) {
  idsCarritoLista = idsCarrito.split(",");
  for (elemento of idsCarritoLista) {
    let figura = listaFiguras.find(objeto => objeto.id == elemento);
    let figuraCarrito = figurasCarrito.find(objeto => objeto.id == figura.id);
    if (figuraCarrito != undefined) {
      let indice = figurasCarrito.findIndex(objeto => objeto.id == figuraCarrito.id);
      figurasCarrito[indice].cantidad += 1;
      console.log(figurasCarrito[indice].cantidad);
    }
    else {
      figura.cantidad = 1
      figurasCarrito.push(figura);
    }
  }
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

let botonVaciarCarrito = document.createElement("button");
botonVaciarCarrito.classList = "btn btn-warning botonCarritoStyle";
botonVaciarCarrito.innerHTML = "Vaciar carrito";
botonVaciarCarrito.addEventListener("click", function () {
  localStorage.clear();
  let tabla = document.getElementById("tablaCarrito");
  if (tabla != null) {
    tabla.remove();
  }
  actualizarIconoCarrito();
})
contenedorTabla.appendChild(botonVaciarCarrito);