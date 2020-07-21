import { useState } from "react";
import createId from "lib/createId";

type Tag = {
    id: number
    name: string
}

const defaultTags = [
    { id: createId(), name: "通用" },
    { id: createId(), name: "饮食" },
    { id: createId(), name: "交通" },
    { id: createId(), name: "住宿" }
]
// 封装一个自定义hook
const useTags = () => {
    const [tags, setTags] = useState<Tag[]>(defaultTags);
    const findTag = (id: number) => {
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
        // 获取索引
        const index = findTagIndex(id);
        // 深拷贝 tags 得到 tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        // 把 tagsClone 的第 index项 替换成 { id: id, name: obj.name }
        tagsClone.splice(index, 1, { id: id, name: obj.name });
        // 将 tagsClone 赋值 tags
        setTags(tagsClone);
    }
    const deleteTag = (id: number) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1);
        setTags(tagsClone);
    }
    return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag }
}

export default useTags;