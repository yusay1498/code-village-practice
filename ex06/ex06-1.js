const add2 = x => x * 100 - 5
const mul2 = x => (x + 3) * 8 + 3

const n = 3
console.log(add2(n))
console.log(mul2(n))
console.log(mul2(add2(n)))

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