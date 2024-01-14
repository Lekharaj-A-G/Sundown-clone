function followpoint(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX, dets.clientY);
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
followpoint();  

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


const elem_container =document.querySelector(".elem-container");
const fixed_image = document.querySelector(".fixed-image");


elem_container.addEventListener("mouseenter",function(){
    fixed_image.style.display ="block";
});

elem_container.addEventListener("mouseleave",function(){
    fixed_image.style.display ="none";
    
});

const elems = document.querySelectorAll(".elem");
elems.forEach((card)=>{
    card.addEventListener("mouseenter",function(){
        const image = card.getAttribute("data-image");
        fixed_image.style.backgroundImage = `url(${image})`;
    })
});


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation();
