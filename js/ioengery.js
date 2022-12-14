const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

// const ml_section = document.querySelector(".milestones");
// const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");


const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");



function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 12);
    }
}

/* -----------Sticky Navbar -------------- */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}   

stickyNavbar(); 

window.addEventListener("scroll", stickyNavbar);

/* -----------Reveal Animation -------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600});
sr.reveal(".showcase-image", { origin: "top", delay: 700});

/* -----------Skills Progress Bar Animation -------------- */

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
} 

// let skillsPlayed = false;

// function skillsCounter(){
//     if(!hasReached(first_skill)) return;
    
//     skillsPlayed = true;

//     sk_counters.forEach((counter, i) => {
//         let target = +counter.dataset.target;
//         let strokeValue = 427 - 427 * (target / 100);
        
//         progress_bars[i].style.setProperty("--target", strokeValue);

//         setTimeout(()=> {
//             updateCount(counter, target);
//         }, 400)
//     })

//     progress_bars.forEach((p) =>(p.style.animation = "progress 2s ease-in-out forwards"));
// }

/* -----------Services Counter Animation -------------- */

// let mlPlayed = false;

// function mlCounter() {
//     if (!hasReached(ml_section)) return;
//     mlPlayed = true;

//     ml_counters.forEach((ctr) => {
//         let target = +ctr.dataset.target;
        
//         setTimeout(() => {
//             updateCount(ctr, target);
//         }, 400)
//     });
    
// }

// mlCounter();

/* -----------Portfolio Filter Animation -------------- */


// let mixer = mixitup('.portfolio-gallery', {
//     selectors: {
//         target: '.prt-card',
//     },
//     animation: {
//         duration: 500
//     }
// });

/* -----------Modal Pop Up Animation Animation -------------- */

// let currentIndex = 0;

// zoom_icons.forEach((icn, i) => icn.addEventListener('click', () => {
//     prt_section.classList.add("open");
//     document.body.classList.add("stopScrolling");
//     currentIndex = i;
//     changeImage(currentIndex);
// })
// );

// modal_overlay.addEventListener("click", () => {
//     prt_section.classList.remove("open");
//         document.body.classList.remove("stopScrolling");

// });

// prev_btn.addEventListener("click", () => {
//     if(currentIndex === 0) {
//         currentIndex = 3
//     } else {
//     currentIndex--;
//     }
//     changeImage(currentIndex);
// });

// next_btn.addEventListener("click", () => {
//     if(currentIndex === 3) {
//         currentIndex = 0
//     } else {
//     currentIndex++;
//     }
//     changeImage(currentIndex);
// });

// function changeImage(index) {
//     images.forEach((img) => img.classList.remove("showImage"));
//     images[index].classList.add("showImage");
// }  


/* ----------- Define Carousel Animation -------------- */
// const track = document.querySelectorAll('.carousel_track');
// const slides = Array.from(track.children);

// const nextButton = document.querySelectorAll('.carousel_btn-right');
// const prevButton = document.querySelectorAll('.carousel_btn-left');

// const carouselNav = document.querySelectorAll('.carousel-nav');
// const dots = Array.from(carouselNav.children); 

// const slideWidth = slides[0].getBoundingClientRect().width;



// //arrange the slides next to on another
// // slides[0].style.left = slideWidth * 0 + 'px';
// // slides[1].style.left = slideWidth * 1 + 'px';

// //arrange slides next to each other
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// }
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// }

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// }

//     const currentSlide = track.querySelectorAll('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const nextSlide = currentSlide.nextElementSibling;
//     const targetSlide = slides[targetIndex];


//     const targetDot = e.target.closest('button');
//     const currentDot = carouselNav.querySelectorAll('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const nextDot = currentDot.nextElementSibling;

//     const prevIndex = slides.findIndex(slide => slide === prevSlide);
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);
//     const targetIndex = dots.findIndex(dot => dot === targetDot)



// //when i click left, move slide to the left
// prevButton.addEventListener('click', e => {
//     // const currentSlide = track.querySelector('.current-slide');
//     // const prevSlide = currentSlide.previousElementSibling;
//     // const currentDot = carouselNav.querySelector('.current-slide');
//     // const prevDot = currentDot.previousElementSibling;
//     // const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex)
// });

// //when click right, move slide to right
// nextButton.addEventListener('click', e => {
//     // const currentSlide = track.querySelector('.current-slide');
//     // const nextSlide = currentSlide.nextElementSibling;
//     // const currentDot = carouselNav.querySelector('.current-slide');
//     // const nextDot = currentDot.nextElementSibling;
//     // const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// }); 

// //when click the nav indicator, move to that slide

// carouselNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     // const currentSlide = track.querySelector('.current-slide');
//     // const currentDot = carouselNav.querySelector('.current-slide'); 
//     // const targetIndex = dots.findIndex(dot => dot === targetDot)
//     // const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);

//     updateDots(currentDot, targetDot);
    
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
// })

// /* ----------- Develop Carousel Animation -------------- */
// const developTrack = document.querySelector('.develop_carousel_track');

// const developSlides = Array.from(developTrack.children);
// console.log(developSlides)
// const developNextButton = document.querySelector('.develop_carousel_btn-right');
// const developPrevButton = document.querySelector('.develop_carousel_btn-left');

// const developCarouselNav = document.querySelector('.develop_carousel-nav');
// const developDots = Array.from(developCarouselNav.children); 
// console.log(developDots)
// const developSlideWidth = developSlides[0].getBoundingClientRect().width;



// //arrange the slides next to on another
// // slides[0].style.left = slideWidth * 0 + 'px';
// // slides[1].style.left = slideWidth * 1 + 'px';

// //arrange slides next to each other
// const developSetSlidePosition = (slide, index) => {
//     slide.style.left = developSlideWidth * index + 'px';
// }
// developSlides.forEach(developSetSlidePosition);

// const developMoveToSlide = (developTrack, developCurrentSlide, developTargetSlide) => {
//     developTrack.style.transform = 'translateX(-' + developTargetSlide.style.left + ')';
//     developCurrentSlide.classList.remove('develop_current-slide');
//     developTargetSlide.classList.add('develop_current-slide');
// }

// const developUpdateDots = (developCurrentDot, developTargetDot) => {
//     developCurrentDot.classList.remove('develop_current-slide');
//     developTargetDot.classList.add('develop_current-slide');
// }

// const developHideShowArrows = (developSlides, developPrevButton, developNextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         developPrevButton.classList.add('develop_is-hidden');
//         developNextButton.classList.remove('develop_is-hidden');
//     } else if (targetIndex === developSlides.length - 1) {
//         developPrevButton.classList.remove('develop_is-hidden');
//         developNextButton.classList.add('develop_is-hidden');
//     } else {
//         developPrevButton.classList.remove('develop_is-hidden');
//         developNextButton.classList.remove('develop_is-hidden');
//     }
// }

// //when i click left, move slide to the left
// developPrevButton.addEventListener('click', e => {
//     const currentSlide = developTrack.querySelector('.develop_current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = developCarouselNav.querySelector('.develop_current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = developSlides.findIndex(slide => slide === prevSlide);

//     developMoveToSlide(developTrack, currentSlide, prevSlide);
//     developUpdateDots(currentDot, prevDot);
//     developHideShowArrows(developSlides, developPrevButton, developNextButton, prevIndex)
// });

// //when click right, move slide to right
// developNextButton.addEventListener('click', e => {
//     const currentSlide = developTrack.querySelector('.develop_current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = developCarouselNav.querySelector('.develop_current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = developSlides.findIndex(slide => slide === nextSlide);

//     developMoveToSlide(developTrack, currentSlide, nextSlide);
//     developUpdateDots(currentDot, nextDot);
//     developHideShowArrows(developSlides, developPrevButton, developNextButton, nextIndex);
// }); 

// //when click the nav indicator, move to that slide

// developCarouselNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     const currentSlide = developTrack.querySelector('.develop_current-slide');
//     const currentDot = developCarouselNav.querySelector('.develop_current-slide'); 
//     const targetIndex = developDots.findIndex(dot => dot === targetDot)
//     const targetSlide = developSlides[targetIndex];

//     developMoveToSlide(developTrack, currentSlide, targetSlide);

//     developUpdateDots(currentDot, targetDot);
    
//     developHideShowArrows(developSlides, developPrevButton, developNextButton, targetIndex);
// })



/* -----------Change Active Link On Scroll -------------- */

// function activeLink() {
//     let sections = document.querySelectorAll("section[id]");
//     let passedSections = Array.from(sections)
//         .map((sct, i) => {
//             return { 
//                 y: sct.getBoundingClientRect().top - header.offsetHeight,
//                 id: i,
//         };
//     })
//     .filter((sct) => sct.y <= 0) ;
   
//     let currSectionID = passedSections.at(-1).id;
  
//     links.forEach((l) => l.classList.remove("active"));
//     links[currSectionID].classList.add("active"); 
// }

// activeLink();

/* ----------- Change Page Theme-------------- */ 

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
    if(isDark){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon","uil-sun" )
        localStorage.setItem("dark", 1);
    }
    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);

    }
} 

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* ----------- Open & Close Navbar Menu------------- */ 

hamburger.addEventListener("click", ()=> {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
console.log(hamburger)

links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}));

/*--------------Carousel Slides-----------------------*/

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]'); 

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})