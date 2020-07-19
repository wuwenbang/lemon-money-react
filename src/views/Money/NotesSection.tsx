import styled from "styled-components";
import React, { useState, useRef } from "react";

const NotesSection: React.FC = () => {
  // React onChange 每输入一个字就会触发
  // HTML  onChange 鼠标移走才会触发 早于onBlur 
  const [notes, setNotes] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNotes(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
          ref={refInput}
          defaultValue={notes}
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

export default NotesSection;