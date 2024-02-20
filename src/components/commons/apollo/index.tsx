import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// 강의처럼 "@apollo/client": "^3.7.1", "apollo-upload-client": "^17.0.0", "@types/apollo-upload-client": "^17.0.2", 이렇게 해주니까 아래처럼 불러와도 error 없음
import { createUploadLink } from "apollo-upload-client";
// 강의에서는 위 처럼 해줬는데 버전이 달라져서 그런가 아래처럼 해줘야 error가 안생김
// import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });
  /*
  const errorLink
  const authLink
  이렇게 나중에는 uploadLink, errorLink, authLink 등을 배열로 묶어 아래의 ApolloClient 안에 등록하는 방식을 사용하게 된다.
  */

  const client = new ApolloClient({
    link: ApolloLink.from(uploadLink),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    )
}
