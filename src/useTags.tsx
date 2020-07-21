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
    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, { id: id, name: obj.name });
        setTags(tagsClone);
    }
    return { tags, setTags, findTag, findTagIndex, updateTag }
}

export default useTags;