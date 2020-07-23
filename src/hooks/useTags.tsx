import { useState, useEffect } from "react";
import createId from "lib/createId";
import useUpdate from './useUpdate';

type Tag = {
    id: number
    name: string
}

// 封装一个自定义hook
const useTags = () => {
    const [tags, setTags] = useState<Tag[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: "通用" },
                { id: createId(), name: "饮食" },
                { id: createId(), name: "交通" },
                { id: createId(), name: "住宿" }
            ]
        }
        setTags(localTags);
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags)
    const findTag = (id: number) => {
        console.log(tags)
        return tags.filter(t => t.id === id)[0]
    }
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    // vue: 可以直接修改数据
    // React: 不可变数据
    const updateTag = (id: number, obj: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? { id, name: obj.name } : tag));
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    }
    const createTag = () => {
        const newTagName = window.prompt("请输入标签名：");
        if (newTagName) {
            setTags([...tags, { id: createId(), name: newTagName }])
        }
    }
    const getTagName = (id: number) => {
        if (id) {
            return tags.filter(tag => tag.id === id)[0].name;
        } else {
            return ''
        }

    }
    return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag, createTag, getTagName }
}

export default useTags;