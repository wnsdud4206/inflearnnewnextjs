import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Container, Header, HeaderMain, Title, User } from "./style";

// https://www.figma.com/file/n9aihmT8tAoo8x4LMACacV/%EC%9E%87%EC%B8%A0%EB%A1%9C%EB%93%9C-FAQ?type=design&node-id=0-1&mode=design&t=xWzVsuVyS5AOmwc3-0

const list = [
  { title: "리뷰 작성은 어떻게 하나요?" },
  { title: "리뷰 수정/삭제는 어떻게 하나요?" },
  { title: "아이디/비밀번호를 잊어버렸어요." },
  { title: "회원탈퇴를 하고싶어요." },
  { title: "출발지 설정은 어떻게 하나요?" },
  { title: "비밀번호를 변경하고 싶어요." },
];

export default function QuizPage() {
  return (
    <Container>
      <Header>
        <SearchOutlined />
        <HeaderMain>
          <Title>마이</Title>
          <User>
            <div>img</div>
            <span>임정아</span>
            <div>icon</div>
          </User>
        </HeaderMain>
      </Header>
      <nav>
        <ul>
          <li>공지사항</li>
          <li>이벤트</li>
          {/* active */}
          <li>FAQ</li>
          <li>Q&A</li>
        </ul>
      </nav>
      <div>
        <ul>
          {list.map((l, i) => {
            return (
              <li>
                <div>
                  <span>Q. 0{i + 1}</span>
                  <p>l.title</p>
                </div>
                <div>
                  <div>
                    <DownOutlined />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <ul>
          <li>
            <div>icon</div>
            <span>홈</span>
          </li>
          <li>
            <div>icon</div>
            <span>잇츠로드</span>
          </li>
          <li>
            <div>icon</div>
            <span>마이찜</span>
          </li>
          <li>
            {/* active */}
            <div>icon</div>
            <span>마이</span>
          </li>
        </ul>
      </footer>
    </Container>
  );
}
