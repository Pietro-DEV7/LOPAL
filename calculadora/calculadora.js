    function calculadora() {

        let continuar = true;

        do {

            let resultado = 0.0;

            let operando1 = parseFloat(prompt("Digite o primeiro número: "));
            let operando2 = parseFloat(prompt("Digite o segundo número: "));
            let operador = prompt("Digite uma das operações (+ - * / ): ");

            if (operador === "+") {
                resultado = operando1 + operando2;

            } else if (operador === "-") {
                resultado = operando1 - operando2;

            } else if (operador === "*") {
                resultado = operando1 * operando2;

            } else if (operador === "/") {

                if (operando2 === 0) {
                    alert("Não é possível dividir por zero.");
                    continue;
                }

                resultado = operando1 / operando2;

            } else {
                alert("Operador inválido.");
                continue;
            }

            alert("Resultado: " + operando1 + " " + operador + " " + operando2 + " = " + resultado);

            let resposta = prompt("Deseja fazer outra operação? (sim / nao)");

            if (resposta.toLowerCase() !== "sim") {
                continuar = false;
            }

        } while (continuar);
    }