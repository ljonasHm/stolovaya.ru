import Swiper from 'swiper/bundle';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);


export default function slider() {
    const swiper = new Swiper('.swiper', {
      
        // If we need pagination
        pagination: {
            el: '.swiper__pagination',
            bulletActiveClass: 'swiper__pagination-bullet--active',
            bulletClass: 'swiper__pagination-bullet'
        },

        wrapperClass: 'swiper__wrapper',
        slideClass: 'swiper__slide',

        // Navigation arrows
        navigation: {
          nextEl: '.swiper__button-next',
          prevEl: '.swiper__button-prev'
        }
    });
}