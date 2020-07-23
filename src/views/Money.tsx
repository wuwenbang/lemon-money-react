import React from 'react'
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import TypesSection from './Money/TypesSection';
import NumberPadSection from './Money/NumberPadSection';
import { useState } from 'react';
import useRecords from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Type = '+' | '-';

const defaultRecords = {
    tagIds: [1] as number[],
    note: '',
    type: '-' as Type,
    amount: 0
}

function Money() {
    const { createRecord } = useRecords()
    const [selected, setSelected] = useState(defaultRecords);
    // Partial 部分类型
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj });
    };
    const submit = () => {
        if (createRecord(selected)) {
            setSelected(defaultRecords);
        }
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                onChange={(tagIds) => onChange({ tagIds: tagIds })} />
            <NoteSection value={selected.note}
                onChange={(note) => onChange({ note: note })} />
            <TypesSection value={selected.type}
                onChange={(type) => onChange({ type: type })} />
            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount: amount })}
                onOkay={submit} />

        </MyLayout>
    );
}

export default Money;