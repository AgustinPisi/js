//  Funciones 

function concatenarCodigo(codigoDeFigura) {
    codigosDeFigura += codigoDeFigura + "\n";
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
    alert("Las figuras agregadas son:\n" + codigosDeFigura + "\nEl total de las figuras es: $" + total);
}


function restarValorDelTotal(monto, codigo) {
    if (codigosDeFigura.includes(codigo))  {
        
            total = total - monto;
        }
    
    else{
        alert("El codigo ingresado no está en la lista");
    }
}

function quitarCodigoDeLista(codigo){
        codigosDeFigura = codigosDeFigura.replace((codigo + "\n"), '');
}


function quitarFigura() {
    let codigoDeFigura = pedirCodigo();

    while (codigoDeFigura !== "0") {

        switch (codigoDeFigura) {

            case "f1":
                restarValorDelTotal(30, codigoDeFigura);
                quitarCodigoDeLista(codigoDeFigura);
                break;

            case "f2":
                restarValorDelTotal(40, codigoDeFigura);
                quitarCodigoDeLista(codigoDeFigura);
                break;

            case "f3":
                restarValorDelTotal(50, codigoDeFigura);
                quitarCodigoDeLista(codigoDeFigura);
                break;

            case "f4":
                restarValorDelTotal(20, codigoDeFigura);
                quitarCodigoDeLista(codigoDeFigura);
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
    return prompt("¿Qué operación desea realizar? \n1- Ingresar una nueva figura al carrito \n2- Ver las figuras que tengo en el carrito \n3- Quitar una figura del carrito \n0- SALIR del carrito");
}


function pedirCodigo() {
    return prompt("Ingrese el código de la figura \nf1 - $30 \nf2 - $40 \nf3 - $50 \nf4 - $20 \n0 - SALIR");
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