import React from 'react'
import Layout from 'components/Layout';
import TypesSection from './Money/TypesSection';
import { useState } from 'react';
import styled from 'styled-components';
import useTags from 'hooks/useTags';
import dayjs from 'dayjs'
import { RecordItem, useRecords } from '../hooks/useRecords';

function Statistics() {
    const [type, setType] = useState<'-' | '+'>('-');
    const { records } = useRecords();
    const { tags, getTagName } = useTags();
    const hash: { [key: string]: RecordItem[] } = {}
    const selectedRecords = records.filter(r => r.type === type);
    selectedRecords.map(r => {
        const key = dayjs(r.time).format('M月DD日')
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
        return r.time;
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        return 0;
    })
    if (tags) {
        return (
            <Layout>
                <TypesWrapper>
                    <TypesSection value={type}
                        onChange={value => setType(value)} />
                </TypesWrapper>
                {array.map(([date, records]) => <div key={date}>
                    <Date>{date}</Date>
                    {records.map(r => {
                        return (<Item key={r.time}>
                            <div className="tags oneLine">{getTagName(r.tagId)}</div>
                            <div className="note">{r.note}</div>
                            <div className="amount">￥{r.amount}</div>
                            {/* <span>{day(r.time).format('YYYY年MM月DD日')}</span> */}
                        </Item>)
                    })}
                </div>)}
            </Layout>
        );
    } else {
        return (<div>tags不存在</div>)
    }

}

const Date = styled.div`
    font-size:18px;
    line-height:20px;
    padding: 10px 16px;
`

const Item = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:white;
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
    >.note{
        color:#999;
        margin-right:auto;
        margin-left:16px;
    }
`

const TypesWrapper = styled.div`
        background:white;
`

export default Statistics;