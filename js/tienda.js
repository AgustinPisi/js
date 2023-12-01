//  Objetos

class Figura {
    constructor(id, nombre, fabricante, precio, imagenURL, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.fabricante = fabricante
        this.precio = precio;
        this.imagenURL = imagenURL;
        this.descripcion = descripcion;
    }
};


//  Funciones 

function agregarAlCarrito(idFigura) {
    let carrito = localStorage.getItem("idCarrito");
    if (carrito) {
        carrito = carrito.split(','); 
        carrito.push(idFigura);
        localStorage.setItem("idCarrito", carrito.join(',')); 
    } else {
        localStorage.setItem("idCarrito", idFigura);
    }
    
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: "310px",
        color: "#ffd900",
        background: "#1f2124",
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Agregado al carrito!"
      });

      actualizarIconoCarrito();
     
};

function actualizarIconoCarrito() {
    let linkCarrito = document.getElementById("carritoIcon");
    let elementosCarrito = localStorage.getItem("idCarrito");
    if (elementosCarrito) {
        let lista = elementosCarrito.split(",");
        linkCarrito.innerHTML = linkCarrito.innerHTML + `<span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
    ${lista.length}
    <span class="visually-hidden">unread messages</span>
  </span>`;
    }
};



//  Inicio del programa



actualizarIconoCarrito();

let tarjetas = "";

const listaFiguras = [];


listaFiguras.push(new Figura("F01","Ultimate Jason Vorhees 6 FT13","NECA",35, "https://d22fxaf9t8d39k.cloudfront.net/2c4bd9ecf84951f89569fe408ee58ec31a2295d5c828b1a7554dc3170d0e05c3106125.webp", "NECA Ultimate FT13 6, Jason Voorhees"));
listaFiguras.push(new Figura("F02","Ultimate Shaman Predator 2","NECA",42, "https://acdn.mitiendanube.com/stores/002/369/238/products/s-l500_a71854f8-4147-4599-b1f3-614b7e39a30a_grande1-c5c1bbf68eb0379fe116810032635859-640-0.jpg", "NECA Ultimate Predator 2, Shaman Predator"));
listaFiguras.push(new Figura("F03","Ultimate Freddy Krueger Parte 1","NECA",32, "https://zappcomics.com/cdn/shop/files/freddy12.jpg?v=1694635181", "NECA Ultimate A Nightmare on Elm Street"));
listaFiguras.push(new Figura("F04","Mezco The Punisher (Live Action)","Mezco",90, "https://m.media-amazon.com/images/I/51oeqqocCRL.jpg", "Mezco 1:12 The Punisher (Netflix)"));
console.log(listaFiguras);

let contenedorFiguras = document.getElementById("cartasCentradas");
for (let element of listaFiguras){
    let tarjeta = `<div class="up-scale card m-2  text-bg-dark mb-3" style="width: 18rem;">
<img src="${element.imagenURL}" class="card-img-top" alt="Jason part 6">
<div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">${element.descripcion}</p>
    <a href="#" class="btn btn-warning botonCarrito" onclick="agregarAlCarrito('${element.id}')">Agregar al carrito!</a> <span class="precioFigura">$${element.precio}</span>
</div> 
</div>`;

tarjetas += tarjeta

};

contenedorFiguras.innerHTML = tarjetas;

let listaFigurasJson = JSON.stringify(listaFiguras);
localStorage.setItem("listaFiguras", listaFigurasJson);
