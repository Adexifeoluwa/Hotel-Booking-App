new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: "flip",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
    }
});

//navigation physics

const { styler, spring, listen, pointer, value } = window.popmotion;

// const person = { name: "Ifeoluwa", job: "Engineer"};

//const {name} = person;
//const name = person.name 


const ball = document.querySelector(".brand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(ballXY);
});
