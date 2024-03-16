
// =============> Header scroll here
window.addEventListener (`scroll`, function (){
    const header = document.querySelector(`header`);
    header.classList.toggle(`sticky`, window.scrollY > 100);
})




// =============> hamburger here
    //----Humburger click and remove navLinks;
    const navLinks = document.querySelector(`.menuLinks`);
    const hamburger = document.querySelector (`.hamburger`);

    hamburger.addEventListener (`click`, () =>{
        navLinks.classList.toggle(`nav_links_open`);
        hamburger.classList.toggle(`hamburger_open`);
    });

    //----Nav item click and remove navLinks;
                navLinks.addEventListener (`click`, () =>{
                    navLinks.classList.remove(`nav_links_open`);
                    hamburger.classList.remove(`hamburger_open`);
                });





//----------------> spinere
const spinner = document.querySelector(`.spinner-cnt`);
window.addEventListener (`load`, () =>{
    spinner.style.opacity = `0`;

    setTimeout(() =>{
        spinner.style.display = `none`;
    }, 500);
})





// owl carousel
$(document).ready(function(){
    $('.hero-section-slider').owlCarousel({
        loop:true,
        // margin:10,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        navText: [`<i class='bx bx-chevron-left'></i>`, `<i class='bx bx-chevron-right'></i>`], //box icon include here
        // animateOut: 'fadeOut',
        // autoplayTimeout: 7000,
        nav:true,
        responsive:{
            0:{
                nav: false,
                dots: true,
            },
            
            768:{
                nav: true,
                dots: true,
            }
        }
    })
  });



  $('.Clients-slider-logo').owlCarousel({
    loop:true,
    // margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            dots: true,
            items:3
            
        },
        600:{
            dots: true,
            items:4
        },
        1000:{
            dots: true,
            items:5
        }
    }
})




$('.amazing-image-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    smartSpeed: 1000,
    navText: [`<i class='bx bx-chevron-left'></i>`, `<i class='bx bx-chevron-right'></i>`],
    animateOut: 'fadeOut',
    responsive:{
        0:{
            nav: false,
            items:1
        },
        600:{
            nav: false,
            items:1
        },
        1000:{
            items:1
        }
    }
})

let valueDisplays = document.querySelectorAll(`.counter`)
let interval = 4000; // milliseconds between each update (5 seconds)


valueDisplays.forEach(valueDisplays =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute 
    ("Data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval (function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval (counter);
        }
    }, duration);
})