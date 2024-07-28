const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Marroc"]
console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push("Juno")

// transformamos o array towns em um objeto e consequentemente duplicamos os arrays
console.log({towns, townsCopy})

const townsClone =[...towns]
townsClone.push("Aldebaran")
console.log({towns, townsCopy, townsClone})

const townsObj = {... towns}
const townsObjClone = {... townsObj}
townsObjClone.test = "Test"
console.log({townsObj, townsObjClone})