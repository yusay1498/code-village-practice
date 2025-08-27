function scoring(score) {
    if (score >= 80) {
        return "秀"
    } else if (score >= 60) {
        return "良"
    } else {
        return "不可"
    }
}

// 動作確認
console.log(scoring(100))//=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可

// ランダムに成績を10回判定

for (i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 101)
    console.log(scoring(num))
}