import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  // graphql 세팅
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });
  // ApolloClient는 한 번 받아온 데이터는 캐시에 저장해 놓으려는 성격이 있다. 다음에 또 꺼내 쓸 수 있기 때문이다.(더 빨리 데이터를 가져오기 위함인가?)
  // 그래서 이 캐시를 내 컴퓨터 혹은 메모리에 저장할건지 선택할 수 있다.
  // 우리는 메모리에 저장하기 위해 InMemoryCache를 import해왔다.

  // Component에서 사용할 수 있도록 ApolloProvider 컴포넌트로 감싸줘야함
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}