document.addEventListener('DOMContentLoaded', () => {
    const lImg = document.querySelector('.L-img1');
    const shadow = document.querySelector('.shadow');
    const $body = document.querySelector('body');
    const upButton1 = document.querySelector('.up1');   
    const upButton2 = document.querySelector('.up2');   
    const downButton1 = document.querySelector('.down1');
    const downButton2 = document.querySelector('.down2');
    const floor1 = document.querySelector('.floor-1');
    const floor2 = document.querySelector('.floor-2');
    const floor3 = document.querySelector('.floor-3');

    // 초기 스크롤 설정
    floor1.scrollIntoView({ behavior: 'smooth' });

    // L-img hover 이벤트
    lImg.addEventListener('mouseenter', () => {
        lImg.style.transform = 'translateY(-20px)';
        lImg.style.transition = 'transform 0.3s ease';
        shadow.style.width = '80px';
    });

    lImg.addEventListener('mouseleave', () => {
        lImg.style.transform = 'translateY(0)';
        shadow.style.width = '115px';
    });

    // 스크롤 방지 설정
    let scrollBlocked = true;

    function preventScroll(e) {
        if (scrollBlocked) {
            e.preventDefault();
        }
    }

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
    downButton1.addEventListener('click',()=>{
        floor1.scrollIntoView({ behavior: 'smooth' });
    })
    downButton2.addEventListener('click',()=>{
        floor2.scrollIntoView({ behavior: 'smooth' });
    })
});

document.addEventListener('DOMContentLoaded', function () {
        const popupl = document.getElementById('popupL');
        const popupr = document.getElementById('popupR');
        const popupBackground = document.getElementById('popupBackground');
        const closePopupl = document.getElementById('closePopupL');
        const closePopupr = document.getElementById('closePopupR');
        const lImg1 = document.querySelector('.L-img1');
        const rImg1 = document.querySelector('.R-img-fire');

        lImg1.addEventListener('click', function () {
            popupl.style.display = 'block';
            popupBackground.style.display = 'block';
        });
        rImg1.addEventListener('click', function () {
            popupr.style.display = 'block';
            popupBackground.style.display = 'block';
        });

        // X 버튼 클릭 시 팝업 및 배경 숨기기
        closePopupl.addEventListener('click', function () {
            popupl.style.display = 'none';
            popupBackground.style.display = 'none';
        });
        closePopupr.addEventListener('click', function () {
            popupr.style.display = 'none';
            popupBackground.style.display = 'none';
        });

        // 배경 클릭 시 팝업 및 배경 숨기기
        popupBackground.addEventListener('click', function () {
            popupl.style.display = 'none';
            popupr.style.display = 'none';
            popupBackground.style.display = 'none';
        });
    });