function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("\n======= MICELANEA MENU =======\n1. Operadores\n2. Condicionales\n3. Ciclos\n99. Salir\nIngrese su opción: ", function(opcion) {
        switch (opcion) {
            case '1':
                operadoresMenu(readline);
                break;
            case '2':
                condicionalesMenu(readline);
                break;
            case '3':
                ciclosMenu(readline);
                break;
            case '99':
                console.log("Saliendo del programa...");
                readline.close();
                break;
            default:
                console.log("Opción inválida. Por favor, ingrese una opción válida.");
                main();
        }
    });
}

function operadoresMenu(readline) {
    console.log("\n======= OPERADORES =======");
    console.log("1. Calcular el área de un triángulo.");
    console.log("2. Ingresar dos números por teclado y sumarlos.");
    console.log("3. Ingresar un número y visualizar el número elevado al cuadrado.");
    console.log("4. Escribir un algoritmo que convierta de euros a dólares.");
    console.log("5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro.");
    console.log("6. Escribir un algoritmo que determine el área y el volumen de un cilindro.");
    console.log("7. Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área del círculo inscrito.");
    console.log("8. Calcular el promedio de tres números ingresados por teclado.");
    readline.question("Ingrese el número de operación que desea realizar: ", function(operacion) {
        switch (operacion) {
            case '1':
                readline.question("Ingrese la base del triángulo: ", function(base) {
                    readline.question("Ingrese la altura del triángulo: ", function(altura) {
                        console.log("El área del triángulo es:", calcularAreaTriangulo(parseFloat(base), parseFloat(altura)));
                        operadoresMenu(readline);
                    });
                });
                break;
            case '2':
                readline.question("Ingrese el primer número: ", function(num1) {
                    readline.question("Ingrese el segundo número: ", function(num2) {
                        console.log("La suma de los dos números es:", sumarNumeros(parseFloat(num1), parseFloat(num2)));
                        operadoresMenu(readline);
                    });
                });
                break;
            case '3':
                readline.question("Ingrese un número: ", function(numero) {
                    console.log("El número elevado al cuadrado es:", elevarAlCuadrado(parseFloat(numero)));
                    operadoresMenu(readline);
                });
                break;
            case '4':
                readline.question("Ingrese la cantidad en euros: ", function(euros) {
                    console.log("La cantidad en dólares es:", eurosADolares(parseFloat(euros)));
                    operadoresMenu(readline);
                });
                break;
            case '5':
                readline.question("Ingrese la longitud del lado del cuadrado: ", function(lado) {
                    const resultado = areaYPerimetroCuadrado(parseFloat(lado));
                    console.log("El área del cuadrado es:", resultado[0]);
                    console.log("El perímetro del cuadrado es:", resultado[1]);
                    operadoresMenu(readline);
                });
                break;
            case '6':
                readline.question("Ingrese el radio del cilindro: ", function(radio) {
                    readline.question("Ingrese la altura del cilindro: ", function(altura) {
                        const resultadoCilindro = areaYVolumenCilindro(parseFloat(radio), parseFloat(altura));
                        console.log("El área de la base del cilindro es:", resultadoCilindro[0]);
                        console.log("El volumen del cilindro es:", resultadoCilindro[1]);
                        operadoresMenu(readline);
                    });
                });
                break;
            case '7':
                readline.question("Ingrese el radio de la circunferencia: ", function(radio) {
                    const resultadoCircunferencia = longitudYAreaCircunferencia(parseFloat(radio));
                    console.log("La longitud de la circunferencia es:", resultadoCircunferencia[0]);
                    console.log("El área del círculo inscrito es:", resultadoCircunferencia[1]);
                    operadoresMenu(readline);
                });
                break;
            case '8':
                readline.question("Ingrese el primer número: ", function(n1) {
                    readline.question("Ingrese el segundo número: ", function(n2) {
                        readline.question("Ingrese el tercer número: ", function(n3) {
                            console.log("El promedio de los tres números es:", promedioTresNumeros(parseFloat(n1), parseFloat(n2), parseFloat(n3)));
                            operadoresMenu(readline);
                        });
                    });
                });
                break;
            default:
                console.log("Opción inválida.");
                operadoresMenu(readline);
        }
    });
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function sumarNumeros(num1, num2) {
    return num1 + num2;
}

function elevarAlCuadrado(numero) {
    return numero ** 2;
}

function eurosADolares(euros) {
    return euros * 1.13; // Suponiendo un tipo de cambio fijo
}

function areaYPerimetroCuadrado(lado) {
    const area = lado ** 2;
    const perimetro = lado * 4;
    return [area, perimetro];
}

function areaYVolumenCilindro(radio, altura) {
    const areaBase = Math.PI * radio ** 2;
    const volumen = areaBase * altura;
    return [areaBase, volumen];
}

function longitudYAreaCircunferencia(radio) {
    const longitud = 2 * Math.PI * radio;
    const area = Math.PI * radio ** 2;
    return [longitud, area];
}

function promedioTresNumeros(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function condicionalesMenu(readline) {
    // Implementa las opciones del menú de condicionales
}

function ciclosMenu(readline) {
    // Implementa las opciones del menú de ciclos
}

main();