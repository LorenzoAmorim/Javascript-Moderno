# REST PARAMS

## É uma técnica que permite a uma função receber qualquer número de parâmetros

## Também permite manipular esses parâmetros como um array na definição da função (o que o diferencia do objeto *arguments* )

## Exemplo:
~~~ function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
} 