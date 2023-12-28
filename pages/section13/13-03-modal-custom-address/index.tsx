import { Modal } from "antd";
import { useState } from "react";
// import DaumPostcodeEmbed, { type Address } from 'react-daum-postcode';
// 위 처럼 해줘도 되는 것 같은데 강의에서는 따로 import해옴
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      {/* 모달 종료방식 - 1. 모달 숨기는 방식(ex, 이력서, 노트 등) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제&생성하는 방식(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
