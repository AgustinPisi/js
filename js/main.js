//  Objetos

class Figura {
    constructor(id, nombre, fabricante, precio){
        this.id = id;
        this.nombre = nombre;
        this.fabricante = fabricante
        this.precio = precio;
    }
}


//  Funciones 

function agregarUnaNuevaFigura() {
    let codigoDeFigura = pedirCodigo();
    let figura = listaFiguras.find( obj => obj.id == codigoDeFigura);
    if (figura) {
        carrito.push(figura);
    }
    else {
        alert("Codigo incorrecto. intente nuevamente.");
    }
    
}


function verFiguras(){
    alert(listaString);
}


function quitarFigura() {
    let codigoDeFigura = pedirCodigo();
    let indice = carrito.findIndex(obj => obj.id == codigoDeFigura)
    if (indice >= 0) {
        carrito.splice(indice,1);  
    }
    else {
        alert("No se encontró la figura en el carrito.")
    }
}


function verCarrito(){
    let carritoString = "Carrito:\n";
    for (let figura of carrito) {
        carritoString += "Nombre: " + figura.fabricante + " " + figura.nombre + " - Codigo: " + figura.id + " - Precio: $" + figura.precio + "\n";   
    }
    total = 0;
    carrito.forEach(fig =>{ total += fig.precio;})
    alert(carritoString + "\n\nTotal: $" + total);
}

function pedirOperacion() {
    return prompt("¿Qué operación desea realizar? \n1- Ver listado de figuras disponibles \n2- Agregar figuras al carrito \n3- Ver las figuras que tengo en el carrito \n4- Quitar una figura del carrito \n0- SALIR del carrito");
}


function pedirCodigo() {
    return prompt("Ingrese el código de la figura \nc01 \nc02 \nc03 \nc04 \nc05 \n0 - SALIR");
}



//  Inicio del programa
const listaFiguras = [];
let listaString = "";
let carrito = [];
let total = 0;

listaFiguras.push(new Figura("c01","Predator 2","NECA",30));
listaFiguras.push(new Figura("c02","Ghostface","NECA",35));
listaFiguras.push(new Figura("c03","Terminator","Mafex",60));
listaFiguras.push(new Figura("c04","RoboCop","Hot Toys",200));
listaFiguras.push(new Figura("c05","Iron-man","Hot Toys",250));

for (let figura of listaFiguras) {
    listaString += "Nombre: " + figura.fabricante + " " + figura.nombre + " - Codigo: " + figura.id + " - Precio: $" + figura.precio + "\n";   
}

let operacion = pedirOperacion();

while (operacion !== "0") {

    //  Chequeo de la operación que ingresó el usuario
    switch (operacion) {
        case "1":
            verFiguras();
            break;
        case "2":
            agregarUnaNuevaFigura();
            break;
        case "3":
            verCarrito();
            break;
        case "4":
            quitarFigura();
            break;
        default:
            alert("OPCIÓN INCORRECTA");
            break;
    }

    //  Solicito la operación nuevamente
    operacion = pedirOperacion();

}

alert("Gracias por elegir AP Collectibles!");
