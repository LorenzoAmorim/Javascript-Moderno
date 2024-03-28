// SOMA NORMAL
function normalSum(a,b){
    return a +b
}
console.log(`Soma normal: ${normalSum(2,2)}`)

// SOMA ANÔNIMA
console.log("SOMA ANÔNIMA:")
const anonymousSum = function(a,b){
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(2,2)}`)

// SOMA COM ARROW FUNCTION
console.log("SOMA COM ARROW FUNCTION:")
const arrowSum = (a,b) => {
    return a+b
}
console.log(`Soma arrow function: ${arrowSum(2,2)}`)

// SUBTRAÇÃO COM ARROW FUNCTION
console.log("SUBTRAÇÃO COM ARROW FUNCTION:")
const subtractArrowSum = (a,b) => a-b
console.log(`Subtração com arrow function: ${subtractArrowSum(5,2)}`)

// EXPRESSÃO UTILIZANDO 1 LINHA COM ARROW FUNCTION
console.log("EXPRESSÃO UTILIZANDO 1 LINHA COM ARROW FUNCTION:")
const double= n => `O dobro de ${n} é ${n*2}`
const number = 20
console.log(double(number))

// EXPRESSÃO APENAS COM O ARROW FUNCTION, FILTRANDO AS CIDADES COMEÇANDO COM 'P'
console.log("EXPRESSÃO APENAS COM O ARROW FUNCTION, FILTRANDO AS CIDADES COMEÇANDO COM 'P'")
const cidades = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Pitangueira', 'Moscow', 'Zimba']
const startingWithP = cidades.filter(cidade => cidade[0] === 'P')
console.log(startingWithP)