# Operador Spread

## Operador que permite espalhar (do inglês, *spread*) os elementos de um objeto iterável, como um array ou uma string

## Utiliza três pontos: **...iterableObject**

## Pode ser usado para diferentes fins, como por exemplo:
### Passar vários parâmetros de uma única vez
### Clonar objetos iteráveis
### Fazer manipulações sem afetar o objeto original
### Transformar strings em arrays

## Exemplo:
~~~ let srt = "Olá, Mundo"
let arr = [4, 2, 8, 3, 1]

console.log(...str) // Separa as letras O l á ,   M u n d o
console.log(...arr) // Separa os elementos 4 2 8 3 1 