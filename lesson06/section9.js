// window.alert('warning')
// window.console.log('hello')
// const intro = window.document.getElementById('intro')
// console.log(intro.textContent)
// // ウィンドウは省略可

// const list = document.querySelector('.list')
// console.log(list)

// const items = document.querySelectorAll('.list li')
// console.log(items)
// items.forEach((item) => {
//     console.log(item.textContent)
// })

// const elem = document.querySelector('.list')

// console.log(elem.textContent)
// console.log(elem.innerHTML)
// console.log(elem.firstElementChild)
// console.log(elem.lastElementChild)
// console.log(elem.parentElement)

// const elem2 = document.querySelector('img')

// console.log(elem2.getAttribute('src'))
// elem2.setAttribute('src', 'https://placehold.it/400x200') 

const list = document.querySelector('.list')
const newItem = document.createElement('li')

// newItem.textContent = '新しいアイテム'
// list.appendChild(newItem)
// list.removeChild(list.firstElementChild) 

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
addButton.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.textContent = '新しいアイテム'
    list.appendChild(newItem)
})
removeButton.addEventListener('click', () => {
    list.removeChild(list.firstElementChild)
})