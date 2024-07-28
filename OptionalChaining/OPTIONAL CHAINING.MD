# OPTIONAL CHAINING

## Operador que permite ler propriedades internas de uma cadeia de objetos sem que a validação de cada referência da cadeia seja realizada

## Em outras palavras, permite acessar propriedades internas sem lançar erros quando uma propriedade é *nullish* (*null* ou *undefined* )

## Funciona de forma similar ao encadeamento normal (operador **"."** ), porém é escrito com **"?."**

## Exemplo:
~~~
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
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
~~~

### console.log(user.friends[0].phone.ddd)    // lança erro *cannot read properties of undefined *
### console.log(user.friends[0].phone?.ddd)  // não lança erro, dá curto-circuito no phone

### console.log(user.friends[1].address.street)       // lança erro
### console.log(user.friends?.[1]?.address?.street)  // não lança erro