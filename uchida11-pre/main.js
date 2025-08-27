document.addEventListener('click', e => {
    if (!e.target.classList.contains('scroll')) {
        return
    }
    e.preventDefault()
    const scrollTarget = document.querySelector(e.target.hash)
    scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})