import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 실제 변수는 이 이름이고 useRecoilState에서 isEdit이라는 다른 이름이로 사용하는 것이다.
  default: true, // 초기값, 기본값
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
