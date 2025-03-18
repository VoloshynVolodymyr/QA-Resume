import Swiper from "swiper/bundle";

import "swiper/css/bundle";

function swiper_education() {

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
        1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
}

export default swiper_education;