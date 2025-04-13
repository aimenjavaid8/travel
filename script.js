//owl carousel section start//
$(".owl-carousel").owlCarousel({
    loop : true,
    margin : 10,
    autoplay : true,
    autoplayTimeout : 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//owl carousel section end//



//scroll to top section start//
const scrollBtn = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//scroll to top section end//
