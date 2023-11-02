

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

listaFiguras.push(new Figura(1,"Predator 2","NECA",30));
listaFiguras.push(new Figura(2,"Ghostface","NECA",35));
listaFiguras.push(new Figura(3,"Terminator","Mafex",60));
listaFiguras.push(new Figura(4,"RoboCop","Hot Toys",200));
listaFiguras.push(new Figura(5,"Iron-man","Hot Toys",250));


//  Funciones 

function agregarUnaNuevaFigura() {
   
}


function mostrarElTotal() {
   
}


function quitarFigura() {
   
}


function pedirOperacion() {
    return prompt("¿Qué operación desea realizar? \n1- Ingresar una nueva figura al carrito \n2- Ver las figuras que tengo en el carrito \n3- Quitar una figura del carrito \n0- SALIR del carrito");
}


function pedirCodigo() {
    return prompt("Ingrese el código de la figura \n1 \n2 \n3 \n4 \n0 - SALIR");
}



//  Inicio del programa

let codigosDeFigura = "";
let total = 0;
let operacion = pedirOperacion();

while (operacion !== "0") {

    //  Chequeo de la operación que ingresó el usuario
    switch (operacion) {
        case "1":
            agregarUnaNuevaFigura();
            break;
        case "2":
            mostrarElTotal();
            break;
        case "3":
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
