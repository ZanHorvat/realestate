function animate(){

  $(".loading").hide();

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

$("#demo01").animatedModal({
  modalTarget: 'animatedModal',
  animatedIn:'fadeInUp',
  animatedOut:'fadeOutDown'
});

$("#demo02").animatedModal({
    modalTarget: 'animatedModal1',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo04").animatedModal({
    modalTarget: 'animatedModal3',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo05").animatedModal({
    modalTarget: 'animatedModal4',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo06").animatedModal({
    modalTarget: 'animatedModal5',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo07").animatedModal({
    modalTarget: 'animatedModal6',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'}
);

$("#demo08").animatedModal({
    modalTarget: 'animatedModal7',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo09").animatedModal({
    modalTarget: 'animatedModal8',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown'
});

$("#demo10").animatedModal({
    modalTarget: 'animatedModal9',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
});

$("#demo11").animatedModal({
    modalTarget: 'animatedModal10',
    animatedIn:'fadeInUp',
    animatedOut:'fadeOutDown',
});

  $(".your-class").slick({
    dots: true,
    infinite: true,
    speed: 2800,
    autoplay: true,
    variableWidth: true
  });


  $("img").onloadeddata = function() {
    window.alert("Browser has loaded the current frame");
    console.log('something');
  };
};
