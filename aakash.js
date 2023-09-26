'use strict';

let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("nav-active");
    hamburger.classList.toggle("ham-active");
})

///////////////////////////// for header section //////////////////////////////

gsap.from(".logo", {
    y: -100,
    opacity: 0,
    duration: 0.7,
})

gsap.from(".nav-links", {
    delay: 0.1,
    bottom: -100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
})


let height = gsap.timeline({
    repeat: -1,
    ease: Expo.easeInOut,
    duration: 1,
});

height.from(".image-text-stroke", {
    height: 0,
    duration: 1,
    opacity: 0,
    delay: 0.5,
}, "image")

    .from(".image-text-stroke", {
        delay: 1,
        height: "84%",
        duration: 1,
    })


    .from(".big-image img", {
        height: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    }, "image")

    .from(".big-image img", {
        height: "100%",
        opacity: 1,
        duration: 1,
        delay: 1,
    })


let tl = gsap.timeline();

tl.from(".upper p", {
    y: 150,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
    ease: Power1,
})

tl.from(".upper .p-span-aakash", {
    y: -150,
    duration: 0.5,
    opacity: 0,
    ease: Power1,
})

gsap.from(".lower p", {
    width: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
})

gsap.from(".lower p span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.5,
})

tl.to(".big-image img", {
    width: "100%",
    duration: 1,
    delay: 1.2,
})


gsap.from(".upper img:first-child", {
    rotate: 360,
    repeat: -1,
    duration: 8,
    ease: Power3,
})

////////////////////////////////
////////// infinite-text //////
//////////////////////////////


gsap.to(".infinite-text p:first-child, .infinite-text p:nth-child(3)", {
    transform: "translateX(-5%)",
    ease: Power1,
    scrollTrigger: {
        trigger: ".infinite-text",
        scroller: "body",
        scrub: 5,
    }
})

gsap.to(".infinite-text p:last-child, .infinite-text p:nth-child(2)", {
    transform: "translateX(5%)",
    ease: Power1,
    scrollTrigger: {
        trigger: ".infinite-text",
        scroller: "body",
        scrub: 5,
    }
})


////////////////////////////////
////////// four Image /////////
//////////////////////////////

gsap.from(".four-image-div", {
    y: 300,
    opacity: 0,
    stagger: 1,
    ease: Power1,
    scrollTrigger: {
        trigger: ".four-image",
        scroller: "body",
        scrub: 1,
        pin: true,
    }
})

gsap.to(".fourth-word span:last-child", {
    left: "10vw",
    ease: Power3,
    scrollTrigger: {
        trigger: ".fourth-word span:last-child",
        scroller: "body",
        scrub: 4,
    }
})

gsap.to(".first-word span:last-child ", {
    paddingLeft: "8vw",
    ease: Power3,
    scrollTrigger: {
        trigger: ".first-word span:last-child ",
        scroller: "body",
        scrub: 4,
    }
})

gsap.to(".third-word ", {
    x: 30,
    ease: Power3,
    scrollTrigger: {
        trigger: ".third-word ",
        scroller: "body",
        scrub: 4,
    }
})

let newTl = gsap.timeline({
    repeat: -1,
});

newTl.from(".work-image-section-1 .work-line-container-1 .work-lines", {
    height: 0,
    stagger: 1.9,
    duration: 1.4,
    ease: Expo.easeInOut,
}, "a")
    .from(".work-image-container-1", {
        width: 0,
        stagger: 1.9,
        duration: 1.4,
        ease: Expo.easeInOut,
    }, "a")

///////////////////////////////////////////
/////////////// text-service /////////////
/////////////////////////////////////////

let textTimeline = gsap.timeline({
    repeat: -1,
});

textTimeline.from(".service-text-description.service-text-description .p1 span", {
    opacity: 0,
    stagger: 1,
    duration: 1,
    ease: Expo.easeIn,
    repeat: 0,
})
    .to(".service-text-description.service-text-description .p1 span", {
        opacity: 0,
        stagger: 1,
        duration: 1,
        ease: Expo.easeIn,
        delay: 5,
    })

