document.addEventListener("DOMContentLoaded", () => {
  const lImg = document.querySelector(".L-img");
  const lImg1 = document.querySelector(".L-img1");
  const lImg2 = document.querySelector(".L-img2");
  const shadow = document.querySelector(".shadow");
  const $body = document.querySelector("body");
  const upButton1 = document.querySelector(".up1");
  const upButton2 = document.querySelector(".up2");
  const downButton1 = document.querySelector(".down1");
  const downButton2 = document.querySelector(".down2");
  const floor1 = document.querySelector(".floor-1");
  const floor2 = document.querySelector(".floor-2");
  const floor3 = document.querySelector(".floor-3");
  const fireimg = document.querySelector(".fire-img");
  const firehover = document.querySelector(".fire-hover");

  let currentSection = floor1;

  floor1.scrollIntoView();

  // 현재 보이는 섹션을 찾아서 감지한다음에
  function getCurrentSection() {
    const sections = [floor1, floor2, floor3];
    const windowCenter = window.innerHeight / 2;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
        return section;
      }
    }
    // 일단 기본값을 floor1로 해놨습니다.
    return floor1;
  }

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      currentSection = getCurrentSection();
      currentSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });

  function updateCurrentSection(section) {
    currentSection = section;
  }

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
    const scale = 0.5 + (Math.abs(bounceHeight) / 30) * 0.5; // bounceHeight에 따른 스케일 값 변화
    shadow.style.transform = `scale(${scale})`;
    shadow.style.backgroundColor = `rgba(0, 0, 0, ${0.2 + (Math.abs(bounceHeight) / 30) * 0.1
      })`; // 투명도 조정

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
    lImg1.style.display = "none"; // 이미지를 숨김
    lImg2.style.display = "block"; // 이미지를 다시 표시
    lImg.style.top = "57%"; // 이미지 위치 초기화
    shadow.style.transform = "scale(1)"; // 그림자 크기 초기화
    shadow.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // 그림자 색상 초기화
  }

  // 마우스를 이미지에 올릴 때
  lImg.addEventListener("mouseenter", () => {
    lImg2.style.display = "none"; // on 이미지를 숨김
    lImg1.style.display = "block"; // tw 이미지를 표시
    shadow.style.display = "block"; // 그림자 표시
    startAnimation(); // 애니메이션 시작
  });

  // 이미지에서 마우스가 벗어날 때
  lImg.addEventListener("mouseleave", stopAnimation);

  const fireElement = document.querySelector(".fire");
  const fireContainer = document.querySelector(".R-img-fire");
  const backfire = document.querySelector(".back-fire");

  fireContainer.addEventListener("mouseenter", () => {
    backfire.style.display = "block";
    fireElement.style.display = "block";
    fireimg.style.display = "none";
    firehover.style.display = "block";
  });

  fireContainer.addEventListener("mouseleave", () => {
    backfire.style.display = "none";
    fireElement.style.display = "none";
    fireimg.style.display = "block";
    firehover.style.display = "none";
  });

  $body.addEventListener("wheel", preventScroll, { passive: false });

  $body.addEventListener("click", () => {
    scrollBlocked = false;
  });

  upButton1.addEventListener("click", () => {
    floor2.scrollIntoView({ behavior: "smooth" });
    updateCurrentSection(floor2);
  });
  upButton2.addEventListener("click", () => {
    floor3.scrollIntoView({ behavior: "smooth" });
    updateCurrentSection(floor3);
  });
  downButton1.addEventListener("click", () => {
    floor1.scrollIntoView({ behavior: "smooth" });
    updateCurrentSection(floor1);
  });
  downButton2.addEventListener("click", () => {
    floor2.scrollIntoView({ behavior: "smooth" });
    updateCurrentSection(floor2);
    
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const history = document.getElementById("history");
  const popupBackground = document.getElementById("popupBackground");
  const closepopup = document.querySelector(".popup-close");
  const lImg1 = document.querySelector(".L-img1");
  const rImg1 = document.querySelector(".R-img-fire");

  lImg1.addEventListener("click", function () {
    intro.style.display = "block";
    popupBackground.style.display = "block";
    closepopup.style.display = "block";
  });
  rImg1.addEventListener("click", function () {
    history.style.display = "block";
    popupBackground.style.display = "block";
    closepopup.style.display = "block";
  });

  closepopup.addEventListener("click", function () {
    intro.scrollTop = 0;
    history.scrollTop = 0;
    intro.style.display = "none";
    history.style.display = "none";
    popupBackground.style.display = "none";
    closepopup.style.display = "none";
  });
});



/*----------------------------swiper------------------------*/


