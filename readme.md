## 1. 건물 Bottom 기준으로 변경

문제 : 건물에 문이 붙어있어야 하는데 브라우저의 사이즈를 줄이면 위치가 바껴있음
고정px로 처리를 해야함

startimg.style.bottom = `${startimgBottom}%`; // 이것도 고정 px로 해야함함
door.style.bottom = `${doorBottom}px`;

고정px로 처리할때 시작위치가 건물보다 위에 올라가 있는 문제가 있을 수 있음.

- 해결방안 : 건물사진 뒤에 하늘 배경 하나를 더 깔아버리고 건물의 중앙쯤 내려올때 하늘을 display :none 해버리기
  (하늘 배경은 img/sky.jpg로 넣어놓음)

## 2. swiper해결

## 3. style .css로 옮기기
