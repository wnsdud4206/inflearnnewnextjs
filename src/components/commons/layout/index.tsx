import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import LayoutWrapper from "./wrapper";

// 리렌더링 될 때 불필요하게 다시 만들어지지 않게 컴포넌트 밖에 작성
// router의 asPath 프로퍼티와 HIDDEN_HEADERS를 조건부렌더링으로 비교해서 일치하면 해당 주소에서는 특정 컴포넌트가 보이지 않게
const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];

interface ILayoutProps {
  children: JSX.Element;
}

const LayoutChildren = styled.div`
  width: 79%;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  console.log("=====");
  console.log(router.asPath);
  console.log("=====");
  
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutWrapper>
        <>
          <LayoutSidebar />
          <LayoutChildren>{props.children}</LayoutChildren>
        </>
      </LayoutWrapper>
      <LayoutFooter />
    </>
  );
}
