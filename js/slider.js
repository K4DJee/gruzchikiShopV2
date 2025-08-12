const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween:20,
    loop: true,
    autoplay: {
      delay: 2000,
    },

    breakpoints: {
  // Когда ширина >= 640px (маленькие устройства)
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // Когда ширина >= 768px (планшеты)
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // Когда ширина >= 1024px (ноутбуки, десктопы)
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  // Когда ширина >= 1280px (большие экраны)
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
},
    // If we need pagination
    //pagination: {
     // el: ".swiper-pagination",
   // },
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  swiper.enable();