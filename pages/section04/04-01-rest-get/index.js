import axios from "axios";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);  // Promise {<pending>}
  }

  // 함수 중복선언 문제
  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");
  //   console.log(result);  // {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
  //   console.log(result.data.id);  // 1
  // }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);  // {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    console.log(result.data.id);  // 1
  }

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </div>
  );
}
