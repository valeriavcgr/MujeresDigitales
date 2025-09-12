const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

const main = async () => {
    console.log("\n===== CALCULADORA DIGITAL ===== ");
    const num1 = parseFloat( await preguntar(" Ingrese el primer número: "));
    console.log("\n Operaciones disponibles: ");
    console.log(" + : Suma");
    console.log(" - : Resta");
    console.log(" * : Multiplicación");
    console.log(" / : División");
    console.log(" % : Módulo");
    console.log(" ^ : Potenciación");
    const operador = await preguntar("Elija la operación que desea realizar:  ");
    const num2 = parseFloat(await preguntar(" Ingrese el segundo número: "));
    
    switch (operador) {
        case "+":
            console.log(`La suma de ${num1} y  ${num2} es:`);
            const suma= num1 + num2;
            console.log(suma);
            break;
        case "-":
            if (num1 < num2) {
            console.log(`El primer número es menor que el segundo, la resta con valor negativo de: ${num1} - ${num2} es: `);
            const restaN= num1 - num2;
            console.log(restaN);
            } else {
            console.log(`La resta de ${num1} y  ${num2} es:`);
            const restaP= num1 - num2;
            console.log(restaP);
            }
            break;
        case "*":
            console.log(`La multiplicación de ${num1} y  ${num2} es:`);
            const mul= num1 * num2;
            console.log(mul);
            break;
        case "/":
            if (num2 === 0) {
                console.log(" No se puede dividir por cero");
            } else {
             console.log(`La división de ${num1} y  ${num2} es:`);
             const div= num1 / num2;
             console.log(div);
            }
        case "%":
            if (num2 === 0) {
                console.log(" No se puede dividir por cero");
            } else {
             console.log(`El módulo de ${num1} y  ${num2} es:`);
             const mod= num1 % num2;
             console.log(mod);
            }
            break;
        case "^":
            console.log(`La potenciación de la base ${num1} y el exponente ${num2} es:`);
            const potencia= num1 ** num2;
            console.log(potencia);
            break;
            default:
            console.log("Operación no válida, intente de nuevo.");
            break;
    }
    rl.close();
};
main();