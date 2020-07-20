import React from 'react'
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import TypesSection from './Money/TypesSection';
import NumberPadSection from './Money/NumberPadSection';
import { useState } from 'react';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Type = '+' | '-';

function Money() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        type: '-' as Type,
        amount: '0'
    });
    // Partial 部分类型
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj })
    };
    return (
        <MyLayout>
            <TagsSection value={selected.tags}
                onChange={(tags) => onChange({ tags: tags })} />
            <NoteSection value={selected.note}
                onChange={(note) => onChange({ note: note })} />
            <TypesSection value={selected.type}
                onChange={(type) => onChange({ type: type })} />
            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount: amount })} />

        </MyLayout>
    );
}

export default Money;