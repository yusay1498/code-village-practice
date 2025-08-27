const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
    if (score >= 80) {
        return "秀"
    } else if (score >= 60) {
        return "良"
    } else {
        return "不可"
    }
}

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
scores.forEach((sc) => {
    console.log(scorenig(sc))
})