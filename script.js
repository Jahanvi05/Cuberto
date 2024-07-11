Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["media/0.mp4","media/2.mp4","media/3.mp4"]});

// gsap la kaam chalana haota hai
gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#featuredimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".fimages", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});