export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile>
// IProfile 타입안의 타입들을 모두 있어도 되고 없어도 되는 선택적 타입으로 만들어준다.

// 2. Required 타입
type bbb = Required<IProfile>
// Partial 타입과 반대로 모든 내용을 필수적인 타입으로 만들어준다.

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">
// IProfile에서 name과 age만 가져와서 새로운 타입을 만들어준다. 해당 타입에서 지가 선택한 타입만 가져오는 타입이다.

// 4. Omit 타입
type ddd = Omit<IProfile, "school">
// Pick 타입과는 반대로 IProfile에서 내가 선택한 것만 제외하고 나머지를 가져오는 타입이다.

// 5. Record 타입, Union타입을 이용해서 Record 타입 사용
type eee = "철수" | "영희" | "훈이" // Union 타입, 선택적 고정값?
let child1: eee = "철수"  // "철수", "영희", "훈이"만 할당할 수 있음
let child2: string = "사과" // Union 타입과의 차이, "철수", "영희", "훈이" 이외의 모든 문자열 값이 할당될 수 있음

type fff = Record<eee, IProfile>  // Record 타입, 철수, 영희, 훈이가 각각의 key가 되고 각각 IProfile이라는 타입이 명시된다.
/*
type fff = {
  철수: IProfile;
  영희: IProfile;
  훈이: IProfile;
}
*/

// 6. keyof, 객체의 key들로 Union 타입만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "age"; // "name", "age", "school", "hobby" 라는 값만 할당할 수 있음

// 7. type과 interface의 차이 => interface는 선언병합 가능
// type은 interface처럼 선언병합할 수 없다.
export interface IProfile {
  candy: number  // 기존의 IProfile에서 선언병합으로 candy라는 것이 추가됨
}

// 8. 활용
let profile: Partial<IProfile> = {
  candy: 10
}