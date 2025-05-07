/****************************************************  start upbtn  **********************************************************/
let upbtn = document.getElementById("upbtn");
let icon = document.getElementById("icon");

window.addEventListener("scroll",fun);

function fun(){
    if(window.pageYOffset >= 700)
        {
            upbtn.style.display = "block"
    }else
    {
        upbtn.style.display = "none"

    }
}

window.addEventListener("click",fun2);

function fun2(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
/****************************************************  end upbtn  **********************************************************/

/****************************************************  start swiper  **********************************************************/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  /****************************************************  end swiper  **********************************************************/


  
  
  