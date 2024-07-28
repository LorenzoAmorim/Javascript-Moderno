// DESESTRUTURAÇÃO DE UM OBJETO
const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name
const {job, parents} = person
console.log(name, job, parents)

// DESESTRUTURAÇÃO DE UM ARRAY (do objeto person)
// dá-se por ordem do array, ao invés do nome de um atributo
const [father, mother] = parents
console.log(father, mother)

// podemos usar diretamente nos parâmetros os atributos necessários, ao invés de chamar o objeto
function createUser({name,job, parents}){
    // obtemos um número aleatório até 9999
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)