let textTimeline2 = gsap.timeline({
    repeat: -1,
});

textTimeline2.from(".service-text-description.service-text-description-2 .p2 span", {
    opacity: 0,
    stagger: 1,
    duration: 1,
    ease: Expo.easeIn,
    repeat: 0,
})
    .to(".service-text-description.service-text-description-2 .p2 span", {
        opacity: 0,
        stagger: 1,
        duration: 1,
        ease: Expo.easeIn,
        delay: 5,
    })

let textTimeline3 = gsap.timeline({
    repeat: -1,
});

textTimeline3.from(".service-text-description.service-text-description-3 .p3 span", {
    opacity: 0,
    stagger: 1,
    duration: 1,
    ease: Expo.easeIn,
    repeat: 0,
})
    .to(".service-text-description.service-text-description-3 .p3 span", {
        opacity: 0,
        stagger: 1,
        duration: 1,
        ease: Expo.easeIn,
        delay: 5,
    })


///////////////////////////////////////////////////////////
/////////////// my-work-secition = new anime /////////////
/////////////////////////////////////////////////////////

let scollWork1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".my-work.my-work-1",
        scroller: "body",
    }
});

scollWork1.from(".work-name-1", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: Power3,
})
    .from(".work-image-section.work-image-section-1", {
        x: 500,
        opacity: 0,
        duration: 1,
        ease: Power3,
    })
    .from(".text-service-div-1.text-service-div", {
        opacity: 0,
        duration: 0.5,
    })

let scollWork2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".my-work.my-work-2",
        scroller: "body",
    }
});

scollWork2.from(".work-name-2", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: Power3,
})
    .from(".work-image-section.work-image-section-2", {
        x: 500,
        opacity: 0,
        duration: 1,
        ease: Power3,
    })
    .from(".text-service-div-2.text-service-div", {
        opacity: 0,
        duration: 0.5,
    })


let scollWork3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".my-work.my-work-3",
        scroller: "body",
    }
});

scollWork3.from(".work-name-3", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: Power3,
})
    .from(".work-image-section.work-image-section-3", {
        x: 500,
        opacity: 0,
        duration: 1,
        ease: Power3,
    })
    .from(".text-service-div-3.text-service-div", {
        opacity: 0,
        duration: 0.5,
    })

////////////////////////////////////////
/////////////// my-work-2 /////////////
//////////////////////////////////////
let newTlTwo = gsap.timeline({
    repeat: -1,
});

newTlTwo.from(".work-image-section-2 .work-line-container-2 .work-lines", {
    height: 0,
    stagger: 1.9,
    duration: 1.4,
    ease: Expo.easeInOut,
}, "b")
    .from(".work-image-container-2", {
        width: 0,
        stagger: 1.9,
        duration: 1.4,
        ease: Expo.easeInOut,
    }, "b")

////////////////////////////////////////
/////////////// my-work-3 /////////////
//////////////////////////////////////

let newTlThree = gsap.timeline({
    repeat: -1,
});

newTlThree.from(".work-image-section-3 .work-line-container-3 .work-lines", {
    height: 0,
    stagger: 1.9,
    duration: 1.4,
    ease: Expo.easeInOut,
}, "c")
    .from(".work-image-container-3", {
        width: 0,
        stagger: 1.9,
        duration: 1.4,
        ease: Expo.easeInOut,
    }, "c")

////////////////////////////////////////
//////////////// swiper ///////////////
//////////////////////////////////////

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true
});


//////////////////////////////////////
/////////// service-heading//////////
////////////////////////////////////



gsap.to(".work-heading-section", {
    backgroundColor: "black",
    ease: Power3,
    scrollTrigger: {
        trigger: ".work-heading-section",
        scroller: "body",
        scrub: 1,
    }
})


