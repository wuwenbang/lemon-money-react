import styled from "styled-components";
import React from "react";
import { useState } from 'react';

type Output = {
  value: number
  onChange: (value: number) => void
  onOkay: () => void
}

const NumberPadSection: React.FC<Output> = (props) => {

  const [output, setOutput] = useState(props.value.toString())

  const updateOutput = (output: string) => {
    if (output.length <= 16) {
      setOutput(output);
      props.onChange(parseFloat(output));
    }
  }

  const onClickHandler = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          updateOutput(text);
        } else {
          updateOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') === -1) {
          updateOutput(output + text);
        }
        break;

      case '清空':
        updateOutput('0');
        break;
      case '删除':
        if (output.length === 1) {
          updateOutput('0');
        } else {
          updateOutput(output.slice(0, -1));
        }
        break;
      case 'OK':
        if (props.onOkay) {
          props.onOkay();
          updateOutput('0');
          window.alert("记账成功");
        }
        break;
    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickHandler}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    font-family: Consolas,monospace;
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px; 
      float: left; 
      width: 25%; 
      height: 64px; 
      border: none;
      &.ok{ 
        height: 128px; 
        float: right; 
        }
      &.zero{ 
          width: 50%; 
        }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }

`;

export default NumberPadSection;