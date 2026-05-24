fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });


document.addEventListener('DOMContentLoaded', () => {
    const stickyElement = document.querySelector('.nav__container');
    if (!stickyElement) return;

    const stickyInitialTop = stickyElement.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= stickyInitialTop) {
            stickyElement.classList.add('is-sticky');
        } else {
            stickyElement.classList.remove('is-sticky')
        }
    })
})
