import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage() {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");
    // 내 firestore의 정보를 토대로 board 컬렉션을 가져오겠다는 의미, 없으면 undefined

    // addDoc 요청을 보내고 응답을 기다리고 싶으면 await, 아니면 void
    void addDoc(board, {
      writer: "joka",
      title: "hello",
      contents: "hi",
    }); // board 컬렉션에 두번째 인자인 document를 넣는다는 의미
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");

    // getDoc은 문서 하나, getDocs는 문서 여러개 가져와 달라는 요청이다. 이것도 응답을 기다리면 await, 아니면 void
    const result = await getDocs(board);

    // el.data()를 해야 꺼내올 수 있음
    const datas = result.docs.map((el) => el.data());

    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록</button>
      <button onClick={onClickFetch}>조회</button>
    </>
  );
}
