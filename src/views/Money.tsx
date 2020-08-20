import React, { useEffect } from 'react'
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import TypesSection from './Money/TypesSection';
import NumberPadSection from './Money/NumberPadSection';
import { useState } from 'react';
import { useRecords } from '../hooks/useRecords';
import useTags from 'hooks/useTags';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Type = '+' | '-';

const defaultRecords = {
    tagId: 1,
    note: '',
    type: '-' as Type,
    amount: 0
}

function Money() {
    useEffect(() => {
        if (document.documentElement.clientWidth > 500) {
            window.alert("请使用【手机】或者【开发者工具手机模式】预览网址")
        }
    }, [])
    const { createRecord } = useRecords()
    const { tags } = useTags();
    if (tags[0]) {
        defaultRecords.tagId = tags[0].id;
    }
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
            <TagsSection value={selected.tagId}
                onChange={(tagId) => onChange({ tagId: tagId })} />
            <NoteSection value={selected.note}
                onChange={(note) => onChange({ note: note })} />
            <TypesWrapper>
                <TypesSection value={selected.type}
                    onChange={(type) => onChange({ type: type })} />
            </TypesWrapper>
            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount: amount })}
                onOkay={submit} />

        </MyLayout>
    );
}

const TypesWrapper = styled.div`
        background:#e4e4e4;
`

export default Money;