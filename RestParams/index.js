// Definimos um parâmetro onde se pode receber vários valores com o spread operator.
// "...numbers" são definidos como um array, onde esse único parâmetro receber as mesmas funções
// de um array.
function sum (...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1,1))
console.log(sum(2,2,2,2,2,2))

// O Rest Param deve ser sempre o último parâmetro, pois o JS não tem como
// prever quando acaba o primeiro parâmetro.
function subtract (param, ...number){ //...number=[5,4]
    return number.reduce((accum, num) => accum - num, param)
}

console.log(subtract(5, 4))
console.log(subtract(5, 5))