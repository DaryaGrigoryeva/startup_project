let flag = 1;
function openNav() {
    if (flag == 1) {
        document.getElementById("e1").style.top = "88px";
        flag = 2;
    }else{
        document.getElementById("e1").style.top = "-500px";
        flag = 1;
    }
}

let fl = 1;
function openCatalogMenu() {
    if (fl == 1) {
        document.getElementById("catalogmenu").style.display = "block";
        fl = 2;
    }else{
        document.getElementById("catalogmenu").style.display = "none";
        fl = 1;
    }
}


let btnPass = document.querySelectorAll('.js-btn-password');

// btnPass.onclick = function () {
//     if (inputPass.getAttribute('type') === 'password') {
//         inputPass.setAttribute('type', 'text');
//         btnPass.classList.add('active');
//     } else {
//         inputPass.setAttribute('type', 'password');
//         btnPass.classList.remove('active');
//     }
// }

btnPass.forEach(function(btn) {
    btn.onclick = function () {
        let target = this.getAttribute('data-target'),
            inputPass = document.querySelector(target);

        if (inputPass.getAttribute('type') === 'password') {
            inputPass.setAttribute('type', 'text');
            btn.classList.add('active');
        } else {
            inputPass.setAttribute('type', 'password');
            btn.classList.remove('active');
        }
    }
})

const swiper = new Swiper(".review__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: false,
    initialSlide: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    touchRatio: 0.8,
    grabCursor: true,
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerGroup: 1,
    loop: false,
    freeMode: true,
    speed: 500,
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true,
    // },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    // observer: true,
    // observeParents: true,
    // observeSlideChildren: true,
  });


//   let select = function () {
//     let selectHeader = document.querySelectorAll('.select__header');
//     let selectItem = document.querySelectorAll('.select__item');

//     selectHeader.forEach(item => {
//         item.addEventListener('click', selectToggle)
//     });

//     selectItem.forEach(item => {
//         item.addEventListener('click', selectChoose)
//     });

//     function selectToggle() {
//         this.parentElement.classList.toggle('is-active');
//     }

//     function selectChoose() {
//         let text = this.innerText,
//             select = this.closest('.select'),
//             currentText = select.querySelector('.select__current');
//         currentText.innerText = text;
//         select.classList.remove('is-active');

//     }

// };


// select();