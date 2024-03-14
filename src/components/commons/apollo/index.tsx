import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// 강의처럼 "@apollo/client": "^3.7.1", "apollo-upload-client": "^17.0.0", "@types/apollo-upload-client": "^17.0.2", 이렇게 해주니까 아래처럼 불러와도 error 없음
import { createUploadLink } from "apollo-upload-client";
// 강의에서는 위 처럼 해줬는데 버전이 달라져서 그런가 최신버전은 아래처럼 해줘야 error가 안생김
// import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

// 보통 이런 상수(변하지 않는 값)는 대문자로 지어주는 것이 좋다.
const GLOBAL_STATE = new InMemoryCache();
/*
최신 트렌드는 globalState를 2개 사용
서버데이터(백엔드에서 받아온 데이터) + 프론트데이터(프론트에서 관리하는 데이터)
REST-API의 경우: ReactQuery + recoil
GraphQL-API의 경우: ApolloClient + recoil
즉, 위에 GLOBAL_STATE = new InMemoryCache()는 백엔드에서 받아온 데이터를 객체형태로 만들어서 new InMemoryCache()에 저장해두는 것
*/

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const result = localStorage.getItem("accessToken");
  console.log(result);
  setAccessToken(result ?? ""); // result || accessToken 으로 해야되는 거 아닌가?

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // 이제 어느 컴포넌트든 API 요청을 보내면 accessToken이 담긴다.
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    )
}
