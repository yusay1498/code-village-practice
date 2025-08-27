function User(name, from) {
    this.name = name
    this.from = from
    this.introduce = function () {
        return `I'm ${name} from ${from}.`
    }

}

const yusei = new User('yusei', 'japan')

console.log(yusei)