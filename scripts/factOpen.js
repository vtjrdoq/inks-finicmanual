document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelectorAll('.info__button');

    openButton.forEach(function(button) {
        button.addEventListener('click', function() {
            event.preventDefault();
            
            const arrow = this.querySelector('.info__arrow');
            const parentItem = this.closest('.info__item');
            const factBlock = parentItem.querySelector('.info__fact');
            if (factBlock && arrow) {
                factBlock.classList.toggle('fact--closed');
                arrow.classList.toggle('info__arrow--rotated');
            }
        });
    });
});