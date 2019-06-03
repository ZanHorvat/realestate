$(document).ready(function() {
  const svgMain = document.querySelectorAll(".main");
  anime({
    targets: svgMain,
    loop: true,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: /* 1 */ 5200
  });

  const svgPath = document.querySelectorAll(".path");
  anime({
    targets: svgPath,
    loop: true,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 700,
    delay: (el, i) => {
      return i * 700;
    }
  });

  const svgPath2 = document.querySelectorAll(".path2");
  anime({
    targets: svgPath2,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 700,
    delay: (el, i) => {
      return i * 500;
    }
  });

  $("#demo01, #demo02, #demo04, #demo05, #demo06, #demo07, #demo08, #demo09, #demo10, #demo11").animatedModal({
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: 3,
  });

  $(".your-class").slick({
    dots: true,
    infinite: true,
    speed: 2800,
    autoplay: true,
    variableWidth: true
  });
});
