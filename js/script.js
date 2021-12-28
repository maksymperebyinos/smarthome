const btn = document.querySelector(".menu-adaptive__nav-btn")
const btnText = document.querySelector (".menu-adaptive__nav-btn")
let menuAdaptive = document.querySelector(".menu-adaptive")

btn.onclick = () => {
  menuAdaptive.classList.toggle("menu-adaptive__show")
};

btnText.addEventListener("click", function() {
  btnText.innerHTML =
    (btnText.innerHTML === "Menu") ? btnText.innerHTML = "Close" : btnText.innerHTML = "Menu";
});

$(document).ready(function() {
  $(".services__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 835,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".testimonials__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 834,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
