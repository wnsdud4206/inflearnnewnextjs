import { useState } from "react";

export default function SignupStatePage() {
  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = ({target: {value}}) => {
    setEmail(value);
  };
  const onChangePassword = ({target: {value}}) => {
    setPassword(value);
  };
  */

  const [signup, setSignup] = useState({ email: "", password: "" });
  const [errorText, setErrorText] = useState({
    emailError: "",
    passwordError: "",
  });

  const onChangeSignup = ({ target: { id, value } }) => {
    setSignup({ ...signup, [id]: value });
  };

  const onClickSignup = () => {
    // 1. 검증하기
    if (!signup.email.includes("@")) {
      // setSignup((prev) => {
      //   prev.emailError = "이메일이 올바르지 않습니다.";
      // });
      setErrorText({ ...errorText, emailError: "이메일이 올바르지 않습니다." });
      return;
    } else if (signup.password.length < 6) {
      setErrorText({
        emailError: "",
        passwordError: "비밀번호를 6글자 이상 입력해주세요.",
      });
      return;
    }
    // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API) => 나중에
    // 3. 성공알림 보여주기
    setSignup({ email: "", password: "" });
    setErrorText({ emailError: "", passwordError: "" });
    alert("회원가입 성공");
  };

  // prettier-ignore
  return (
    <div>
      이메일:{" "}
      <input
        id="email"
        type="text"
        value={signup.email}
        onChange={onChangeSignup}
      />
      {errorText.emailError && (
        <div id="emailErrorText" style={{ color: "red" }}>
          {errorText.emailError}
        </div>
      )}
      비밀번호:{" "}
      <input
        id="password"
        type="password"
        value={signup.password}
        onChange={onChangeSignup}
      />
      {errorText.passwordError && (
        <div id="passwordErrorText" style={{ color: "red" }}>
          {errorText.passwordError}
        </div>
      )}
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
