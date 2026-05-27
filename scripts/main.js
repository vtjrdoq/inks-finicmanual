// вставка шапки

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });


// замена стики

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
    });
});


// замена ховера

document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.querySelectorAll('.nav__item');

    sideNav.forEach(element => {
        if (element) {
            element.addEventListener('click', function(e) {
                this.classList.toggle('is-active');
            });
        }
    
        document.addEventListener('click', (e) => {
            if (!element.contains(e.target)) {
                element.classList.remove('is-active');
            }
        });
    });
});