gsap.from(".work-heading", {
    x: "200%",
    opacity: 0,
    duration: 1,
    ease: Power2,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".work-heading",
        scroller: "body",
    }
})

gsap.from(".work-heading-2", {
    x: "-200%",
    opacity: 0,
    duration: 1,
    ease: Power2,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".work-heading-2",
        scroller: "body",
    }
})


gsap.from(".swiper-work-name.swiper-work-name-1 p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: Power3,
    scrollTrigger: {
        trigger: ".swiper-work-name.swiper-work-name-1 p",
        scroller: "body",
    }
})

gsap.from(".swiper-work-name.swiper-work-name-2 p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1,
    ease: Power3,
    scrollTrigger: {
        trigger: ".swiper-work-name.swiper-work-name-2 p",
        scroller: "body",
    }
})

gsap.from(".swiper-work-name.swiper-work-name-3 p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1,
    ease: Power3,
    scrollTrigger: {
        trigger: ".swiper-work-name.swiper-work-name-3 p",
        scroller: "body",
    }
})


/////////////////////////////////////////////////////////
/////////////////// about-me-seciton ///////////////////
///////////////////////////////////////////////////////

gsap.from(".about-me-image", {
    x: -500,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: Power3,
    scrollTrigger: {
        trigger: ".about-me-image",
        scroller: "body",
    }
})


gsap.from(".about-me-text", {
    x: 500,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: Power3,
    scrollTrigger: {
        trigger: ".about-me-image",
        scroller: "body",
    }
})

/////////////////////////////////////////////////////////
/////////////////////////extra-div//////////////////////
///////////////////////////////////////////////////////

gsap.to(".extra-section", {
    backgroundColor: "white",
    ease: Power4,
    duration: 3,
    scrollTrigger: {
        trigger: ".extra-section",
        scroller: "body",
    }
})

gsap.to(".my-work-section", {
    backgroundColor: "black",
    ease: Power4,
    duration: 3,
    scrollTrigger: {
        trigger: ".my-work-section",
        scroller: "body",
    }
})

gsap.to(".four-image-section", {
    backgroundColor: "white",
    ease: Power4,
    duration: 3,
    scrollTrigger: {
        trigger: ".four-image-section",
        scroller: "body",
    }
})


gsap.to(".my-work", {
    backgroundColor: "black",
    ease: Power4,
    duration: 3,
    scrollTrigger: {
        trigger: ".my-work",
        scroller: "body",
    }
})

gsap.to(".work-heading-section-2", {
    backgroundColor: "black",
    ease: Power3,
    duration: 3,
    scrollTrigger: {
        trigger: ".work-heading-section-2",
        scroller: "body",
        scrub: 1,
    }
})


gsap.from(".star-image img", {
    rotate: 360,
    y: -100,
    ease: Power4,
    scrollTrigger: {
        trigger: ".star-image img",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-image img", {
    rotate: 360,
    y: -100,
    ease: Power4,
    scrollTrigger: {
        trigger: ".extra-about-image img",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-image span", {
    ease: Power4,
    y: -100,
    color: "burlywood",
    scrollTrigger: {
        trigger: ".extra-about-image span",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-one img", {
    width: "120%",
    ease: Power4,
    scrollTrigger: {
        trigger: ".extra-about-one img",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-two img", {
    width: "120%",
    ease: Power4,
    scrollTrigger: {
        trigger: ".extra-about-two img",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-three img", {
    width: "120%",
    ease: Power4,
    scrollTrigger: {
        trigger: ".extra-about-three img",
        scroller: "body",
        scrub: 4,
    }
})

gsap.from(".extra-about-text p", {
    y: 100,
    delay: 0.3,
    stagger: 0.5,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".extra-about-text p",
        scroller: "body",
    }
})

gsap.to(".extra-about-text p", {
    wordSpacing: "6vw",
    scrollTrigger: {
        trigger: ".extra-about-text p",
        scroller: "body",
        scrub: 5,
    }
})