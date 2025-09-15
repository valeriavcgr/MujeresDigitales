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
    console.log("\n Operaciones disponibles: ");
    console.log(" + : Suma");
    console.log(" - : Resta");
    console.log(" * : Multiplicación");
    console.log(" / : División");
    console.log(" % : Módulo");
    console.log(" p : Potenciación");
    console.log("imc: Calcular indice de masa muscular");
    console.log("0 : Salir");
    console.log();
    const operador = await preguntar("Elija la operación que desea realizar:  ");

    if (operador === "0") {
            console.log("bye");
            rl.close();
            return;
    }else null;
    
    let num1= 0;
    let num2= 0;
    if(operador === "imc"){
         num1 = parseFloat(await preguntar("Ingrese su peso en kg:"));
         num2 = parseFloat(await preguntar("Ingrese su altura: "));
    }else{
        num1 = parseFloat( await preguntar(" Ingrese el primer número: "));
        num2 = parseFloat(await preguntar(" Ingrese el segundo número: "));
    }
    
    switch (operador) {
        case "+":
            console.log(` La suma de ${num1} y  ${num2} es:`);
            const suma= num1 + num2;
            console.log(suma);
            break;
        case "-":
            if (num1 < num2) {
            console.log(` El primer número es menor que el segundo, la resta con valor negativo de: ${num1} - ${num2} es: `);
            const restaN= num1 - num2;
            console.log(restaN);
            } else {
            console.log(` La resta de ${num1} y  ${num2} es:`);
            const restaP= num1 - num2;
            console.log(restaP);
            }
            break;
        case "*":
            console.log(` La multiplicación de ${num1} y  ${num2} es:`);
            const mul= num1 * num2;
            console.log(mul);
            break;
        case "/":
            if (num2 === 0) {
                console.log(" No se puede dividir por cero");
            } else {
             console.log(` La división de ${num1} y  ${num2} es:`);
             const div= num1 / num2;
             console.log(div);
            }
            break;
        case "%":
            if (num2 === 0) {
                console.log(" No se puede dividir por cero");
            } else {
             console.log(` El módulo de ${num1} y  ${num2} es:`);
             const mod= num1 % num2;
             console.log(mod);
            }
            break;
        case "p":
            console.log(` La potenciación de la base ${num1} y el exponente ${num2} es:`);
            const potencia= num1 ** num2;
            console.log(potencia);
            break;
        case "imc":
            if ( num2 === 0){
                console.log(" La altura no puede ser cero");
            }else{
                const indice = (num1 / (num2 * num2)).toFixed(2);
                 if(indice <18.5){
                    console.log(` Tu indice de masa corporal es: ${indice}, lo que significa que tienes bajo peso`);
                 }else if (indice >=18.5 && indice <24.9){
                    console.log(` Tu indice de masa corporal es: ${indice}, lo que significa que tienes un peso normal`);
                 }else if( indice >=25.0 && indice <29.9){
                    console.log(`Tu indice de masa corporal es: ${indice}, lo que significa que tienes sobrepeso`);
                 }else if(indice >=30.0){
                    console.log(`Tu indice de masa corporal es: ${indice}, lo que significa que tienes obesidad`)
                 }else{
                    console.log(`Error de ejecución`);
                 }
            }
            break;
            default:
            console.log("Operación no válida, intente de nuevo.");
            break;
    }
    main();
};
main();