async function runSwiperConfigs() {
  const swiperDomLoaded = await document.addEventListener('DOMContentLoaded', () => {

    //====================================== Banner Carousel ==============================================
    var swiper = new Swiper(".bannerSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".fashion-slider-button-next",
        prevEl: ".fashion-slider-button-prev",
      },
    });
    var swiper2 = new Swiper(".thumbSwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      thumbs: {
        swiper: swiper,
      },
    });


  })
}
runSwiperConfigs()