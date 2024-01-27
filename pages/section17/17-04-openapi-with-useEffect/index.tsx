import axios from "axios";

export default function RestGetPage() {
  const onClickSync = async (): Promise<void> => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(result.data.message);  // 이미지주소
  }

  return (
    <div>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </div>
  );
}
