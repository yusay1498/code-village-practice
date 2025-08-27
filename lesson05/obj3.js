class Person {
    constructor(name, from) {
        this.name = name
        this.from = from
    }
    introduce() {
        return `I'm ${this.name} from ${this.from}.`
    }
}


class Teacher extends Person {
    constructor(name, from, subject) {
        super(name, from)
        this.subject = subject
    }
    introduce() {
        return `${super.introduce()}I teach ${this.subject}.`
    }
}

const uchida = new Teacher('uchida', 'japan', 'math')

console.log(uchida.introduce())