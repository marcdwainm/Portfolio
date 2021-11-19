gsap.timeline({
    scrollTrigger: {
        trigger: ".txt-line h1, .txt-line h2",
        end: "bottom top"
    }
}).from(".txt-line h1, .txt-line h2", {
    duration: 0.8,
    delay: 0,
    y: 250,
    skewY: 10,
    stagger: {
        amount: .5
    }
}).from(".right p", {
    duration: 0.8,
    delay: 0,
    y: 50,
    opacity: 0,
    stagger: {
        amount: .5
    }
})

const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            pin: true,
            pinSpacing: false,
            scrub: true
        }
    });

    tl.to(container, {
        autoAlpha: 0
    }, 0.1)
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.scroll-indicator',
        pinSpacing: false,
        scrub: true
    }
})

tl.to('.scroll-indicator', {
    autoAlpha: 0
}, 0.1)


