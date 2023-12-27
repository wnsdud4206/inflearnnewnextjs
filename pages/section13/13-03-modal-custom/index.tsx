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
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
    </>
  );
}
