import styled from "styled-components";
import React, { useRef } from "react";
type Note = {
  value: string
  onChange: (value: string) => void
}
const NoteSection: React.FC<Note> = (props) => {
  // React onChange 每输入一个字就会触发
  // HTML  onChange 鼠标移走才会触发 早于onBlur 
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
          ref={refInput}
          defaultValue={props.value}
          onBlur={onBlur} />
      </label>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

export default NoteSection;