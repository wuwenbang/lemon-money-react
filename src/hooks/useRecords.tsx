import { useState, useEffect } from 'react';
import useUpdate from './useUpdate';



type NewRecordItem = {
    tagId: number
    note: string
    type: '+' | '-'
    amount: number
}

export type RecordItem = NewRecordItem & {
    time: string
}

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, records)
    const createRecord = (newRecord: NewRecordItem) => {
        if (newRecord.amount <= 0) {
            window.alert("请输入金额")
            return false;
        }
        const record = { ...newRecord, time: (new Date()).toISOString() }
        setRecords([...records, record]);
        return true;
    }
    return { records, createRecord };
}
