
    let linkCarrito = document.getElementById("carritoIcon");
    let elementosCarrito = localStorage.getItem("idCarrito");
    if (elementosCarrito) {
        let lista = elementosCarrito.split(",");
        linkCarrito.innerHTML = linkCarrito.innerHTML + `<span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
    ${lista.length}
    <span class="visually-hidden">unread messages</span>
  </span>`;
    }

