import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = e.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url);
    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();  // react스럽지 않은 방법
    fileRef.current?.click();
  };

  // ////////////////////// 리팩토링 안돼있음

  const [inp, setInp] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });
  const [myFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const { writer, password, title, contents } = inp;
    if (!writer || !password || !title || !contents) {
      alert("빈칸이 없도록 입력해주세요!");
      return;
    }
    const result = await myFunc({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
    // 65d6f10e5d6eaa0029f7e037
  };

  const onChangeInp = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    const newInp = { ...inp, [id]: value };
    setInp(newInp);
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInp} />
      <br />
      비밀번호: <input id="password" type="password" onChange={onChangeInp} />
      <br />
      제목: <input id="title" type="text" onChange={onChangeInp} />
      <br />
      내용: <input id="contents" type="text" onChange={onChangeInp} />
      <br />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        파일 선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        // 띄어쓰기 없이
        accept={"image/jpeg,image/png"}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
