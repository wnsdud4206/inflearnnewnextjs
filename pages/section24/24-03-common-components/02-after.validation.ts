import * as yup from "yup";

// 검증할 조건, 기존엔 writer의 경우 빈문자열이면 작성자를 입력해달라는 alert으로 알림, type도 명시
// .string()은 문자열, required()는 필수값으로 지정
// yup.string().required() 이런식으로 하면 기존에 if문으로 비어있으면 error 메시지를 출력해주는 로직이 전부 추가가 된 것이다., 즉, writer error, setWriterError, onChangeWriterError 이런 것들을 if문으로 검증하는 코드가 이 한줄에 다 들어가 있는 것이다.
// 어떤 식으로 사용하는지 대충 이해됨
// 구조가 잡혀있다는 의미에서 schema라는 변수명으로 작명
export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요.(writer 필수 입력)"),
  title: yup.string().required("제목를 입력해주세요.(title 필수 입력)"),
  contents: yup.string().required("내용를 입력해주세요.(contents 필수 입력)"),

  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 회소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력입니다."),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰번호 형식에 맞지 않습니다.")
    .required("휴대폰번호는 필수 입력입니다."),
});
// 위에서 입력한 error 메시지는 useForm의 formState안에서 꺼내올 수 있음, string()은 입력한 내용이 문자열이 아닐 때 string()안에 입력해준 메시지가 출력, required()는 필수 입력으로 빈값일 경우 입력해준 error메시지 출력
// .email()은 이메일형식에 맞도록 해주는 것, 기존에 정규식으로 @같은 게 없는지 구분해줬어야함
// min()은 최소 입력 값, 최소 몇글자 이상 입력해줘야 하는지, 반대로 .max()도 있음
// error가 하나도 없이 모두 만족하고 있을 경우 formState.isValid가 true