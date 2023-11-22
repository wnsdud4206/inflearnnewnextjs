// 컴포넌트 위에 만든 이유: 컴포넌트가 리렌더링 되어도 다시 안만들어진다.(state가 수정되거나 하는 경우)
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  // 2. 실무 백엔드 데이터 예제
  // map을 쉽게 생각하는 방법은 맨 처음 데이터만 잘 처리해주면 다음 데이터들의 형태도 모두 같기 때문에 신경쓸 필요 없다.
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
    <>
      <div>{aaa}</div>
      ============================
      <div>{bbb}</div>
      ============================
      <div>
        {/* 3. 실무 효율적인 렌더링 예제 */}
        {/* 실제 실무에서는 변수에 담지않고 바로 화면에 그린다. 해당 변수가 뭐하는 앤지 굳이 찾아가서 보기 번거롭기 때문 */}
        {FRUITS.map((el) => (
          <div>
            {el.number} {el.title}
          </div>
        ))}
      </div>
    </>
  );
}
