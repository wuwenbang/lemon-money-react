import styled from "styled-components";
import React, { ChangeEventHandler } from "react";
import Input from "components/Input";
type Note = {
  value: string
  onChange: (value: string) => void
}
const NoteSection: React.FC<Note> = (props) => {
  // React onChange 每输入一个字就会触发
  // HTML  onChange 鼠标移走才会触发 早于onBlur 
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange} />
    </Wrapper >
  )
}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

export default NoteSection;