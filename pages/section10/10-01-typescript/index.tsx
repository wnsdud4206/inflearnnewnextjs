export default function TypescriptPage() {
  // 타입추론
  let aaa = "Hello";
  // aaa = 3;, error, aaa: string 이라고 해준 것도 아닌데 숫자타입의 데이터는 할당해줄 수 없다.
  // 이것은 "타입추론"에 의해서 "Hello"라는 값의 type을 추론하여 aaa 변수의 타입으로 명시해준 것이다. 즉, 처음에 할당된 값을 가지고 그 값의 type을 추론하여 자동으로 명시해준 것이다.

  // 타입명시
  let bbb: string = "Hi";
  // bbb = 10;, error, 이렇게만 보명 굳이 타입명시를 해줄 필요가 없어보인다고 생각할 수도 있다. 아래의 타입명시가 필요한 상황을 보자.

  // 타입명시가 필요한 상황
  // let ccc = 1000;
  // 이후 ccc = "1000원" 으로 값을 수정하고 싶을 때 이미 ccc는 number타입으로 추론이 되어버렸기 때문에 string타입의 값이 들어올 수 없다.
  // 이럴 경우 number타입도 되고 string 타입도 들어올 수 있도록 명시해주어야 한다. 타입추론만으로는 2개의 타입을 명시해줄 수 없기 때문에 타입명시가 필요한 상황이다. 그리고 협업할 때 다른 사람이 봤을 때도 이 변수에 어떤 타입이 명시되었는지 알 수 있도록 타입추론보다는 타입명시를 해주는 것이 더 좋아보인다.(물론 회사마다 명시를 해주는 곳도 있고 아닌 곳도 있다.) 강의에서는 추론으로 끝나도 괜찮은 상황에서는 타입추론으로 둬도 괜찮고 이렇게 타입명시가 필요한 상황에서는 타입을 명시해주는 것이 좋다고 한다.
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  // ddd = "철수";, error, 맨 처음에 10이란 값의 타입인 number가 ddd변수의 타입으로 추론되었기 때문에 number이외의 값을 할당되지 않음

  // 불린타입
  let eee: boolean = true;
  eee = false;  // 가능
  // eee = "false", error, 주의할 점이 만약 "false"값을 가진 eee를 if(eee) ... 이렇게 실행한다면 if문의 내용이 실행됐을 것이다. 왜냐면 "false"는 boolean타입의 false가 아닌 문자열의 "false"이고 빈문자열이 아닌 채워진 문자열은 truthy한 값으로 인식되기 때문이다.

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "Hi"];  // 문자열은 넣을 수 없음
  // let fff: Array<number | string> = [1, 2, "D"];  // number, string타입 순서 없이
  let ggg: string[] = ["철수", "영희", "훈이", 1];  // 숫자열은 넣을 수 없음
  // 타입을 어떻게 명시해야 할지 모를 때는 일단 넣어보고 마우스로 올려보고 참고하여 명시하기
  // let hhh = ["철수", "영희", "훈이", 10];  // 값을 입력하고 hhh변수에 마우스를 올려보면 (string | number)[] 이렇게 타입이 추론되었다고 알려준다.
  let hhh: (string | number)[] = ["영희", "철수", 10];  // 위 Array<number | string>이랑 같지만 이 방법이 더 쉬워보임

  // 객체타입
  const profile = {   // 배열타입과 마찬가지로 타입추론을 하여 타입을 명시해줄 수 있다.
    name: "철수",
    age: 5,
    school: "떡잎유치원"
  };
  profile.name = "훈이";  // 타입추론으로 인해 이것만 가능
  // profile.age = "5살";  // error, age는 이미 number타입 명시됨
  // profile.hobby = "수영";  // error,profile 객체에 hobby가 없기때문에 추가하는 것도 안됨

  // interface를 사용해서 객체의 타입 만들기
  interface IProfile2 {
    name: string
    age: number | string
    school: string
    hobby: string
  }
  const profile2: IProfile2 = {
    name: "철수",
    age: 5,
    school: "떡잎유치원"
    // IProfile2의 hobby가 없어서 error
  }
  profile2.name = "훈이";
  profile2.age = "5살";
  profile2.hobby = "수영";
  // 지금같은 경우는 hobby가 처음엔 없다가 추가가 되어야 하는 상황이다. 이럴 경우 IProfile2의 hobby에 hobby? 처럼 물음표를 붙여주면 선택적으로 hobby가 있어도 되고 없어도 되도록 만들어 주어야 한다.
  // 옳바른 방식
  interface IProfile3 {
    name: string
    age: number | string
    school: string
    hobby?: string
  }
  const profile3: IProfile3 = {
    name: "철수",
    age: 5,
    school: "떡잎유치원"
    // IProfile3의 hobby가 없어도 괜찮
  }
  profile3.name = "훈이";
  profile3.age = "5살";
  profile3.hobby = "수영";

  // 함수타입(가장중요)
  // 함수의 타입은 크게 인자의 타입들, return 값의 타입 이 두가지를 명시해주어야한다.
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");  // add에 마우스를 올려보면 인자들의 타입추론을 참고할 수 있고, result에 마우스를 올려보면 add함수가 return하는 타입추론을 참고할 수 있다.

  // 화살표함수
  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  }
  const result2 = add2(1000, 2000, "원");

  // any타입, 아무 타입이나 입력 가능, JavaScript와 동일하다고 봐도 됨
  // 어떤 타입을 명시해줘야 할지 모를 때 어쩔 수 없이 사용하는 느낌?
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;
  
  return (
    <></>
  );
}