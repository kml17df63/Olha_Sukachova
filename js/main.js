document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    toggleSoundOnClick();
    changePage();
    swiperInit();
}

function toggleSoundOnClick() {
    const element = document.querySelector('[data-btn="sound"]');
    
    if (element) {
        element.addEventListener('click', () => {
            element.classList.toggle('off');
        });
    }
}

function changePage() {
    const buttons = document.querySelectorAll('[data-btn="change-page"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const currentPage = document.querySelector('section[id^="page"].active');
            const currentPageIndex = parseInt(currentPage.id.replace('page', ''));
    
            currentPage.classList.remove('active');
    
            const nextPageIndex = (currentPageIndex % 3) + 1;
            const nextPage = document.querySelector(`#page${nextPageIndex}`);
    
            nextPage.classList.add('active');
        })
    })
}

function swiperInit() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}