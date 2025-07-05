document.addEventListener('DOMContentLoaded', function() {
    const sliders = {
        continueWatching: new Swiper('.continue-watching-slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            navigation: {
                nextEl: '.continue-watching-slider .swiper-button-next',
                prevEl: '.continue-watching-slider .swiper-button-prev',
            },
        }),
        popular: new Swiper('.popular-slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            navigation: {
                nextEl: '.popular-slider .swiper-button-next',
                prevEl: '.popular-slider .swiper-button-prev',
            },
        }),
        trending: new Swiper('.trending-slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            navigation: {
                nextEl: '.trending-slider .swiper-button-next',
                prevEl: '.trending-slider .swiper-button-prev',
            },
        }),
        recommendations: new Swiper('.recommendations-slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            navigation: {
                nextEl: '.recommendations-slider .swiper-button-next',
                prevEl: '.recommendations-slider .swiper-button-prev',
            },
        })
    };

    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('show');
    }

    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('show');
        });
    }
});
