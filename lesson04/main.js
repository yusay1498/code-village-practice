console.log("a")

const obj = { a: 1 }
obj.a = 2
obj.b = 100
obj['c'] = 'foo' // [] を使った書き方もOK
console.log(obj)

const users = [
    { id: 1, name: 'Taro', comments: ['hello', 'world'] },
    { id: 2, name: 'Jiro', comments: ['looks good to me', 'very'] },
    { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]
console.log(users[1]) //=> { id: 2, name: 'Jiro' comments: [] }
console.log(users[1].comments[0]) //=> looks good to me

const user = [
    { id: 1, name: 'Taro', comments: ['hello', 'world'] },
    { id: 2, name: 'Jiro', comments: ['looks good to me'] },
    { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]

const json = JSON.stringify(user)

console.log(json) //=> (JSON化されたオブジェクト)



const us = JSON.parse(json)

console.log(us.id) //=> (JavaScriptの配列)

const add2 = x => x + 2

function twice(f, x) {
    return f(f(x))
}

const result = twice(add2, 10)
console.log(result) //=> 14

const list = [1, 2, 3]
const square = x => x * x // 引数xを二乗する

console.log(list.map(square)) //=> [1, 4, 9]

const userss = [
    { id: 1, name: 'Taro', comments: ['hello', 'world'] },
    { id: 2, name: 'Jiro', comments: ['looks good to me'] },
    { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
]
// 上の配列に対してmapメソッドを実行し、
// 以下のような配列に変換してください。
// ['Taroさん', 'Jiroさん', 'Saburoさん']
const bb = (x) => {
    return x.name + "さん"
}

// const s = console.log(userss.map(bb))
// userss.forEach(x => {
//     return alert(x.name)
// })
// console.log(s)

const q = userss.filter(w => {
    return w.comments.length > 1
}
)
console.log(q)

const w = userss.filter(x => {
    return x.id !== 2
}

)
console.log(w)

const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
    const sum = item.reduce((a, x) => a += x, 0)
    return sum
})
console.log(sums) //=> [424, 313, 291, 379]