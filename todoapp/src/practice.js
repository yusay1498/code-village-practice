// const user = {
//     name: 'uchida',
//     from: 'japan'
// }
// // const name = user.name
// // const from = user.from
// const { name, from } = user
// console.log(name)
// console.log(from)
// // const intro = (user) => {
// //     console.log(`I'm ${user.name} from ${user.from}`)
// // }
// const intro = ({ name, from }) => {
//     console.log(`I'm ${name} from ${from}`)
// }
// intro(user)
const fruits = ['apple', 'orange']

const [fruits1, fruits2] = fruits

console.log(fruits1)
console.log(fruits2)
