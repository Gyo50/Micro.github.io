document.addEventListener('DOMContentLoaded', () => {
    const lImg = document.querySelector('.L-img');
    const lImg1 = document.querySelector('.L-img1');
    const lImg2 = document.querySelector('.L-img2');
    const shadow = document.querySelector('.shadow');
    const $body = document.querySelector('body');
    const upButton1 = document.querySelector('.up1');
    const upButton2 = document.querySelector('.up2');
    const downButton1 = document.querySelector('.down1');
    const downButton2 = document.querySelector('.down2');
    const floor1 = document.querySelector('.floor-1');
    const floor2 = document.querySelector('.floor-2');
    const floor3 = document.querySelector('.floor-3');
    const fireimg = document.querySelector('.fire-img');
    const firehover = document.querySelector('.fire-hover');

    // 초기 스크롤 설정
    floor1.scrollIntoView();
    // 스크롤 방지 설정
    let scrollBlocked = true;

    function preventScroll(e) {
        if (scrollBlocked) {
            e.preventDefault();
        }
    }

    lImg.addEventListener('mouseenter', () => {
        lImg1.style.display='block';
        lImg2.style.display='none';
        lImg1.style.transform = 'translateY(-20px)';
        lImg1.style.transition = 'transform 0.3s ease';
        shadow.style.width = '80px';
    });

    lImg.addEventListener('mouseleave', () => {
        lImg1.style.display='none';
        lImg2.style.display='block';
        lImg1.style.transform = 'translateY(0)';
        shadow.style.width = '115px';
    });
    
    const fireElement = document.querySelector('.fire');
    const fireContainer = document.querySelector('.R-img-fire');
    const backfire = document.querySelector('.back-fire');

    fireContainer.addEventListener('mouseenter', () => {
        backfire.style.display='block'
        fireElement.style.display = 'block';
        fireimg.style.display='none'
        firehover.style.display='block'
    });

    fireContainer.addEventListener('mouseleave', () => {
        backfire.style.display='none'
        fireElement.style.display = 'none';
        fireimg.style.display='block'
        firehover.style.display='none'
    });

    $body.addEventListener('wheel', preventScroll, { passive: false });

    $body.addEventListener('click', () => {
        scrollBlocked = false;
    });

    //이동
    upButton1.addEventListener('click', () => {
        floor2.scrollIntoView({ behavior: 'smooth' });
    });
    upButton2.addEventListener('click', () => {
        floor3.scrollIntoView({ behavior: 'smooth' });
    });
    downButton1.addEventListener('click', () => {
        floor1.scrollIntoView({ behavior: 'smooth' });
    })
    downButton2.addEventListener('click', () => {
        floor2.scrollIntoView({ behavior: 'smooth' });
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const intro = document.getElementById('intro');
    const history = document.getElementById('history');
    const popupBackground = document.getElementById('popupBackground');
    const closeintro = document.getElementById('closeintro');
    const closehistory = document.getElementById('closehistory');
    const lImg1 = document.querySelector('.L-img1');
    const rImg1 = document.querySelector('.R-img-fire');

    lImg1.addEventListener('click', function () {
        intro.style.display = 'block';
        popupBackground.style.display = 'block';
    });
    rImg1.addEventListener('click', function () {
        history.style.display = 'block';
        popupBackground.style.display = 'block';
    });


    closeintro.addEventListener('click', function () {
        intro.style.display = 'none';
        popupBackground.style.display = 'none';
    });
    closehistory.addEventListener('click', function () {
        history.style.display = 'none';
        popupBackground.style.display = 'none';
    });
    popupBackground.addEventListener('click', function () {
        intro.style.display = 'none';
        history.style.display = 'none';
        popupBackground.style.display = 'none';
    });
});
/*----------------------------down------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const Ldown1 = document.querySelector('.L-down1');
    const Ldown2 = document.querySelector('.L-down2');
    const Ldown3 = document.querySelector('.L-down3');
    const clickunder = document.querySelector('.clickunder');
    const popupBackground = document.getElementById('popupBackground');
    const underclose = document.getElementById('2floor-hover-L-under');
    AOS.init();

    Ldown1.addEventListener('click', function () {
        clickunder.style.display = 'block';
        swiper.slideTo(0);
        popupBackground.style.display = 'block';
    })
    Ldown2.addEventListener('click', () => {
        clickunder.style.display = 'block';
        swiper.slideTo(1);
        popupBackground.style.display = 'block';
    });
    Ldown3.addEventListener('click', () => {
        clickunder.style.display = 'block';
        swiper.slideTo(2);
        popupBackground.style.display = 'block';
    });
    popupBackground.addEventListener('click', function () {
        clickunder.style.display = 'none';
    });
    underclose.addEventListener('click', function () {
        clickunder.style.display = 'none';
        popupBackground.style.display = 'none';
    });

});
/*-----------------------------up -----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const Lup1 = document.querySelector('.L-up1');
    const Lup2 = document.querySelector('.L-up2');
    const popupBackground = document.getElementById('popupBackground');
    const clickup = document.querySelector('.clickup');
    const underup = document.getElementById('2floor-hover-L-up');


    Lup1.addEventListener('click', function () {
        clickup.style.display = 'block';
        swiper.slideTo(0);
        popupBackground.style.display = 'block';
    })
    Lup2.addEventListener('click', function () {
        clickup.style.display = 'block';
        swiper.slideTo(1);
        popupBackground.style.display = 'block';
    })
    underup.addEventListener('click', function () {
        clickup.style.display = 'none';
        popupBackground.style.display = 'none';
    });
    popupBackground.addEventListener('click', function () {
        clickup.style.display = 'none';
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const Rimg1 = document.querySelector('.R-img1')
    const Rimg2 = document.querySelector('.R-img2')
    const Rimg3 = document.querySelector('.R-img3')
    const Rimg4 = document.querySelector('.R-img4')
    const popupBackground = document.getElementById('popupBackground');
    const clickR = document.querySelector('.clickR');
    const underR = document.getElementById('2floor-hover-R');

    Rimg1.addEventListener('click', function () {
        clickR.style.display = 'block';
        swiper.slideTo(0);
        popupBackground.style.display = 'block';
    })
    Rimg2.addEventListener('click', function () {
        clickR.style.display = 'block';
        swiper.slideTo(1);
        popupBackground.style.display = 'block';
    })
    Rimg3.addEventListener('click', function () {
        clickR.style.display = 'block';
        swiper.slideTo(2);
        popupBackground.style.display = 'block';
    })
    Rimg4.addEventListener('click', function () {
        clickR.style.display = 'block';
        swiper.slideTo(3);
        popupBackground.style.display = 'block';
    })

    underR.addEventListener('click', function () {
        clickR.style.display = 'none';
        popupBackground.style.display = 'none';
    });
    popupBackground.addEventListener('click', function () {
        clickR.style.display = 'none';
    });

})

var swiper = new Swiper(".mySwiper1", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    /**/
    on: {
        init: function () {
            AOS.refresh(); // 초기화 시 AOS 갱신
        },
        slideChangeTransitionStart: function () {
            AOS.refresh(); // 슬라이드 변경 시 AOS 갱신
        },
    }
});


