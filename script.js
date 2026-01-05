gsap.registerPlugin(SplitText, TextPlugin);

gsap.to("#line1", {
  duration: 0.5,
  delay: 2,
  width: "100vw",
  ease: "exponential.inOut",
});

gsap.to("#line2", {
  duration: 0.4,
  delay: 1.8,
  height: "100vh",
  ease: "exponential.inOut",
});
gsap.to("#line3", {
  duration: 0.4,
  delay: 2,
  height: "100vh",
  ease: "exponential.inOut",
});

gsap.to("#line4", {
  duration: 0.4,
  delay: 2,
  width: "100vw",
  ease: "exponential.inOut",
});

let split = SplitText.create("#text", {
  type: "words, chars",
});

gsap.from(split.words, {
  duration: 0.5,
  delay: 1,
  autoAlpha: 0,
  y: 100,
  opacity: 0,
  ease: "exponential.inOut",
  stagger: 0.4,
  onComplete: () => {
    gsap.to("#text", {
      scale: 1.3,
      ease: "back.inOut(1.2, 0)",
      duration: 1,
      delay: 0.5,
    });
  },
});
