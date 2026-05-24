window.addEventListener('scroll', () => {
    const container = document.querySelector('.hero__picture');
    const picFinic = document.querySelector('.image--finic');
    const picStudents = document.querySelector('.image--students');

    const viewportCenter = window.innerHeight / 2;

    const rect = container.getBoundingClientRect();
    const containerCenter = rect.top + rect.height / 2;

    const distanceFromCenter = containerCenter - viewportCenter;
    const movement = Math.abs(distanceFromCenter) * 0.2;

    picFinic.style.transform = `translateX(-${movement}px)`;
    picStudents.style.transform = `translateX(${movement}px)`;
})