var swiper = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper3", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


document.addEventListener('DOMContentLoaded', function () {
    const Lclick = document.querySelector('.L-click');
    const Rclick = document.querySelector('.R-click');
    const street = document.querySelector('.street');
    const holywater = document.querySelector('.holywater')
    const popupBackground = document.getElementById('popupBackground');
    const floor3close = document.getElementById('floor3-close');


    Lclick.addEventListener('click', function () {
        street.style.display = 'flex';
        floor3close.style.display = 'block';
        popupBackground.style.display = 'block';
    })
    Rclick.addEventListener('click', function () {
        holywater.style.display = 'block';
        floor3close.style.display = 'block';
        popupBackground.style.display = 'block';
    })
    
    floor3close.addEventListener('click', function () {
        street.style.display = 'none';
        holywater.style.display = 'none';
        floor3close.style.display = 'none';
        popupBackground.style.display = 'none';
    });
    popupBackground.addEventListener('click', function () {
        street.style.display = 'none';
        holywater.style.display = 'none';
        floor3close.style.display = 'none';
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const boxL = document.querySelector('.hoverboxL');
    const boxR = document.querySelector('.hoverboxR');
    const Llight = document.querySelector('.Llight');
    const Rlight = document.querySelector('.Rlight');

    boxL.addEventListener('mouseover', function(){
        Llight.style.display='block';
    })
    boxL.addEventListener('mouseout', function(){
        Llight.style.display='none';
    })
    boxR.addEventListener('mouseover', function(){
        Rlight.style.display='block';
    })
    boxR.addEventListener('mouseout', function(){
        Rlight.style.display='none';
    })
})

/* 처음 화면 */
document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById("animatedBackground");
    const gradation = document.querySelector('.gradaition');
    let positionY = 0;
    let velocity = 0.1; // 초기 속도
    const acceleration = 0.04; // 가속도
    const maxPositionY = 600;
    const startbtn = document.querySelector('.startbtn');
    const startpage = document.querySelector('.startpage');
    const section = document.querySelectorAll('.section');

    
    gradation.style.display = 'none';
    gradation.style.opacity = 0;
    gradation.style.transition = 'opacity 1s';
    

    function animateBackground() {
        if (positionY < maxPositionY) {
            velocity += acceleration;
            positionY += velocity;
            background.style.backgroundPosition = `center -${positionY}px`;
            requestAnimationFrame(animateBackground);
        } else {
            
            gradation.style.display = 'block';
            setTimeout(() => {
                gradation.style.opacity = 1;
            }, 50);
        }
    }


    animateBackground();


    startbtn.addEventListener('mouseenter', function () {
        startbtn.style.background = '#08132f';
        startbtn.style.color='white';
    });
    startbtn.addEventListener('mouseout', function () {
        startbtn.style.background = 'white';
        startbtn.style.color='#000';
    });


    startbtn.addEventListener('click', function () {
        startpage.style.display = 'none';
        section.style.opacity=1;

    });
});

