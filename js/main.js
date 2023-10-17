//  Funciones 

function concatenarCodigo(codigoDeFigura) {

    if (codigosDeFigura !== "") {
        codigosDeFigura += ", ";
    }

    codigosDeFigura += codigoDeFigura;
}


function agregarUnaNuevaFigura() {

    let codigoDeFigura = pedirCodigo();

    while (codigoDeFigura !== "0") {

        switch (codigoDeFigura) {

            case "f1":
                concatenarCodigo(codigoDeFigura);
                total += 30;
                break;

            case "f2":
                concatenarCodigo(codigoDeFigura);
                total += 40;
                break;

            case "f3":
                concatenarCodigo(codigoDeFigura);
                total += 50;
                break;

            case "f4":
                concatenarCodigo(codigoDeFigura);
                total += 20;
                break;

            default:
                alert("CÓDIGO INCORRECTO");
                break;
        }

        //  Solicito el código nuevamente
        codigoDeFigura = pedirCodigo();
    }

}


function mostrarElTotal() {
    alert("Las figuras agregadas son: " + codigosDeFigura + ". El total de las figuras es: $" + total);
}


function restarValorDelTotal(monto) {

    if (monto > total) {
        alert("El monto es mayor al total de las figuras ingresadas. Ingrese los codigos correspondientes");
    } else {

        total = total - monto;

    }

}


function quitarFigura() {
    let codigoDeFigura = pedirCodigo();

    while (codigoDeFigura !== "0") {

        switch (codigoDeFigura) {

            case "f1":
                restarValorDelTotal(30);
                break;

            case "f2":
                restarValorDelTotal(40);
                break;

            case "f3":
                restarValorDelTotal(50);
                break;

            case "f4":
                restarValorDelTotal(20);
                break;

            default:
                alert("CÓDIGO INCORRECTO");
                break;
        }

        //  Solicito el código nuevamente
        codigoDeFigura = pedirCodigo();
    }
}


function pedirOperacion() {
    return prompt("¿Qué operación desea realizar? 1- Ingresar una nueva figura al carrito / 2- Ver las figuras que tengo en el carrito / 3- Quitar una figura del carrito / 0- SALIR del carrito");
}


function pedirCodigo() {
    return prompt("Ingrese el código de la figura / f1 - $30 / f2 - $40 / f3 - $50 / f4 - $20 / 0 - SALIR");
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