const user = {
    name: "John Doe",
    email: "jdoe@gmail.com",
    friend: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}
// o "?" significa "se", ou seja, se existir algum valor em algum no atributo,
// no console não aparece nenhum erro, apenas "undefined"
console.log(user.friend[0].phone?.ddd)
console.log(user?.brother?.lenght)

// irá aparecer erro, pois o JS estará tentando ler um valor(name) num
// atributo(friend) em uma posição([5]) inexistente, um valor null em um undefined
// NULLISH
console.log(user?.friend?.[5].name)