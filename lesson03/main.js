console.log('test')
for (let i = 0; i < 10; i++) {
    console.log(i)
}
let s = 2 // letは「あとで書き換えできる（代入し直せる）」変数

while (s < 100000) {
    console.log(s)
    s = s * s
}
const friends = ['サーバル', 'フェネック', 'アライグマ']

friends.forEach((friend) => {
    console.log(`僕の友達${friend}`)
})

function cook(food1, food2) {
    console.log(food1 + 'を切ります。')
    console.log(food1 + 'を炒めます。')
    console.log(food2 + 'をすりおろします。')
    console.log(food1 + 'に' + food2 + 'を混ぜます。')
}
cook('豚肉', '生姜')
function applyTax(price) {
    const result = price * 0.1 // 消費税率は10%
    return result
}

const tax = applyTax(12000)
console.log(tax) //=> 1200

const double = (x) => {
    return x * 2
}

console.log(double(1000))

// オブジェクトの値を作る→yamada変数に代入
const yamada = { id: 123, name: 'Taro Yamada', age: 24 }

// プロパティへのアクセス
console.log(yamada.id) //=> 123
console.log(yamada.name) //=> Taro Yamada
console.log(yamada.age) //=> 24
const tanaka = { id: 456, name: 'Jiro Tanaka', age: 32 }

function printUser(user) {
    console.log(`${user.name}さん(ID:${user.id})は${user.age}歳です。`)
}

printUser(yamada) //=> Taro Yamadaさん(ID:123)は24歳です。
printUser(tanaka) //=> Jiro Tanakaさん(ID:456)は32歳です。