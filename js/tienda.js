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
}


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
}



//  Inicio del programa

let tarjetas = "";

const listaFiguras = [];


listaFiguras.push(new Figura("F01","Ultimate Jason Vorhees 6 FT13","NECA",35, "https://d22fxaf9t8d39k.cloudfront.net/2c4bd9ecf84951f89569fe408ee58ec31a2295d5c828b1a7554dc3170d0e05c3106125.webp", "NECA Ultimate FT13 6, Jason Voorhees"));
listaFiguras.push(new Figura("F02","Ultimate Shaman Predator 2","NECA",42, "https://d22fxaf9t8d39k.cloudfront.net/2c4bd9ecf84951f89569fe408ee58ec31a2295d5c828b1a7554dc3170d0e05c3106125.webp", "NECA Ultimate FT13 6, Jason Voorhees"));
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

}

contenedorFiguras.innerHTML = tarjetas;

let listaFigurasJson = JSON.stringify(listaFiguras);
localStorage.setItem("listaFiguras", listaFigurasJson);
