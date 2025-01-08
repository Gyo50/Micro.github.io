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
    // 스크롤 방지 설정
    let scrollBlocked = true;

    function preventScroll(e) {
        if (scrollBlocked) {
            e.preventDefault();
        }
    }

    lImg.addEventListener('mouseenter', () => {
        lImg.style.transform = 'translateY(-20px)';
        lImg.style.transition = 'transform 0.3s ease';
        shadow.style.width = '80px';
    });

    lImg.addEventListener('mouseleave', () => {
        lImg.style.transform = 'translateY(0)';
        shadow.style.width = '115px';
    });
    const fireElement = document.querySelector('.fire');
    const fireContainer = document.querySelector('.R-img-fire');
    
    fireContainer.addEventListener('mouseenter', () => {
        fireElement.style.display = 'block';
    });

    fireContainer.addEventListener('mouseleave', () => {
        fireElement.style.display = 'none';
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
    downButton1.addEventListener('click',()=>{
        floor1.scrollIntoView({ behavior: 'smooth' });
    })
    downButton2.addEventListener('click',()=>{
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
    document.addEventListener('DOMContentLoaded', function () {
        const Ldown1 = document.querySelector('.L-down1');
        // const Ldown2 = document.querySelector('.L-down2');
        // const Ldown3 = document.querySelector('.L-down3');


    });