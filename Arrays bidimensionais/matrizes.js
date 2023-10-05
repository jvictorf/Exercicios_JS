const arr = [
  "1º Nível",
  ["2º Nível", 42, true],
  [
    ["3º nível, 1º item", "Hello, Word!"],
    ["3º nível, 2º item", "Oi, Mundo!"],
  ],
  []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])

const matriz = [
  ["L1, C1", "L1, C2", "L1, C3", "L1, C4"],
  ["L2, C1", "L2, C2", "L2, C3", "L2, C4"],
  ["L3, C1", "L3, C2", "L3, C3", "L3, C4"],
]

//console.table(matriz)
//matriz.push(["Nova linha"])
//matriz[0].push("Nova coluna")

//console.table(matriz)

// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}