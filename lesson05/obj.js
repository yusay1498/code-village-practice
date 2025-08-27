function createUser(name, from) {
    const obj = {}

    obj.name = name
    obj.from = from
    obj.introduce = function () {
        return `I'm ${name} from ${from}.`
    }

    return obj
}

const takemitu = createUser('takemitu', 'japan')
const john = createUser('john', 'USA')

console.log(takemitu.introduce())
console.log(john.introduce())