document.addEventListener("DOMContentLoaded", () => {
  const popupBackground = document.getElementById("popupBackground");

  // L-down 관련 요소
  const LdownItems = document.querySelectorAll(".L-down1, .L-down2, .L-down3");
  const clickunder = document.querySelector(".clickunder");
  const underclose = document.getElementById("2floor-hover-L-under");
  const swiper1 = new Swiper(".mySwiper1", {
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  // L-up 관련 요소
  const LupItems = document.querySelectorAll(".L-up1, .L-up2");
  const clickup = document.querySelector(".clickup");
  const underup = document.getElementById("2floor-hover-L-up");
  const swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  // R-img 관련 요소
  const RimgItems = document.querySelectorAll(".R-img1, .R-img2, .R-img3, .R-img4");
  const clickR = document.querySelector(".clickR");
  const underR = document.getElementById("2floor-hover-R");
  const swiper3 = new Swiper(".mySwiper3", {
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  function animateTransBox(transBox, duration, callback) {
    let startTime;
    
    function animate(time) {
      if (!startTime) startTime = time;
      let progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;
  
      // 🛠️ border & transform 값 변경
      transBox.style.borderBottom = `${444 - progress * 168}px solid #303030`; // 468px → 300px
      transBox.style.borderLeft = `${progress * 20}px solid transparent`; // 0px → 20px
      transBox.style.borderRight = `${progress * 20}px solid transparent`; // 0px → 20px
      transBox.style.top = `${83.5 - progress * 7.5}%`; // 83.5% → 77.5% 76
      transBox.style.transform = `translate(-50%, -50%) rotateX(${180 - progress * 180}deg)`; // 180deg → 0deg
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (callback) {
        callback();
      }
    }
  
    requestAnimationFrame(animate);
  }

  function fadeIn(element, duration) {
    let startTime;

    function animate(time) {
      if (!startTime) startTime = time;
      let progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;
      element.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  function openPopup(swiperInstance, parentElement, index) {
    popupBackground.style.display = "block";
    parentElement.style.display = "block";

    // 🛠️ 해당 parentElement 내부에서 요소 찾기
    const hoverClose = parentElement.querySelector(".hover-close");
    const swiperBackImg = parentElement.querySelector(".swiper-backimg");
    const swiperBack = parentElement.querySelector(".swiper-back");
    const swiperFront = parentElement.querySelector(".swiper-front");
    const swiperWrapper = parentElement.querySelector(".swiper-wrapper");
    const swiperPagination = parentElement.querySelector(".swiper-pagination");
    const transBox = parentElement.querySelector(".trans-openbox");

    if (hoverClose && swiperBackImg && swiperBack && swiperFront && swiperWrapper && swiperPagination && transBox) {
      hoverClose.style.opacity = "0";
      swiperBackImg.style.opacity = "1";
      swiperBack.style.opacity = "0";
      swiperFront.style.opacity = "0";
      swiperWrapper.style.opacity = "0";
      swiperPagination.style.opacity = "0";
      transBox.style.opacity = "1";

      // 🌀 JavaScript 애니메이션으로 실행
      animateTransBox(transBox, 1000, () => {
        fadeIn(swiperBack, 500);
        setTimeout(() => fadeIn(swiperFront, 500), 300);
        setTimeout(() => fadeIn(swiperWrapper, 500), 600);
        setTimeout(() => fadeIn(swiperPagination,  500), 900);
        setTimeout(() => fadeIn(hoverClose,  500), 900);
      });

      // 🔥 Swiper 클릭한 버튼에 맞게 슬라이드 이동
      swiperInstance.slideTo(index, 0);
    }
  }

  function closePopup(parentElement) {
    popupBackground.style.display = "none";
    parentElement.style.display = "none";
  }

  // L-down 이벤트 추가 (클릭한 요소의 인덱스 값 넘김)
  LdownItems.forEach((item, index) => {
    item.addEventListener("click", () => openPopup(swiper1, clickunder, index));
  });

  // L-up 이벤트 추가
  LupItems.forEach((item, index) => {
    item.addEventListener("click", () => openPopup(swiper2, clickup, index));
  });

  // R-img 이벤트 추가
  RimgItems.forEach((item, index) => {
    item.addEventListener("click", () => openPopup(swiper3, clickR, index));
  });

  // 팝업 닫기
  underclose.addEventListener("click", () => closePopup(clickunder));
  underup.addEventListener("click", () => closePopup(clickup));
  underR.addEventListener("click", () => closePopup(clickR));
  popupBackground.addEventListener("click", () => {
    closePopup(clickunder);
    closePopup(clickup);
    closePopup(clickR);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const Lclick = document.querySelector(".L-click");
  const Rclick = document.querySelector(".R-click");
  const popupBackground = document.getElementById("popupBackground");
  const popupclose = document.querySelector('.popup-close');
  const floorback1 = document.getElementById("floor3-pop-back1");
  const floorback2 = document.getElementById("floor3-pop-back2");
  const street = document.querySelector(".street");
  const holywater = document.querySelector(".holywater");
  const floor3close1 = document.getElementById("floor3-close1");
  const floor3close2 = document.getElementById("floor3-close2");

  Lclick.addEventListener("click", function () {
    floorback1.style.display = "block";
    popupBackground.style.display = "block";
    popupclose.style.display = 'none';
    popupBackground.style.pointerEvents = "none";
  });
  Rclick.addEventListener("click", function () {
    floorback2.style.display = "block";
    popupBackground.style.display = "block";
    popupclose.style.display = 'none';
    popupBackground.style.pointerEvents = "none";
  });

  floor3close1.addEventListener("click", function () {
    floorback1.style.display = "none";
    popupBackground.style.display = "none";
  });
  floor3close2.addEventListener("click", function () {
    floorback2.style.display = "none";
    popupBackground.style.display = "none";
  });

  floorback1.addEventListener("mousemove", (e) => {
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

  floorback1.addEventListener("mouseleave", () => {
    street.style.transform = "translate(-50%, -50%)rotateX(0deg) rotateY(0deg)";
  });
  floorback2.addEventListener("mousemove", (e) => {
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

  floorback2.addEventListener("mouseleave", () => {
    holywater.style.transform =
      "translate(-50%, -50%)rotateX(0deg) rotateY(0deg)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const boxL = document.querySelector(".hoverboxL");
  const boxR = document.querySelector(".hoverboxR");
  const Llight = document.querySelector(".Llight");
  const Rlight = document.querySelector(".Rlight");

  boxL.addEventListener("mouseover", function () {
    Llight.style.display = "block";
  });
  boxL.addEventListener("mouseout", function () {
    Llight.style.display = "none";
  });
  boxR.addEventListener("mouseover", function () {
    Rlight.style.display = "block";
  });
  boxR.addEventListener("mouseout", function () {
    Rlight.style.display = "none";
  });
});



/* 처음 화면 */

document.addEventListener("DOMContentLoaded", () => {

  const waveElement = document.querySelector(".wave");
  const waveStrokeElement = document.querySelector(".wave-stroke");
  const startimg = document.getElementById("startimg");
  const gradation = document.querySelector('.gradaition');
  const startbtn = document.querySelector('.startbtn');
  const startpage = document.querySelector('.startpage');
  const door = document.querySelector('.door');
  const doorL = document.querySelector('.door-L');
  const doorR = document.querySelector('.door-R');
  const Lodiong = document.querySelector('.Loding');


  let isClicked = false;
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


  function createWave() {
    let phase = 0;
    let hei = 0;

    function updateWave() {
      const width = 130;
      const height = 160;
      const amplitude = 10;
      const frequency = 0.05;

      let path = `M 0 ${height}`;
      let y;


      for (let x = 0; x <= width; x++) {
        y = height - hei + Math.sin(x * frequency + phase) * amplitude;
        path += ` L ${x} ${y}`;
      }


      path += ` L ${width} ${height} L 0 ${height}`;


      waveElement.setAttribute("d", path);
      waveStrokeElement.setAttribute("d", path);


      phase += 0.1;


      if (hei < 170) {
        hei += 0.65;
        requestAnimationFrame(updateWave);
      } else {

        Lodiong.style.display = 'none';
        startpage.style.display = 'block';
        animateBackground();
      }
    }

    updateWave();
  }


  function animateBackground() {
    let startimgBottom = -590;
    let doorBottom = -466;

    const doorMaxBottom = 113 - (-466);
    const startImgMaxBottom = 0 - (-590);

    const speedRatio = doorMaxBottom / startImgMaxBottom;

    function animate() {
      if (startimgBottom < 0 || doorBottom < 113) {
        if (startimgBottom < 0) startimgBottom += 3.5;
        if (doorBottom < 113) doorBottom += 3.5 * speedRatio;

        startimg.style.bottom = `${startimgBottom}px`;
        door.style.bottom = `${doorBottom}px`;

        requestAnimationFrame(animate);
      } else {
        gradation.style.display = 'block';
        setTimeout(() => {
          gradation.style.opacity = 1;
        }, 50);
      }
    }

    animate();
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
  createWave();
  window.addEventListener("load", createWave);
});


document.addEventListener("DOMContentLoaded", () => {
  const counter = ($counter, max) => {
    let now = max;

    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);

      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }

      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;

      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 30);
  }

  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".loding-number");

    // 목표 수치
    const max = 100;

    setTimeout(() => counter($counter, max), 500);
  }
});



