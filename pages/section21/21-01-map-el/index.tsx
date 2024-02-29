export default function MapElPage(): JSX.Element {
  // 1. 기본방법, map은 return이 필요하지만 현재 return 해줄 것이 없기 때문에 return이 필요없는 map인 forEach로 실습
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log(`el: ${el}`);
    console.log(`index: ${index}`);
  });
  /* 
  el: 철수
  index: 0
  el: 영희
  index: 1
  el: 훈이
  index: 2
  */

  // 2. 매개변수 변경한 방법, 이전과 결과는 동일
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log(`el: ${asdf}`);
    console.log(`index: ${qwer}`);
  });
  /* 
  el: 철수
  index: 0
  el: 영희
  index: 1
  el: 훈이
  index: 2
  */

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log(`el: ${asdf}`);
    console.log(`index: ${qwer}`);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log(`el: ${el}`);
    console.log(`index: ${index}`);
  });
  /* 
  el: 0
  index: 철수
  el: 1
  index: 영희
  el: 2
  index: 훈이
  */

  return <></>;
}
