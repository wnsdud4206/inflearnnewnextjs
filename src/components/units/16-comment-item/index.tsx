import { useState } from "react"
import type { IBoard } from "../../../commons/types/generated/types";

interface ICommentItemProps {
  el: IBoard
}

export default function CommentItem(props: ICommentItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  
  const onClickEdit = (): void => {
    setIsEdit(true);
  }
  
  return (
    <div>
    {!isEdit ? (
      <div>
        <span style={{ margin: "10px" }}>{props.el.title}</span>
        <span style={{ margin: "10px" }}>{props.el.writer}</span>
        <button onClick={onClickEdit}>
          edit
        </button>
      </div>
    ) : (
      <input type="text" />
    )}
    </div>
  )
}