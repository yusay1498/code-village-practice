const form = document.getElementById('js-form')
const submittedMessage = document.getElementById('js-submitted')
const input = document.querySelector('#js-form input')
const validation = document.getElementById('js-submitted')

form.addEventListener('submit', e => {
    e.preventDefault()
    alert(input.value)
    submittedMessage.textContent = '送信されました。'
})
input.addEventListener('input', e => {
    validation.textContent = e.target.value
    if (validation.textContent.length < 6) {
        const newItem = document.createElement('p')
        newItem.textContent = '警告'
        newItem.style.color = 'red'
        validation.appendChild(newItem)
    } else {
        const newItem2 = document.createElement('p')
        newItem2.textContent = 'OK'
        newItem2.style.color = 'blue'
        validation.appendChild(newItem2)
    }

})