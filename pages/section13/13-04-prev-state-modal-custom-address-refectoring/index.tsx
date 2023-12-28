import { Modal } from "antd";
import { useState } from "react";
// import DaumPostcodeEmbed, { type Address } from 'react-daum-postcode';
// 위 처럼 해줘도 되는 것 같은데 강의에서는 따로 import해옴, 위처럼 default를 같이 가져올 때는 중괄호 밖에 type을 입력해줄 수 없음, 아마 많아지면 type키워드도 그만큼 많이 사용하게돼서 길어지니까 그런듯
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

      {/* 모달 종료방식 - 1. 모달 숨기는 방식(ex, 이력서, 노트 등) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제&생성하는 방식(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
