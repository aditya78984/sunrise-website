const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function picturepg3(){
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {
        return
    }
    var elemCont = document.querySelector("#elem-container");
    var fixed =  document.querySelector("#fixed-img");

    elemCont.addEventListener("mouseenter",function(){
        fixed.style.display = "block";
    })
    elemCont.addEventListener("mouseleave", function (e) {
        // Check if the mouse is leaving the fixed-img itself
        if (!fixed.contains(e.relatedTarget)) {
            fixed.style.display = "none";
        }
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-img");
            fixed.style.backgroundImage = `url(${image})`;
            
        })
    })
}

picturepg3();


function pg4animation(){
    
    var headings = document.querySelectorAll(".h2s");
    var para = document.querySelector("#para");
    var pg4image = document.querySelector("#imgcont");
    let currentHeading = null;
    headings.forEach(function(h) {
        h.addEventListener("click", function myfunc(){
            if (currentHeading !== h) { // Check if different heading
                if (currentHeading) { // If previously selected heading exists
                    currentHeading.style.borderColor = "";
                    currentHeading.style.color = "";
                    currentHeading.removeEventListener("click", myfunc);
                }
        
                h.style.borderColor = " #FE320A";
                h.style.color = "#EFEAE3";
                currentHeading = h;
                let content = h.getAttribute("data-para")
                para.innerHTML = `${content}`
        
                let newImg = h.getAttribute("data-img");
                    // Apply transition to the image
                pg4image.style.opacity = 0;
                setTimeout(function () {
                    pg4image.src = newImg;
                    pg4image.style.opacity = 1;
                }, 260);
            }
    
    
        })
    });
    
    var firstHeading = document.querySelector("#firstheading");
    if (firstHeading) {
        firstHeading.click(); // Manually trigger click event for the first heading
        currentHeading = firstHeading
    }
    }

    
    pg4animation();

    function swiperjs() {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 100,
        });
    }

swiperjs();

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var fulldiv = document.querySelector("#full-div1")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            // full.style.visibility = "visible";
            // fulldiv.innerHTML = "<h2>Work</h2> <br> <h2>Studio</h2> <br> <h2>Contact</h2>"
            // fulldiv.style.zIndex = 100
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

menuAnimation();

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


loaderAnimation();