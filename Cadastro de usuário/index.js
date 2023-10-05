// Função para calcular a idade baseada no ano de nascimento
function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

// Objeto para armazenar as informações do recruta
const recruta = {};

// Solicitar as informações ao usuário
recruta.primeiroNome = prompt("Digite o primeiro nome do recruta:");
recruta.sobrenome = prompt("Digite Sobrenome do recruta:");
recruta.campoEstudo = prompt("Digite o campo de estudo do recruta:");
recruta.anoNascimento = parseInt(
  prompt("Digite o ano de nascimento do recruta:")
);

// Calcular a idade do recruta
recruta.idade = calcularIdade(recruta.anoNascimento);

// Exibir as informações do recruta
console.log("Nome completo: " + recruta.primeiroNome + " " + recruta.sobrenome);
console.log("Campo de estudo: " + recruta.campoEstudo);
console.log("Idade: " + recruta.idade + " anos");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    recruta.primeiroNome +
    " " +
    recruta.sobrenome +
    "\nCampo de estudo: " +
    recruta.campoEstudo +
    "\nIdade: " +
    recruta.idade +
    " anos"
);
