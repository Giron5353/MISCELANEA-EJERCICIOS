function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("\n======= ⚜️ MENÚ PRINCIPAL ⚜️ =======\n1. Operadores\n2. Condicionales\n3. Ciclos\n99. Salir\nIngrese su opción: ", function(opcion) {
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
    console.log("\n======= 🛠️ MENÚ DE OPERADORES 🛠️ =======");
    console.log("1. Calcular el área de un triángulo.");
    console.log("2. Ingresar dos números por teclado y sumarlos.");
    console.log("3. Ingresar un número y visualizar el número elevado al cuadrado.");
    console.log("4. Escribir un algoritmo que convierta de euros a dólares.");
    console.log("5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro.");
    console.log("6. Escribir un algoritmo que determine el área y el volumen de un cilindro.");
    console.log("7. Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área del círculo inscrito.");
    console.log("8. Calcular el promedio de tres números ingresados por teclado.");
    console.log("55. Volver al menú principal");
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
            case '55':
                main();
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
    console.log("\n======= 🛑 MENÚ DE CONDICIONALES 🛑 =======");
    console.log("1. Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.");
    console.log("2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.");
    console.log("3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.");
    console.log("4. Dados dos números A y B, sumarlos si A es menor que B o sino restarlos.");
    console.log("5. Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible.");
    console.log("6. Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos.");
    console.log("7. Escribir un algoritmo que determine si un año es bisiesto o no.");
    console.log("55. Volver al menú principal");

    readline.question("Ingrese el número de operación que desea realizar: ", function(opcion) {
        switch (opcion) {
            case '1':
                readline.question("Ingrese un número: ", function(numero) {
                    determinarPositivoNegativo(parseFloat(numero));
                    condicionalesMenu(readline);
                });
                break;
            case '2':
                readline.question("Ingrese el primer número: ", function(num1) {
                    readline.question("Ingrese el segundo número: ", function(num2) {
                        mayorMenor(parseFloat(num1), parseFloat(num2));
                        condicionalesMenu(readline);
                    });
                });
                break;
            case '3':
                readline.question("Ingrese el primer número: ", function(num1) {
                    readline.question("Ingrese el segundo número: ", function(num2) {
                        readline.question("Ingrese el tercer número: ", function(num3) {
                            mayorMenorTresNumeros(parseFloat(num1), parseFloat(num2), parseFloat(num3));
                            condicionalesMenu(readline);
                        });
                    });
                });
                break;
            case '4':
                readline.question("Ingrese el primer número (A): ", function(a) {
                    readline.question("Ingrese el segundo número (B): ", function(b) {
                        sumarSiMenor(a, b);
                        condicionalesMenu(readline);
                    });
                });
                break;
            case '5':
                readline.question("Ingrese el primer número (A): ", function(a) {
                    readline.question("Ingrese el segundo número (B): ", function(b) {
                        cocienteAB(a, b);
                        condicionalesMenu(readline);
                    });
                });
                break;
            case '6':
                readline.question("Ingrese el primer número (A): ", function(a) {
                    readline.question("Ingrese el segundo número (B): ", function(b) {
                        sumarSiNegativo(a, b);
                        condicionalesMenu(readline);
                    });
                });
                break;
            case '7':
                readline.question("Ingrese el año: ", function(año) {
                    esBisiesto(año);
                    condicionalesMenu(readline);
                });
                break;
            case '55':
                main();
                break;
            default:
                console.log("Opción inválida.");
                condicionalesMenu(readline);
        }
    });
}

function determinarPositivoNegativo(numero) {
    if (numero > 0) {
        console.log("El número ingresado es positivo.");
    } else if (numero < 0) {
        console.log("El número ingresado es negativo.");
    } else {
        console.log("El número ingresado es cero.");
    }
}

function mayorMenor(num1, num2) {
    if (num1 > num2) {
        console.log("El primer número es mayor que el segundo.");
    } else if (num1 < num2) {
        console.log("El segundo número es mayor que el primero.");
    } else {
        console.log("Ambos números son iguales.");
    }
}

function mayorMenorTresNumeros(num1, num2, num3) {
    const mayor = Math.max(num1, num2, num3);
    const menor = Math.min(num1, num2, num3);
    console.log("El mayor de los tres números es:", mayor);
    console.log("El menor de los tres números es:", menor);
}

function sumarSiMenor(a, b) {
    if (a < b) {
        console.log("La suma de los números es:", parseFloat(a) + parseFloat(b));
    } else {
        console.log("La resta de los números es:", parseFloat(a) - parseFloat(b));
    }
}

function cocienteAB(a, b) {
    if (b !== 0) {
        console.log("El cociente de A / B es:", parseFloat(a) / parseFloat(b));
    } else {
        console.log("La división por cero no está definida.");
    }
}

function sumarSiNegativo(a, b) {
    if (a < 0 || b < 0) {
        console.log("La suma de los números es:", parseFloat(a) + parseFloat(b));
    } else {
        console.log("El producto de los números es:", parseFloat(a) * parseFloat(b));
    }
}

function esBisiesto(año) {
    if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
        console.log("El año", año, "es bisiesto.");
    } else {
        console.log("El año", año, "no es bisiesto.");
    }
}

