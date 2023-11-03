

const listaFiguras = [];
let carrito = [];

class Figura {
    constructor(id, nombre, fabricante, precio){
        this.id = id;
        this.nombre = nombre;
        this.fabricante = fabricante
        this.precio = precio;
    }
}

listaFiguras.push(new Figura("c01","Predator 2","NECA",30));
listaFiguras.push(new Figura("c02","Ghostface","NECA",35));
listaFiguras.push(new Figura("c03","Terminator","Mafex",60));
listaFiguras.push(new Figura("c04","RoboCop","Hot Toys",200));
listaFiguras.push(new Figura("c05","Iron-man","Hot Toys",250));


//  Funciones 

function agregarUnaNuevaFigura() {
    let codigoDeFigura = pedirCodigo();
    let figura = listaFiguras.find( obj => obj.id == codigoDeFigura);
    carrito.push(figura);
}


function mostrarElTotal() {
   
}

function verFiguras(){

    let listaString = "";

    for (let figura of listaFiguras) {
        listaString += "Nombre: " + figura.fabricante + " " + figura.nombre + " - Codigo: " + figura.id + " - Precio: $" + figura.precio + "\n";   
    }

    alert(listaString);
}


function quitarFigura() {
    let codigoDeFigura = pedirCodigo();
    carrito = carrito.filter(function(obj){
        return obj.id != codigoDeFigura;
    })
}


function verCarrito(){
    let carritoString = "";

    for (let figura of carrito) {
        carritoString += "Nombre: " + figura.fabricante + " " + figura.nombre + " - Codigo: " + figura.id + " - Precio: $" + figura.precio + "\n";   
    }
    alert(carritoString);
}

function pedirOperacion() {
    return prompt("¿Qué operación desea realizar? \n1- Ver listado de figuras disponibles \n2- Agregar figuras al carrito \n3- Ver las figuras que tengo en el carrito \n4- Quitar una figura del carrito \n0- SALIR del carrito");
}


function pedirCodigo() {

    return prompt("Ingrese el código de la figura \nc01 \nc02 \nc03 \nc04 \nc05 \n0 - SALIR");
}



//  Inicio del programa

let codigosDeFigura = "";
let total = 0;
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
