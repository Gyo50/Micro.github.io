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

    let animationId; // requestAnimationFrame ID 저장
    let isAnimating = false; // 애니메이션 실행 상태 플래그
    let startTime;

   // 애니메이션 로직
function animate(timestamp) {
    if (!startTime) startTime = timestamp; // 처음 시작 시간을 설정
    const duration = 2000; // 2초 (애니메이션 주기)
    const progress = ((timestamp - startTime) % duration) / duration; // 진행 비율 계산
  
    // tw 이미지의 움직임 계산 (위에서 아래로 움직임)
    const bounceHeight = Math.sin(progress * Math.PI) * 30; // 위아래로 움직이는 효과
    lImg.style.top = `calc(57% - ${bounceHeight}px)`;
  
    // 그림자(shadow)의 크기 및 투명도 변경 계산
    const scale = 0.5 + Math.abs(bounceHeight) / 30 * 0.5; // bounceHeight에 따른 스케일 값 변화
    shadow.style.transform = `scale(${scale})`;
    shadow.style.backgroundColor = `rgba(0, 0, 0, ${0.2 + Math.abs(bounceHeight) / 30 * 0.1})`; // 투명도 조정
  
    // 애니메이션 반복
    animationId = requestAnimationFrame(animate);
  }
  

    // 애니메이션 시작 함수
    function startAnimation() {
      if (!isAnimating) {
        isAnimating = true;
        startTime = null; // 애니메이션 시작 시간 초기화
        animationId = requestAnimationFrame(animate); // 애니메이션 시작
      }
    }

    // 애니메이션 정지 함수
    function stopAnimation() {
      isAnimating = false;
      cancelAnimationFrame(animationId); // 애니메이션 중지
      lImg1.style.display = 'none'; // 이미지를 숨김
      lImg2.style.display = 'block'; // 이미지를 다시 표시
      lImg.style.top = '57%'; // 이미지 위치 초기화
      shadow.style.transform = 'scale(1)'; // 그림자 크기 초기화
      shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // 그림자 색상 초기화
    }

    // 마우스를 이미지에 올릴 때
    lImg.addEventListener('mouseenter', () => {
      lImg2.style.display = 'none'; // on 이미지를 숨김
      lImg1.style.display = 'block'; // tw 이미지를 표시
      shadow.style.display = 'block'; // 그림자 표시
      startAnimation(); // 애니메이션 시작
    });

    // 이미지에서 마우스가 벗어날 때
    lImg.addEventListener('mouseleave', stopAnimation);


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
    const popupBackground = document.getElementById('popupBackground');

    // L-down 관련 요소
    const Ldown1 = document.querySelector('.L-down1');
    const Ldown2 = document.querySelector('.L-down2');
    const Ldown3 = document.querySelector('.L-down3');
    const clickunder = document.querySelector('.clickunder');
    const underclose = document.getElementById('2floor-hover-L-under');
    const swiper1 = new Swiper(".mySwiper1", {
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // L-up 관련 요소
    const Lup1 = document.querySelector('.L-up1');
    const Lup2 = document.querySelector('.L-up2');
    const clickup = document.querySelector('.clickup');
    const underup = document.getElementById('2floor-hover-L-up');
    const swiper2 = new Swiper(".mySwiper2", {
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // R-img 관련 요소
    const Rimg1 = document.querySelector('.R-img1');
    const Rimg2 = document.querySelector('.R-img2');
    const Rimg3 = document.querySelector('.R-img3');
    const Rimg4 = document.querySelector('.R-img4');
    const clickR = document.querySelector('.clickR');
    const underR = document.getElementById('2floor-hover-R');
    const swiper3 = new Swiper(".mySwiper3", {
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // **하나의 `showPopup` 함수로 통합 (해당 팝업 내부에서 요소 찾기)**
    function showPopup(index, clickElement, swiperInstance) {
        clickElement.style.display = 'block';
        popupBackground.style.display = 'block';

        // 해당 팝업 내부에서 swiper 요소 찾기
        const swiperBack = clickElement.querySelector('.swiper-back');
        const swiperFront = clickElement.querySelector('.swiper-front');
        const swiperWrapper = clickElement.querySelector('.swiper-wrapper');

        if (!swiperBack || !swiperFront || !swiperWrapper) {
            console.error("swiper 요소를 찾을 수 없음:", clickElement);
            return;
        }

        // 초기 숨김 설정
        swiperBack.style.opacity = '0';
        swiperFront.style.opacity = '0';
        swiperWrapper.style.opacity = '0';

        setTimeout(() => {
            swiperBack.style.transition = 'opacity 0.5s ease-in-out';
            swiperBack.style.opacity = '1';
        }, 100); // 0.1초 후 back 등장

        setTimeout(() => {
            swiperFront.style.transition = 'opacity 0.5s ease-in-out';
            swiperFront.style.opacity = '1';
        }, 600); // 0.6초 후 front 등장

        setTimeout(() => {
            swiperWrapper.style.transition = 'opacity 0.5s ease-in-out';
            swiperWrapper.style.opacity = '1';
            swiperInstance.slideTo(index);
        }, 1100); // 1.1초 후 slide 등장
    }


    function hidePopup(clickElement) {
        clickElement.style.display = 'none';
        popupBackground.style.display = 'none';


        const swiperBack = clickElement.querySelector('.swiper-back');
        const swiperFront = clickElement.querySelector('.swiper-front');
        const swiperWrapper = clickElement.querySelector('.swiper-wrapper');

        if (!swiperBack || !swiperFront || !swiperWrapper) {
            console.error("swiper 요소를 찾을 수 없음:", clickElement);
            return;
        }


        swiperBack.style.opacity = '0';
        swiperFront.style.opacity = '0';
        swiperWrapper.style.opacity = '0';
    }


    Ldown1.addEventListener('click', () => showPopup(0, clickunder, swiper1));
    Ldown2.addEventListener('click', () => showPopup(1, clickunder, swiper1));
    Ldown3.addEventListener('click', () => showPopup(2, clickunder, swiper1));
    
    Lup1.addEventListener('click', () => showPopup(0, clickup, swiper2));
    Lup2.addEventListener('click', () => showPopup(1, clickup, swiper2));
    
    Rimg1.addEventListener('click', () => showPopup(0, clickR, swiper3));
    Rimg2.addEventListener('click', () => showPopup(1, clickR, swiper3));
    Rimg3.addEventListener('click', () => showPopup(2, clickR, swiper3));
    Rimg4.addEventListener('click', () => showPopup(3, clickR, swiper3));


    popupBackground.addEventListener('click', () => {
        hidePopup(clickunder);
        hidePopup(clickup);
        hidePopup(clickR);
    });

    underclose.addEventListener('click', () => hidePopup(clickunder));
    underup.addEventListener('click', () => hidePopup(clickup));
    underR.addEventListener('click', () => hidePopup(clickR));
});



document.addEventListener('DOMContentLoaded', function () {
        const Lclick = document.querySelector('.L-click');
        const Rclick = document.querySelector('.R-click');
        const popupBackground = document.getElementById('popupBackground');
        const floorback1 = document.getElementById('floor3-pop-back1');
        const floorback2 = document.getElementById('floor3-pop-back2');
        const street = document.querySelector('.street')
        const holywater = document.querySelector('.holywater')
        const floor3close1 = document.getElementById('floor3-close1');
        const floor3close2 = document.getElementById('floor3-close2');


        Lclick.addEventListener('click', function () {
            floorback1.style.display = 'block';
            popupBackground.style.display = 'block';
            popupBackground.style.pointerEvents = 'none'
        })
        Rclick.addEventListener('click', function () {
            floorback2.style.display = 'block';
            popupBackground.style.display = 'block';
            popupBackground.style.pointerEvents = 'none'
        })
        
        floor3close1.addEventListener('click', function () {
            floorback1.style.display = 'none';
            popupBackground.style.display = 'none';
        });
        floor3close2.addEventListener('click', function () {
            floorback2.style.display = 'none';
            popupBackground.style.display = 'none';
        });
        
        floorback1.addEventListener('mousemove', (e) => {

            const Rect = floorback1.getBoundingClientRect();
      
            const CenterX = Rect.left + Rect.width / 2;
            const CenterY = Rect.top + Rect.height / 2;
      
            const mouseX = e.clientX;
            const mouseY = e.clientY;
      
            const deltaX = mouseX - CenterX;
            const deltaY = mouseY - CenterY;
      
            const rotateX = (deltaY / Rect.height) * 30;
            const rotateY = (deltaX / Rect.width) * -30; 
      
            street.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
      
          floorback1.addEventListener('mouseleave', () => {
            street.style.transform = 'translate(-50%, -50%)rotateX(0deg) rotateY(0deg)';
          });
        floorback2.addEventListener('mousemove', (e) => {

            const Rect = floorback2.getBoundingClientRect();
      
            const CenterX = Rect.left + Rect.width / 2;
            const CenterY = Rect.top + Rect.height / 2;
      
            const mouseX = e.clientX;
            const mouseY = e.clientY;
      
            const deltaX = mouseX - CenterX;
            const deltaY = mouseY - CenterY;
      
            const rotateX = (deltaY / Rect.height) * 25;
            const rotateY = (deltaX / Rect.width) * -25; 
      
            holywater.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });
      
          floorback2.addEventListener('mouseleave', () => {
            holywater.style.transform = 'translate(-50%, -50%)rotateX(0deg) rotateY(0deg)';
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
    const startimg = document.getElementById("startimg");
    const gradation = document.querySelector('.gradaition');
    const startbtn = document.querySelector('.startbtn');
    const startpage = document.querySelector('.startpage');
    const door = document.querySelector('.door');
    const doorL = document.querySelector('.door-L');
    const doorR = document.querySelector('.door-R');
    const waterFill = document.querySelector('.water-fill');
    const Lodiong = document.querySelector('.Loding');

    let isClicked = false; 

    waterFill.addEventListener('animationend', () => {
        Lodiong.style.display = 'none';
        startpage.style.display = 'block';
        animateBackground();
    });

    let positionY = 0;
    let velocity = 0.01; // 초기 속도
    const maxVelocity = 6; // 최대 속도
    const acceleration = 0.12; // 가속도
    const deceleration = 0.99; // 감속 계수
    const maxPositionY = 595;

    gradation.style.display = 'none';
    gradation.style.opacity = 0;
    gradation.style.transition = 'opacity 1s';
    startpage.style.position = 'absolute';

    function animateBackground() {
        if (positionY < maxPositionY) {
            if (positionY < maxPositionY / 3) {
                velocity = Math.min(velocity + acceleration, maxVelocity);
            } else {
                velocity *= deceleration;
            }
            positionY += velocity;

            let translateYValue = -31 + ((-69 + 31.5) * (positionY / maxPositionY));
            let doorTranslateY = 100 - ((100 + 23) * (positionY / maxPositionY));

            startimg.style.transform = `translate(-50%, ${translateYValue}%)`;
            door.style.transform = `translate(-50%, ${doorTranslateY}%)`;

            requestAnimationFrame(animateBackground);
        } else {
            gradation.style.display = 'block';
            setTimeout(() => {
                gradation.style.opacity = 1;
            }, 50);
        }
    }


    startbtn.addEventListener('mouseenter', function () {
        if (!isClicked) {
            startbtn.style.background = '#08132f';
            startbtn.style.color = 'white';
            doorL.style.transition = "transform 0.5s";
            doorL.style.transformOrigin = "left";
            doorL.style.transform = "rotateY(70deg)";
            doorR.style.transition = "transform 0.5s";
            doorR.style.transformOrigin = "right";
            doorR.style.transform = "rotateY(70deg)";
        }
    });


    startbtn.addEventListener('mouseout', function () {
        if (!isClicked) {
            startbtn.style.color = '#000';
            startbtn.style.background = '#fff';
            doorL.style.transform = "rotateY(0deg)";
            doorR.style.transform = "rotateY(0deg)";
        }
    });

    startbtn.addEventListener('click', () => {
        isClicked = true;
        animateDoorOpen();
        animateStartPageScale();
    });

    function animateDoorOpen() {
        doorL.style.transition = 'transform 1s ease-in-out';
        doorR.style.transition = 'transform 1s ease-in-out';

        doorL.style.transform = 'rotateY(70deg)';
        doorR.style.transform = 'rotateY(70deg)';
    }

    function animateStartPageScale() {
        let scaleValue = 1;
        let bottomValue = 12;
        let opacityValue = 1;

        function scaleUp() {
            if (scaleValue < 2) {
                scaleValue += 0.01;
                bottomValue += (305 - 12) / ((4 - 1) / 0.02); 

                startpage.style.transform = `scale(${scaleValue})`;
                startpage.style.bottom = `${bottomValue}px`;

                requestAnimationFrame(scaleUp);
            } else {
                fadeOutStartPage();
            }
        }

        function fadeOutStartPage() {
            function fade() {
                if (opacityValue > 0) {
                    opacityValue -= 0.02;
                    startpage.style.opacity = opacityValue;
                    requestAnimationFrame(fade);
                } else {
                    startpage.style.display = 'none';
                }
            }
            fade();
        }

        scaleUp();
    }
});

// perspective-origin: 50% -100%;
// transform-origin: bottom;
// transform: rotateX(-120deg);