function ciclosMenu(readline) {
    console.log("\n======= 🔄 MENÚ DE CICLOS 🔄 =======");
    console.log("1. Imprimir todos los múltiplos de 3 que hay entre 1 y 100.");
    console.log("2. Imprimir los números impares entre 0 y 100.");
    console.log("3. Imprimir los números pares del 1 al 100.");
    console.log("4. Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30.");
    console.log("5. Escribir un programa que sume los cuadrados de los cien primeros números naturales, mostrando el resultado en pantalla.");
    console.log("6. Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente.");
    console.log("7. Sumar todos los números que se digitan por teclado mientras no sea cero.");
    console.log("55. Volver al menú principal");

    readline.question("Ingrese el número de operación que desea realizar: ", function(opcion) {
        switch (opcion) {
            case '1':
                imprimirMultiplosTres();
                ciclosMenu(readline);
                break;
            case '2':
                imprimirImpares();
                ciclosMenu(readline);
                break;
            case '3':
                imprimirPares();
                ciclosMenu(readline);
                break;
            case '4':
                imprimirCuadrados1a30();
                ciclosMenu(readline);
                break;
            case '5':
                sumarCuadradosPrimerosCien();
                ciclosMenu(readline);
                break;
            case '6':
                readline.question("Ingrese el primer número: ", function(num1) {
                    readline.question("Ingrese el segundo número: ", function(num2) {
                        mostrarNumerosEntre(num1, num2);
                        ciclosMenu(readline);
                    });
                });
                break;
            case '7':
                sumarNumerosTeclado(readline);
                break;
            case '55':
                main();
                break;
            default:
                console.log("Opción inválida.");
                ciclosMenu(readline);
        }
    });
}

function imprimirMultiplosTres() {
    console.log("Múltiplos de 3 entre 1 y 100:");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function imprimirImpares() {
    console.log("Números impares entre 0 y 100:");
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

function imprimirPares() {
    console.log("Números pares entre 1 y 100:");
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

function imprimirCuadrados1a30() {
    console.log("Cuadrados de los números del 1 al 30:");
    for (let i = 1; i <= 30; i++) {
        console.log(i * i);
    }
}

function sumarCuadradosPrimerosCien() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i * i;
    }
    console.log("La suma de los cuadrados de los cien primeros números naturales es:", suma);
}

function mostrarNumerosEntre(num1, num2) {
    console.log("Números entre", num1, "y", num2, "en secuencia ascendente:");
    for (let i = parseFloat(num1); i <= parseFloat(num2); i++) {
        console.log(i);
    }
}

function sumarNumerosTeclado(readline) {
    let suma = 0;
    readline.question("Ingrese un número (0 para salir): ", function(numero) {
        const num = parseFloat(numero);
        if (num !== 0) {
            suma += num;
            sumarNumerosTeclado(readline);
        } else {
            console.log("La suma de los números ingresados es:", suma);
            ciclosMenu(readline);
        }
    });
}

main();
