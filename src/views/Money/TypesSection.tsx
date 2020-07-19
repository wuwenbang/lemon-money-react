import styled from "styled-components";
import React, { useState } from "react";
type Type = {
    value: '+' | '-',
    onChange: (value: '+' | '-') => void
}
const TypesSection: React.FC<Type> = (props) => {
    const [typeList] = useState<('-' | '+')[]>(['-', '+']);
    const typeMap = { '-': '支出', '+': "收入" }
    return (
        <Wrapper>
            <ul>
                {typeList.map(t => <li
                    key={t}
                    className={props.value === t ? 'selected' : ''}
                    onClick={() => props.onChange(t)}
                >{typeMap[t]}</li>)}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    font-size: 24px;
    > ul{
        display:flex;
        background:#e4e4e4;
        > li {
            width: 50%; 
            text-align:center;
            padding: 16px 0;
            position:relative;
            &.selected::after{
                content: '';
                display:block; 
                height: 5px;
                background:#61bafb;
                position:absolute;
                bottom:0;
                width: 100%;
                left: 0;
            }
        }
    }
`;

export default TypesSection;