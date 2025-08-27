console.log("test")

const title = document.getElementById('title')
console.log(title)
console.log(title.textContent)

const list = document.querySelector('.list')
console.log(list.children)
console.log(list.children[0])

const newItem = document.createElement('li')
newItem.textContent = '桃'
list.appendChild(newItem)
console.log(list)

const button = document.getElementById('button')
document.addEventListener('click', event => {
    confirm("削除してよろしいですか？")
})
