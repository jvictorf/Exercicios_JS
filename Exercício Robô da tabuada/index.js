const numero = parseFloat(
  prompt("De qual número você deseja calcular a tabuada?")
);
let resultado = "";

for (let fator = 1; fator <= 100; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + numero * fator + "\n";
}

console.log("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
